import Styles from './Header.module.css'


export function Header(){

    return (<header className={Styles.header}>
        <nav className={Styles.nav}>
            <a href="#hero" className={Styles.logo}>LE</a>
            <a href="#hero" className={Styles.link}>Início</a>
            <a href="#about" className={Styles.link}>Sobre</a>
            <a href="#projects" className={Styles.link}>Projetos</a>
            <a href="#hardware" className={Styles.link}>Hardware</a>
            <a href="#ctn" className={Styles.ctn}>Contato</a>

        </nav>
    </header>)
}
