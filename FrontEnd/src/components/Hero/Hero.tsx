import Styles from './Hero.module.css'


export function Hero(){
    return <section id="hero" className={Styles.hero}>
    <span className={Styles.status}> <span className={Styles.dot}></span>disponivel para estagios</span>
    <h1 className = {Styles.title}>Construo sistemas <span className="gradient-text">que se encaixam.</span></h1>
    <p className = {Styles.description}>Sou desenvolvedor full stack e estudante de tecnologia. Construo APIs com Node.js e TypeScript, interfaces com React e uso Python para trabalhar com dados. Também monto PCs e programo robôs, e isso me faz entender um sistema do circuito ao código</p>
    <div className={Styles.buttons}>
        <a href="#projects" className={Styles.btn + " " + Styles.btnProjects}>Ver projetos</a>
        <a href="#match" className={Styles.btn + " " + Styles.btnMatch}>Testar Compatibilidade⚡</a>
    </div>

    <div className={Styles.stats}>
          <div> <p> <b>12</b> projetos</p></div>
          <div> <p> <b>11</b> tecnologias</p></div>
          <div><p><b>1.200+</b> commits</p></div>
    </div>
  
    </section>
}