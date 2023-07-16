import style from "./Header.module.scss"
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    return(
        <div className={style["header-container"]}>
            <h1>UCA HUB</h1>
            <div className={style["icon-container"]}>
                <HomeIcon fontSize="large"/>
            </div>
        </div>
    );
}

export default Header