import {useState} from 'react'
import type {Language} from './i18n/translations'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Match } from './components/Match/Match'


function App() {
  const [language, setLanguage] = useState<Language>('en')
  return (
    <>
    <Header language={language} onLanguageChange={setLanguage}></Header>
   <Hero language={language}></Hero>
   <About language={language} />
   <Match language={language}></Match>

   </>
   
   
  )
}

export default App