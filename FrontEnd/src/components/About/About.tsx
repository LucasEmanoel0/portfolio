import { translations, type Language } from '../../i18n/translations'
import Styles from './About.module.css'
import { Card } from './Card'



 type AboutProps = {
   language:Language
 }
 const learning = ['Scikit-learn', 'FastAPI', 'Testes']


export function About ({language}:AboutProps){


    const t  = translations[language].about

    return (

        <section id="about" className={Styles.about}>


<span className={Styles.eyebrow}>{t.eyebrow}</span>
<h2 className={Styles.title}>
  {t.title} <span className="gradient-text">{t.titleHighlight}</span>
</h2>

<div className={Styles.grid}>

  <Card variant="photo">
  <img src="/image.png" alt="" className={Styles.photoimg}/>
</Card>


<Card variant="story" label={t.storyLabel}>
  <p>{t.story1}</p>
  <p>{t.story2}</p>
</Card>


<Card variant="location" label={t.locationLabel}>
  <b>{t.location}</b>
  <small>{t.locationDetail}</small>
</Card>


<Card variant="quote">
  <p>{t.quote}</p>
</Card>

<Card variant="hobbies" label={t.hobbiesLabel}>
  <div className={Styles.chips}>
    {t.hobbies.map((hobby) => (
      <span key={hobby} className={Styles.chip}>{hobby}</span>
    ))}
  </div>
</Card>


<Card variant="learning" label={t.learningLabel}>
  <div className={Styles.chips}>
    {learning.map((item) => (
      <span key={item} className={Styles.chip}>{item}</span>
    ))}
  </div>
</Card>



<Card variant="education" label={t.educationLabel}>
  <b>{t.education}</b>
  <small>{t.educationDetail}</small>
</Card>


</div>

      
        </section>
    )

}