const techs = [
  { name: 'TypeScript', color: '#3178c6', top: '12%', left: '18%',delay: '0s' },
  { name: 'Node.js',    color: '#68a063', top: '25%', left: '78%',delay: '-2s' },
  { name: 'PostgreSQL', color: '#4f7cff', top: '45%', left: '8%' ,delay: '-4s' },
  { name: 'React',      color: '#61dafb', top: '78%', left: '75%' , delay: '1s'},
  { name: 'Python',     color: '#ffd43b', top: '72%', left: '15%' , delay: '2s'},
  { name: 'Arduino',    color: '#00979d', top: '88%', left: '42%' ,delay: '3s'},
]







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
          {techs.map((tech)=>(
            <span key={tech.name}
            className={Styles.node}
            style={{top:tech.top,left:tech.left,animationDelay: tech.delay}}>
              <span className={Styles.nodeDot}
              style = {{background:tech.color}}>
              </span>
              {tech.name}
            </span>
          ))}
        </div>
        
        

      
    </section>
  )
}