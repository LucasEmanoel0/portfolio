import Styles from './Hero.module.css'
import { translations, type Language } from '../../i18n/translations'

type HeroProps = {
  language: Language
}

export function Hero({ language }: HeroProps) {
  const t = translations[language].hero

  return (
    <section id="hero" className={Styles.hero}>
      <div className={Styles.content}>
        <span className={Styles.status}>
        <span className={Styles.dot}></span>
        {t.status}
      </span>

      <h1 className={Styles.title}>
        {t.title} <span className="gradient-text">{t.titleHighlight}</span>
      </h1>

      <p className={Styles.description}>{t.description}</p>

      <div className={Styles.buttons}>
        <a href="#projects" className={Styles.btn + ' ' + Styles.btnProjects}>
          {t.btnProjects}
        </a>
        <a href="#match" className={Styles.btn + ' ' + Styles.btnMatch}>
          {t.btnMatch}
        </a>
      </div>

      <div className={Styles.stats}>
        <div><p><b>12</b> {t.statsProjects}</p></div>
        <div><p><b>11</b> {t.statsTechnologies}</p></div>
        <div><p><b>1.200+</b> {t.statsCommits}</p></div>
      </div>
      </div>

      <div className={Styles.visual}>
        <div className={Styles.chip}>
          <div className={Styles.core}>
            <b className={Styles.initials + ' gradient-text'}>LE</b>
            <small className={Styles.label}>
              FullStack
            </small>
            
            </div>
          </div>
        </div>
        
        

      
    </section>
  )
}