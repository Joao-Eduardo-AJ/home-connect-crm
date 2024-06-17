import type { ButtonHTMLAttributes } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "p-2 hover:brightness-95 flex rounded-md",
  variants: {
    color: {
        text: "hover:-rotate-12",
        primary: "bg-gray-700",
        info: "bg-blue-700",
        warning: "bg-yellow-700",
        error: "bg-red-700",
        success: "bg-green-700"
    }
  },
  defaultVariants: {
    color: "text"
  }
});

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof button>;
}

export function IconButton({ variant, ...props }: IButton) {
  return <button {...props} className={button(variant)} />;
}
