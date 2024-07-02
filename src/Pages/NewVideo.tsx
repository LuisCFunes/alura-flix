import Header from "../components/HeaderSection/Header"
import Footer from "../components/Footer"
import Form from "../components/FormNewVideo/Form"

export default function NewVideo() {

    return (
        <div>
            <Header />
            <div className="text-white text-center">
                <h1 className="text-[60px]">NUEVO VIDEO</h1>
                <p className="text-[20px]">COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            </div>
            <Form />
            <Footer />
        </div>
    )
}