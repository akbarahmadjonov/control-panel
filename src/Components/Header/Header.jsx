import NavbarData from "./NavbarData" 
import "./Header.scss"
import logo from "../../Assets/Images/logo.svg"
export const Header=()=>{
    return(
<header className="site_header">
    <div className="site_header_wrapper ">
        <a className="header_link ms-5 " href="./index.html">
            <img src={logo} alt="header_logo" />
        </a>
        <nav className='nav mt-5 pt-4  '>
          <ul className='nav__list'>
            {
                NavbarData.map((item)=>(
                    <li className="list-unstyled mb-3 d-flex pt-4">
                    <a href="index.html" className="navbar_link ">
                    <img  className="navbar_img mx-3 " alt="navbar_logo" src={item.icon}/>
                    </a>
                    <span className="nav-span">{item.text}</span></li>
                ))
            }
          </ul>
        </nav>
    </div>
</header>
    )
}