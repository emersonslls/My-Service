//Importe de estilo

import styles from "./Footer.module.css";

//Importe imagens

import LogoB from "../Assets/Name branco.png";
import WhatsApp from "../Assets/Whats.Vector.png";
import Instagram from "../Assets/Insta.Vector.png";
import Twitter from "../Assets/TT.Vector.png";
import ServiceCo from "../Assets/ServiceCo.png";
import EmailIconB from "../Assets/EmailIconB.png";

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Logo}>
                <img src={LogoB} />
            </div>
            <div className={styles.Informacoes}>
                <li>Brasil</li>
                <li>Política de Privacidade</li>
                <li>Termos de Uso</li>
                <li>© 2022 My Service.</li>
            </div>
            <div className={styles.Contatos}>
                <h6>Entre em contato conosco</h6>
                <a
                    href="https://chat.whatsapp.com/DrW7HV2xb7eJDH5WFhYQdK"
                    target="_blank"
                    className={styles.WhatsApp}
                >
                    <span></span>
                    <img src={WhatsApp} />
                </a>
                <a
                    href="https://instagram.com/my.service_?igshid=ZWQyN2ExYTkwZQ=="
                    target="_blank"
                    className={styles.Instagram}
                >
                    <span></span>
                    <img src={Instagram} />
                </a>
                <a
                    href="https://twitter.com/_myservice?s=11"
                    target="_blank"
                    className={styles.Twitter}
                >
                    <span></span>
                    <img src={Twitter} />
                </a>
            </div>

            <div className={styles.Rodape}>
                <div className={styles.Service}>
                    <img src={ServiceCo} />
                </div>
                <div className={styles.Email}>
                    <img src={EmailIconB} />
                    <li>servicemy@outlook.com</li>
                </div>
                <div className={styles.Direitos}>
                    <li>© Todos os direitos reservados - MY SERVICE</li>
                </div>
            </div>

        </footer >
    );
}

export default Footer;