import { type TdHTMLAttributes } from "react";
import { type VariantProps, tv } from "tailwind-variants";

export const cell = tv({
  base: "border-collapse border p-2 border-primary-200",
  variants: {
    type: {
      hiddenSM: "hidden sm:table-cell",
      hiddenMD: "hidden md:table-cell"
    }
  }
});

interface ICellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  variant?: VariantProps<typeof cell>;
}

export function TH({ variant, ...props }: ICellProps) {
  return <th {...props} className={cell(variant)}></th>;
}

export function TD({ variant, ...props }: ICellProps) {
  return <td {...props} className={cell(variant)}></td>;
}
