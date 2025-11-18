import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type UseFormReturn } from "react-hook-form";

interface FormItemInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  showError?: boolean;
  disabled?: boolean;
  onChange?: () => void;
  labelClassName?: string;
}

export default function FormItemInput({
  form,
  name,
  label,
  placeholder,
  type = "text",
  className,
  showError = true,
  onChange,
  labelClassName = "font-semibold text-foreground",
  ...props
}: FormItemInputProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
          <FormControl>
            <Input
              {...props}
              placeholder={placeholder}
              type={type}
              {...field}
              disabled={props.disabled}
              onChange={(e) => {
                field.onChange(e);
                if (onChange) onChange();
              }
              }
            />
          </FormControl>
          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  );
}
export function FormItemInputLine({
  form,
  name,
  label,
  placeholder,
  type = "text",
  className,
  showError = true,
  onChange,
  labelClassName = "text-foreground",
  ...props
}: FormItemInputProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex gap-7 items-center justify-between ${className}`}>
          {label && <FormLabel className={labelClassName}>{label}:</FormLabel>}
          <FormControl>
            <Input
              className="w-2/3 bg-background"
              {...props}
              placeholder={placeholder}
              type={type}
              {...field}
              disabled={props.disabled}
              onChange={(e) => {
                field.onChange(e);
                if (onChange) onChange();
              }
              }
            />
          </FormControl>
          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  );
}