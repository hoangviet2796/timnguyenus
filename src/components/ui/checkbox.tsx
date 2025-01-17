import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils"; // Đảm bảo `cn` được import đúng

// Define checkboxVariants with class-variance-authority
const checkboxVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "border border-gray-300 bg-white text-primary hover:bg-gray-100",
        destructive: "border-red-500 bg-white text-red-500 hover:bg-red-100",
        ghost: "bg-transparent hover:bg-gray-50",
      },
      size: {
        default: "h-3 w-3",
        sm: "h-4 w-4",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


export interface CheckboxProps
extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkboxVariants> {
  asChild?: boolean;
}

// Define the Checkbox component
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "input"; // Use Slot if asChild is true
    return (
      <Comp
        type="checkbox"
        className={cn(checkboxVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };