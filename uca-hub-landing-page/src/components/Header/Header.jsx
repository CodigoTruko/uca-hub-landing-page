import style from "./Header.module.scss"
import HomeIcon from '@mui/icons-material/Home';
import { Outlet } from "react-router-dom";

const Header = () => {
    return(
        <div className={style["header-container"]}>
            <h1><a href="/" className={style["header-hover"]}>UCA HUB</a></h1>

            <div className={style["icon-container"]}>
                <h4><a href="/contactus" className={style["header-hover"]}>Contactanos</a></h4>
                <a href="/" className={style["header-hover"]}>
                    <HomeIcon fontSize="large"/>
                </a>
            </div>
            <Outlet />
        </div>
    );
}

export default Header