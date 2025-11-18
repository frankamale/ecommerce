/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FieldPath, UseFormReturn } from "react-hook-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface FormSelectProps {
  form: UseFormReturn<any>;
  options: readonly { label: string; value: string }[];
  name: FieldPath<any>;
  label?: string;
  placeholder?: string;
  showError?: boolean;
  labelClassName?: string;
}

const FormItemSelect = ({
  form,
  options,
  name,
  label,
  placeholder,
  showError = false,
  labelClassName = "text-foreground",
}: FormSelectProps) => {
  return (
    <FormField
      control={form.control}
      name={name}

      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
          <Select onValueChange={field.onChange} value={field.value || ""}>
            <FormControl>
              <SelectTrigger className="max-w-40 3xl:w-fit py-5">
                <SelectValue placeholder={placeholder || "Select a value"} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="w-full bg-white">
              {options.map(({ value, label }, index) => (
                <SelectItem value={value} key={index}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default FormItemSelect;


export const FormItemSelectLine = ({
  form,
  options,
  name,
  label,
  placeholder,
  showError = false,
  labelClassName = "font-semibold text-foreground",
}: FormSelectProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex gap-7 items-center justify-between">
          {label && <FormLabel className={labelClassName}>{label}:</FormLabel>}
          <div className="w-2/3 bg-background rounded-md">
            <Select onValueChange={field.onChange} value={field.value || ""}>
              <FormControl>
                <SelectTrigger className="w-full py-5">
                  <SelectValue placeholder={placeholder || "Select a value"} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="w-[var(--radix-select-trigger-width)]">
                {options.map(({ value, label }, index) => (
                  <SelectItem value={value} key={index}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  );
};


// MultiSelect.tsx

// ... other imports like CheckIcon, XIcon
interface MultiSelectOption {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select...",
  disabled = false,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleSelect = (optionValue: string) => {
    if (!selected.includes(optionValue)) {
      onChange([...selected, optionValue]);
    }
    setInputValue("");
  };

  const handleUnselect = (optionValue: string) => {
    onChange(selected.filter((v) => v !== optionValue));
  };

  const filteredOptions = options.filter(
    (option) =>
      !selected.includes(option.value) &&
      option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-12 hover:bg-transparent"
          disabled={disabled}
          type="button"
        >
          {selected.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {selected.map((item) => {
                const option = options.find((o) => o.value === item);
                return (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {option?.label ?? item}
                    <span
                      className="ml-1 p-0.5 rounded hover:bg-muted"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnselect(item);
                      }}
                      aria-label={`Remove ${option?.label ?? item}`}
                      tabIndex={-1}
                    >
                      <X className="h-3 w-3" />
                    </span>
                  </Badge>
                );
              })}
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <Check className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 ">
        <Command>
          <CommandInput
            placeholder={placeholder}
            value={inputValue}
            onValueChange={setInputValue}
            disabled={disabled}
          />
          <CommandEmpty>No options found.</CommandEmpty>
          <CommandGroup>
            {filteredOptions.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={() => handleSelect(option.value)}
                className="flex items-center justify-between"
              >
                <span className="">{option.label}</span>
                {selected.includes(option.value) && (
                  <Check className="ml-2 h-4 w-4 text-primary" />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

// --- FormItemMultiSelect.tsx ---

interface FormItemMultiSelectProps<T extends Record<string, any>> {
  form: UseFormReturn<T>;
  name: FieldPath<T>;
  label?: string;
  options: MultiSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  labelClassName?: string;
}

export function FormItemMultiSelect<T extends Record<string, any>>({
  form,
  name,
  label,
  options,
  placeholder,
  disabled,
  labelClassName = "font-semibold text-foreground",
}: FormItemMultiSelectProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
          <FormControl>
            <MultiSelect
              options={options}
              selected={field.value || []}
              onChange={field.onChange}
              placeholder={placeholder}
              disabled={disabled}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

interface FormItemInputProps {
  form: UseFormReturn<any>;
  name: FieldPath<any>;
  label?: string;
  placeholder?: string;
  className?: string;
  showError?: boolean;
  labelClassName?: string;
  isRequired?: boolean;
  inputControlClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
}

export function FormItemSearchInput({
  form,
  name,
  label,
  placeholder,
  className = "flex gap-7 items-center justify-between",
  showError = false,
  labelClassName,
  isRequired = false,
  inputControlClassName,
  inputClassName,
  disabled = false,
  options,
}: FormItemInputProps & {
  options: { label: string; value: string }[];
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          {label && (
            <FormLabel
              className={cn("text-button-background mb-2", labelClassName)}
            >
              <>
                {label}:{" "}
                {isRequired && (
                  <span className={"text-sm text-red-500"}>*</span>
                )}
              </>
            </FormLabel>
          )}
          <div className="w-2/3 bg-background rounded-md">

            <Popover modal={true} open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild className="w-full">
                <FormControl className={inputControlClassName}>
                  <Button
                    variant="outline"
                    role="combobox"
                    disabled={disabled as boolean}
                    className={cn(
                      inputClassName,
                      "w-full font-normal justify-between border-gray-400 h-12 hover:font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? options.find((option) => option.value === field.value)
                        ?.label
                      : placeholder
                        ? placeholder
                        : "Select option"}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="data-[state=open]:w-[--radix-popover-trigger-width] p-0">
                <Command>
                  <CommandInput
                    placeholder="Search framework..."
                    className="h-9"
                  />
                  <CommandList
                    ref={(ref) => {
                      if (!ref) return;
                      ref.ontouchstart = (e) => e.preventDefault();
                    }}
                  >
                    <CommandEmpty>No item found.</CommandEmpty>
                    <CommandGroup>
                      {options.map((option) => (
                        <CommandItem
                          className="w-(--radix-select-trigger-width)"
                          value={option.label}
                          key={option.value}
                          onSelect={() => {
                            form.setValue(name, option.value);
                            setOpen(false);
                          }}
                        >
                          {option.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              option.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  );
}