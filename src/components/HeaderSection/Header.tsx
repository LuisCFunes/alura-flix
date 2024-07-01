import Logo from '../../assets/LogoMain.svg'
import Home from '../../assets/home.svg'
import Btn from './Btn'

export default function App() {
    return (
        <nav className='bg-black h-[125px] px-4 py-8 flex items-center md:justify-between justify-around'>
            <div className='md:flex hidden'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='md:hidden flex'>
                <img className='' src={Home} alt="Logo" /></div>
            <div className='md:flex gap-4 hidden'>
                <Btn text='text-white' border='border-white'>Inicio</Btn>
                <Btn text='text-[#2271D1]' border='border-[#2271D1]'>Nuevo video</Btn>
            </div>
            <div className='flex gap-4 md:hidden'>
                <Btn text='text-[#2271D1]' border='border-[#2271D1]'>Nuevo video</Btn>
            </div>
        </nav>
    )
}