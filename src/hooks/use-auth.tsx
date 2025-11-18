import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "@/components/loading-screen";
import { useAuthStore } from "@/store/user-slice";
import { API_BASE_URL } from "@/config/api";

type User = {
    id: string;
    email: string;
    name: string;
    avatar: string;
};

async function apiLogin(email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/rest/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: email,
            password,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        return [200, { authToken: data.accessToken, user: { id: data.id, email: data.email || data.username, name: data.username, avatar: "" } }];
    } else {
        const errorData = await response.json();
        return [response.status, { message: errorData.message || "Login failed" }];
    }
}


type AuthContextValue = {
    authToken?: string | null;
    currentUser: User | null;
    handleLogin: (email: string, password: string) => ReturnType<typeof apiLogin>;
    handleLogout: () => Promise<void>;
    isLoading: boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
    const { user, token, login, logout } = useAuthStore();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(false);
    }, []);

    // Check for token expiration periodically
    useEffect(() => {
        const checkTokenExpiration = () => {
            if (token) {
                try {
                    const payload = token.split('.')[1];
                    const decodedPayload = JSON.parse(atob(payload));
                    const currentTime = Math.floor(Date.now() / 1000);

                    if (decodedPayload.exp && decodedPayload.exp < currentTime) {
                        console.log('Token expired, logging out');
                        logout();
                        navigate('/login', { replace: true });
                    }
                } catch (error) {
                    console.error('Error checking token expiration:', error);
                    // If we can't decode the token, assume it's invalid
                    logout();
                    navigate('/login', { replace: true });
                }
            }
        };

        // Check immediately
        checkTokenExpiration();

        // Check every minute
        const interval = setInterval(checkTokenExpiration, 60000);

        return () => clearInterval(interval);
    }, [token, logout, navigate]);

    async function handleLogin(email: string, password: string) {
        try {
            const response = await apiLogin(email, password);
            if (response[0] === 200 && typeof response[1] === 'object' && response[1] !== null && 'authToken' in response[1] && 'user' in response[1]) {
                const { authToken, user } = response[1] as { authToken: string; user: User };
                login(user, authToken, email);
                return response;
            } else {
                throw new Error("Login failed");
            }
        } catch (error) {
            logout();
            throw error;
        }
    }

    async function handleLogout() {
        logout();
    }

    return (
        <AuthContext.Provider value={{ authToken: token, currentUser: user, handleLogin, handleLogout, isLoading }}>
            {isLoading ? <div><LoadingScreen /></div> : children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used inside of an AuthProvider");
    }
    return context;
}