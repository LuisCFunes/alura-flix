interface Props {
    text: string;
    children: string;
    border: string;
}

export default function Btn({ text,border, children }: Props) {

    return (
        <button className={`${text} border-2 ${border} rounded-md px-4 py-2 w-[180px] h-[54px] text-xl uppercase`}>{children}</button>
    )
}