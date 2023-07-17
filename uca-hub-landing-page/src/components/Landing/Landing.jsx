import style from "./Landing.module.scss"

const Landing = () => {
    return (

        <section className={style["main-section"]}>
            <figure className={style["ucahub-logo-figure"]}>
                <img src="public/android-chrome-192x192.png" alt="UCA HUB Logo" />
            </figure>
            <h2 className={style["download-quote"]}>¡En UCA HUB podras llegar a tu máximo potencial!</h2>
            <a className={style["download-now-button"]} href="https://play.google.com/store/apps/details?id=com.codigotruko.ucahub">¡Descargar Ahora!</a>
            <div className={style["benefits-container"]}>
                <div className={style["benefit1"]}>
                    <img src="src/assets/grupo.png"/>
                    <h3>Conexiónes Estudiantiles</h3>
                    <p>!Permitimos a los estudiantes conectarse entre sí y establecer relaciones de una manera muy sencilla, con el simple hecho de entrar a nuestra app ya podras realizar interacciones¡</p>
                </div>
                <div className={style["benefit2"]}>
                <img src="src/assets/unido.png"/>
                    <h3>Colaboración Académica</h3>
                    <p>Podras compartir dudas que tengas sobre algun tema, discutir sobre proyectos y organizar grupos de estudio.</p>
                </div>
                <div className={style["benefit3"]}>
                <img src="src/assets/bar.png"/>
                    <h3>Descubrimiento de Eventos</h3>
                    <p>Mediante las comunidades se podran crear grupos para realizar eventos o actividades estudiantiles. Los estudiantes tendran la oportunidad de participar en actividades que les interesen.</p>
                </div>
            </div>

            <h2>!Animate a descargar UCA HUB¡, Aca te mostramos una vista previa de como se ve nuestra APP:</h2>
            <div className={style["screenshot-container"]}>
                <div className={style["sc1"]}>
                    <h3>Log In</h3>
                    <img src="src/assets/screenshots/log-in.png"/>
                </div>
                <div className={style["sc2"]}>
                    <h3>Main Feed</h3>
                    <img src="src/assets/screenshots/main-feed.png"/>
                </div>
                <div className={style["sc3"]}>
                    <h3>Perfiles</h3>
                    <img src="src/assets/screenshots/profile.png"/>
                </div>
                <div className={style["sc4"]}>
                    <h3>Agregar Publicaciónes</h3>
                    <img src="src/assets/screenshots/add-publication.png"/>
                </div>
                <div className={style["sc5"]}>
                    <h3>Realizar Comentarios</h3>
                    <img src="src/assets/screenshots/comments.png"/>
                </div>
                <div className={style["sc6"]}>
                    <h3>Buscar otros usuarios</h3>
                    <img src="src/assets/screenshots/search.png"/>
                </div>
            </div>
        </section>


    );
}
export default Landing;