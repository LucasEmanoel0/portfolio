import { useState } from 'react'
import { translations, type Language } from '../../i18n/translations'

import Styles from "./Match.module.css"


type MatchProps = {
    language : Language
}

export function Match({language}: MatchProps){

    const [selected, setSelect] = useState<number[]>([])
    const t = translations[language].match


    function toggle(index:number){
        if(selected.includes(index)){
            setSelect(selected.filter((item)=>item !== index))
        }else{
            setSelect([...selected,index])
        }

    }
    const chosen = t.requirements.filter((_, index) => selected.includes(index))


    let points = 0
chosen.forEach((requirement) => {
  if (requirement.level === 'ok') points += 1
  if (requirement.level === 'learning') points += 0.5
})

const percent = chosen.length === 0 ? 0 : Math.round((points / chosen.length) * 100)


function getVerdict() {
  if (chosen.length === 0) return t.verdictEmpty
  if (percent >= 85) return t.verdictHigh
  if (percent >= 60) return t.verdictMid
  return t.verdictLow
}
const levelText = {
  ok: t.levelOk,
  learning: t.levelLearning,
  no: t.levelNo,
}


    return (
        
        <section id='match' className={Styles.container}>
            <span className={Styles.eyebrow}>{t.eyebrow}</span>
            <h2 className={Styles.title}>
                {t.title} <span className='gradient-text'>{t.titleHighlight}</span> {t.titleEnd}
            </h2>
            <p className={Styles.lead}>{t.lead}</p>

            <div className={Styles.match}>
  <div className={Styles.reqs}>
    <h3>{t.reqsTitle}</h3>
    <p className={Styles.sub}>{t.reqsSubtitle}</p>

    <div className={Styles.options}>
      {t.requirements.map((requirement,index)=>(
        <button key={requirement.name} className={
  selected.includes(index)
    ? Styles.option + ' ' + Styles.on
    : Styles.option
} onClick={()=>toggle(index)}>{requirement.name}</button>
      ))}
    </div>
  </div>

  <div className={Styles.result}>
    <div className={Styles.gauge}>
  <svg width="210" height="210">
    <circle className={Styles.track} cx="105" cy="105" r="88" />
    <circle
      className={Styles.fill}
      cx="105"
      cy="105"
      r="88"
      strokeDasharray={553}
      strokeDashoffset={553 - (553 * percent) / 100}
    />
  </svg>
  <div className={Styles.value}>
    <b className={Styles.percent}>{percent}%</b>
    <small>{t.compatible}</small>
  </div>
</div>
    <p className={Styles.verdict}>{getVerdict()}</p>

<ul className={Styles.list}>
  {chosen.map((requirement) => (
    <li key={requirement.name}>
      <span>{requirement.name}</span>
      <span className={Styles[requirement.level]}>
        {levelText[requirement.level as 'ok' | 'learning' | 'no']}
      </span>
    </li>
  ))}
</ul>
  </div>
</div>



        </section>
    )


}