import style from "./Landing.module.scss"

const Landing = () => {
    return (

        <section className={style["main-section"]}>
            <figure>
                <img src="public/android-chrome-192x192.png" alt="UCA HUB Logo" />
            </figure>
            <h2 className={style["download-quote"]}>¡En UCA HUB podras llegar a tu máximo potencial!</h2>
            <a className={style["download-now-button"]} href="https://play.google.com/store/apps/details?id=com.codigotruko.ucahub">¡Descargar Ahora!</a>
        </section>


    );
}
export default Landing;