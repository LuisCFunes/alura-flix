import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    border: string;
    children: ReactNode;
}

export default function Btn({ text, border, children, type, ...rest }: Props) {
    return (
        <button type={type} className={`${text} border-2 ${border} rounded-md px-4 py-2 w-[180px] h-[54px] text-xl uppercase`} {...rest}>
            {children}
        </button>
    )
}
