import type { ButtonHTMLAttributes } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex w-full rounded-lg p-2 dark:text-gray-200 items-center",
  variants: {
    type: {
      text: "justify-between whitespace-nowrap text-primary-1000 text-sm esm:text-base hover:scale-105 px-0",
      contained:
        "justify-center text-gray-100 esm:p-4 text-lg esm:text-xl hover:brightness-75",
      outlined: ""
    },
    color: {
      primary: "bg-primary-600 dark:bg-primary-900",
      warning: "bg-gray-600 dark:bg-gray-900",
      error: "bg-red-600 dark:bg-red-900",
      success: "bg-green-600 dark:bg-green-900",
      text: "bg-opacity-0"
    }
  },
  defaultVariants: {
    type: "text",
    color: "primary"
  }
});

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof button>;
  aditionalStyle?: string;
}

export function Button({ variant, aditionalStyle, ...props }: IButton) {
  return <button {...props} className={`${button(variant)} ${aditionalStyle}`} />;
}
