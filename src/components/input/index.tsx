import { type InputHTMLAttributes } from "react";

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, ...props }: inputProps) {
  return (
    <label className="grid gap-1">
      {label}
      <input
        {...props}
        className="rounded-lg border-2 border-primary-400 p-2 outline-none dark:border-primary-900 dark:bg-background-dark esm:p-4"
      />
    </label>
  );
}
