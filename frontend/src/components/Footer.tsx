import {Link} from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter, BsWhatsapp} from "react-icons/all";
import Logo from "../assets/images/LogoTulipannV2.svg";

export const Footer = () => {
    return (
        <>
            <footer
                className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 text-sm mx-0 md:mx-10 p-6 text-gray-500 border-b-2 border-t-2 border-gray-100">
                <div
                    className={"w-full lg:flex-2 flex flex-col gap-4 md:gap-6 items-center lg:items-start justify-center lg:justify-start lg:max-w-sm"}
                >
                    <div className={"h-12"}>
                        <img src={Logo} alt={Logo} className={`h-full w-full object-cover`}/>
                    </div>
                    <p className={"text-center lg:text-left w-2/3 lg:w-full"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab, maiores?</p>
                    <div className={"flex gap-6"}>
                        <BsFacebook size={20}/>
                        <BsInstagram size={20}/>
                        <BsTwitter size={20}/>
                        <BsWhatsapp size={20}/>
                    </div>
                </div>
                <div className={"grid grid-cols-2 px-20 md:px-0 md:grid-cols-4 gap-8 md:gap-12 lg:flex-1"}>
                    <ul className={"text-xl flex flex-col gap-2 items-center"}>
                        <li className={"text-red-600"}>Lorem</li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                    </ul>
                    <ul className={"text-xl flex flex-col gap-2 items-center"}>
                        <li className={"text-red-600"}>Lorem</li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                    </ul>
                    <ul className={"text-xl flex flex-col gap-2 items-center"}>
                        <li className={"text-red-600"}>Lorem</li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                    </ul>
                    <ul className={"text-xl flex flex-col gap-2 items-center"}>
                        <li className={"text-red-600"}>Lorem</li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                        <li><Link to={"#"}>lorem</Link></li>
                    </ul>
                </div>
            </footer>
            <div className={"p-4 mb-4 flex flex-col gap-4 items-center text-gray-500 text-center"}>
                <span className={"flex gap-2 items-center"}>© 2022 Tulipann Store. Todos los derechos reservados</span>
                <span className={"text-sm"}>Desarrollado por <a href="https://nastmz.github.io/portfolio"
                                                                target={"_blank"} className={"text-red-400"}>Kevin Martinez</a> y <a
                    href="https://www.linkedin.com/in/joshep-mateo-granada-quinchia-41b379207/" target={"_blank"}
                    className={"text-red-400"}>Mateo Granada</a></span>
            </div>
        </>
    )
}
