import Logo from "../assets/LogoMain.svg"

export default function Footer(){
    return (
      <div className="border-t-4 border-[#2271D1] px-4 py-6">
        <img className="mx-auto" src={Logo} alt="Logo" />
      </div>  
    )
}