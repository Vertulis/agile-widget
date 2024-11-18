import { NavLink } from "react-router-dom";
import style from '../Modules/Navbar.module.css'

export default function Navbar(){
    return(
        <div className={style.navbar}>  
            
            <NavLink to="/" className={style.dashboardHeading}>
                <h1 className={style.dashboardHeading} >Dashboard</h1>         
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/weatherWidget" className={({ isActive }) => (isActive ? style.active : '')}>
                        <i className="fa-solid fa-cloud fa-xl"></i> Weather
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/newsWidget" className={({ isActive }) => (isActive ? style.active : '')}>
                        <i className="fa-solid fa-newspaper fa-xl"></i> News
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}