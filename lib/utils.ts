import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

import type { DataProps } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function catchError(err: unknown) {
  if (err instanceof Error) {
    return toast.error(err.message);
  } else {
    return toast.error("Something went wrong, please try again later.");
  }
}

export function isEmptyValues(obj: DataProps): boolean {
  if (!obj) {
    return true;
  }
  type Keys = keyof DataProps;
  for (const key of Object.keys(obj) as Keys[]) {
    if (obj[key] !== "" && obj[key].length !== 0) {
      return false;
    }
  }
  return true;
}
