import Logo from "../../assets/LogoMain.svg";
import Home from "../../assets/home.svg";
import Btn from "./Btn";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <nav className="bg-black h-[125px] px-4 py-8 flex items-center md:justify-between justify-around">
      <div className="md:flex hidden">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="md:hidden flex">
        <Link to={`/`}>
          <img src={Home} alt="Logo" />
        </Link>
      </div>
      <div className="md:flex gap-4 hidden">
        <Link to={`/`}>
          <Btn text="text-white" border="border-white">
            Inicio
          </Btn>
        </Link>
        <Link to={`New`}>
          <Btn text="text-[#2271D1]" border="border-[#2271D1]">
            Nuevo video
          </Btn>
        </Link>
      </div>
      <div className="flex gap-4 md:hidden">
        <Link to={`New`}>
          <Btn text="text-[#2271D1]" border="border-[#2271D1]">
            Nuevo video
          </Btn>{" "}
        </Link>
      </div>
    </nav>
  );
}
