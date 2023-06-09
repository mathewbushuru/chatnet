import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium active:scale-95 transition-color focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:opacity-90",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white",
        outline: "text-slate-900 bg-transparent border border-slate-900 hover:bg-slate-200",
        ghost: "text-slate-900 bg-transparent hover:bg-slate-200",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  isDisabled,
  size,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={isLoading || isDisabled}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
