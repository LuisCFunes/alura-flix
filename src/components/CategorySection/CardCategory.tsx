interface Props {
    children: string;
    color: string;
}

export default function CardCategory({ children, color }: Props) {
    return (
        <>
            <div className={`h-[92px] w-[296px] ${color} text-white rounded-lg text-[48px] font-extrabold flex justify-center items-center mb-4`}>
                {children}
            </div>
        </>

    )
}