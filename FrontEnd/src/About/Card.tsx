
import Styles from './About.module.css'
import type { ReactNode } from 'react'
type CardProps = {
    variant:string
    label?:string
    children:ReactNode
    
}



export function Card({variant,label,children}:CardProps){



    return(  
    <div className={Styles.card + ' ' + Styles[variant]}>
     {label && <span className={Styles.label}>{label}</span>}
            {children}
    </div>)

}