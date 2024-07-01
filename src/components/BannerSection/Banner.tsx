import Background from "../../assets/background.png"

function Banner() {
    return (
        <div className="hidden md:block h-dvh relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-[#001233] before:opacity-70 before:z-10">
            <img src={Background} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
            <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center md:items-center text-white p-6">
            <div className={`h-[92px] w-[296px] bg-frontend text-white rounded-lg text-[48px] font-extrabold flex justify-center items-center mb-4`}>
                Frontend
            </div>
                <h2 className="sm:text-4xl text-2xl font-bold mb-6 mt-6">Challenge React</h2>
                <p className="sm:text-lg text-base text-left md:text-center text-gray-200 w-[662px]">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
        </div>
    )
}

export default Banner