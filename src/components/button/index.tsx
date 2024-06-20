import type { ButtonHTMLAttributes } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex w-full rounded-lg p-2 dark:text-gray-200 items-center",
  variants: {
    type: {
      text: "justify-between whitespace-nowrap text-primary-1000 text-sm esm:text-base hover:scale-105 px-0",

      contained:
        "justify-center bg-primary-600 text-gray-100 dark:bg-primary-900 esm:p-4 text-lg esm:text-xl",
      outlined: ""
    }
  },
  defaultVariants: {
    type: "text"
  }
});

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof button>;
  aditionalStyle?: string;
}

export function Button({ variant, aditionalStyle, ...props }: IButton) {
  return <button {...props} className={`${button(variant)} ${aditionalStyle}`} />;
}
