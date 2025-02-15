import { useEffect, useState } from "react"
import LOGO from "../assets/images/logo.png";
import { MENU_LINKS } from "../utils/data";
import { Link } from "react-scroll";

function Navbar() {

    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const hadleResize = () => {
            if (window.innerWidth >= 768 ){
                setIsOpen(true);
            }else{
                setIsOpen(false);   
            }
        }
        
        hadleResize();

        window.addEventListener('resize', hadleResize);

        return () => {
            window.removeEventListener('resize', hadleResize);
        }
        
    }, []);

    return (
        <nav className="container mx-auto sticky top-5 z-10">
            <div className="flex items-center justify-between rounded-full bg-white/25 border border-primary backdrop-blur[10px] m-5 p-3 md:p-0">
                <img src={LOGO} alt="logo" className="h-7 ml-6 -mb-1" />

                <button className="block md:hidden text-[#333] mr-4 focus-outline-none" onClick={toggleMenu}>
                    <svg className="w-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                        xmlns="https://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>

                <ul className={`${isOpen ? "flex" : "hidden" } menu-wrapper`}>
                    { MENU_LINKS.map((item) => (
                        <li key={item.id}>
                            <Link 
                                activeClass="active" 
                                to={item.to} 
                                smooth 
                                spy 
                                offset={item.offset} 
                                className="menu-item"
                            >
                                {item.label}

                                
                            </Link>
                        </li>
                    )) }
                </ul>

                <button className="hidden md:block h-12 text-[15px] font-meduim text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-out hover:scale-105">Hire Me</button>
            </div>

            
        </nav>
    )
}

export default Navbar
