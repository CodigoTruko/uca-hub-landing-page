import style from "./ContactUs.module.scss"

const ContactUs = () => {
    return(
        <div className={style["contact-us-container"]}>
            <div className={style["grid"]}>
                <div className={style["contact-us-text"]}>
                    <h2>Si deseas contactarnos puedes hacerlo a los siguientes emails:</h2>
                    <p>00078421@uca.edu.sv</p>
                    <p>00072520@uca.edu.sv</p>
                    <p>00046821@uca.edu.sv</p>
                </div>
                <figure className={style["img"]}>
                    <img src="src/assets/contact-us.png" alt="Contactanos Logo" />
                </figure>
            </div>
        </div>
    );
}

export default ContactUs
