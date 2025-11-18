// src/components/forms/form-item-textarea.tsx

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { type UseFormReturn } from "react-hook-form";
import { Textarea } from "../ui/textarea";

interface FormItemTextareaProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<any>;
    name: string;
    label?: string;
    placeholder?: string;
    className?: string;
    showError?: boolean;
    labelClassName?: string;
}

export default function FormItemTextarea({
    form,
    name,
    label,
    placeholder,
    className,
    showError = true,
    labelClassName = "font-semibold text-foreground",
    ...props
}: FormItemTextareaProps) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
                    <FormControl>
                        <Textarea
                            {...props}
                            className="resize-none"
                            placeholder={placeholder}
                            {...field}
                            rows={4}
                        />
                    </FormControl>
                    {showError && <FormMessage />}
                </FormItem>
            )}
        />
    );

} export function FormItemTextareaLine({
    form,
    name,
    label,
    placeholder,
    className,
    showError = true,
    labelClassName = "text-foreground",
    ...props
}: FormItemTextareaProps) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={`${className} flex gap-7 items-center justify-between`}>
                    {label && <FormLabel className={labelClassName}>{label}:</FormLabel>}
                    <FormControl>
                        <div className="w-2/3 bg-background rounded-md">
                            <Textarea
                                {...props}
                                className="resize-none bg-background rounded-md"
                                placeholder={placeholder}
                                {...field}
                                rows={4}
                            />
                        </div>
                    </FormControl>
                    {showError && <FormMessage />}
                </FormItem>
            )}
        />
    );
}