import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...styles: string[]) => twMerge(clsx(styles));

export default cn;