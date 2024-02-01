//Importe de estilo

import styles from "./Header.module.css";

//Importe imagens

import NewLogo from "../Assets/Name Azul.png";


function Header() {

    return (
        <header className={styles.Header}>
            <div className={styles.Logo}>
                <img src={NewLogo} />
            </div>
        </header>
    );
}

export default Header;