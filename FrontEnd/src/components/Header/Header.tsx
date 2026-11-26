import { translations, type Language } from '../../i18n/translations'
import Styles from './Header.module.css'

type HeaderProps = {
  language: Language
  onLanguageChange: (language: Language) => void
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const t = translations[language].header
 const flag = language === 'pt' ? 'https://flagcdn.com/us.svg' : 'https://flagcdn.com/br.svg'
  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        <a href="#hero" className={Styles.logo}>LE</a>
        <a href="#hero" className={Styles.link}>{t.home}</a>
        <a href="#about" className={Styles.link}>{t.about}</a>
        <a href="#match" className={Styles.link}>{t.match}</a>
        <a href="#projects" className={Styles.link}>{t.projects}</a>
        <a href="#github" className={Styles.link}>{t.github}</a>
        <a href="#hardware" className={Styles.link}>{t.hardware}</a>
        <button className={Styles.langButton} onClick={()=>
            onLanguageChange(language === 'pt' ? 'en' : 'pt')
        }><img src= {flag} className= {Styles.flag}></img></button>
        <a href="#contact" className={Styles.ctn}>{t.contact}</a>
      </nav>
    </header>
  )
}