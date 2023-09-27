import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          `
        items-center 
        justify-center 
        inline-flex
        h-9
        w-9
        p-1
        rounded-md
        shadow-sm
        border
        border-slate-600
        hover:bg-slate-600
        hover:border-transparent
        focus:ring-2
        disabled:cursor-not-allowed 
        disabled:opacity-50
        transition
        text-white
        font-semibold
        `,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
