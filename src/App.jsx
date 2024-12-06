import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card/Card.jsx"
import DogImage from "./image/Dog.jpg";

const cardscompetencies = [
  { text: "Способен на длительную умственную работу"},
  { text: "Дисциплинирован"},
  { text: "Занимаюсь спортом"},
  { text: "Коммуникабельный"},
]

const cardswantcompetencies = [
  { text: "Реакт"},
  { text: "css"},
  { text: "html"},
  { text: "js"},
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card src={DogImage} text={"Файзуллин Данил Рамилевич"} alt={"Dog"}/>
      
      <div className='card-container'>
        <div className='column'>
          <h1>Мои компетенции</h1>
          {cardscompetencies.map((card, index) => 
            <Card key={index} text={card.text}/>
          )}
        </div>
        
        <div className='column'>
          <h1>Желаемые компетенции</h1>
          {cardswantcompetencies.map((card, index) => 
            <Card key={index} text={card.text}/>
          )}
        </div>
      </div>
    </>
  )
}

export default App
