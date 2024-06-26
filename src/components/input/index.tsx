import { type InputHTMLAttributes } from "react";

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, ...props }: inputProps) {
  return (
    <label className="grid gap-1 text-gray-900 dark:text-gray-200">
      {label}
      <input
        {...props}
        className="rounded-lg border-2 border-primary-400 p-2 text-gray-900 outline-none dark:border-primary-900 dark:bg-background-dark dark:text-gray-200 esm:p-4"
      />
    </label>
  );
}
