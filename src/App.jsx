import { useState } from 'react'
import './App.css'
import ShowButton from './components/Button/ShowButton'
import Form from './components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  const [competencies, setCompetencies] = useState([
    { id: 1, Title: "Организованность", Description: "Достаточно организован", FillingLevel: 80},
    { id: 2, Title: "Роботоспособность", Description: "Всегда готов к работе", FillingLevel: 40},
    { id: 3, Title: "Адаптивность", Description: "Не пугают перемены и смена обстановки", FillingLevel: 35},
    { id: 4, Title: "Умение находить общий язык с людьми", Description: "В любом обществе буду как свой", FillingLevel: 90},
    { id: 5, Title: "Легко обучаем", Description: "Если что-то действительно заинтересовало, то легко дается к изучению", FillingLevel: 95}
  ])

  return (
    <div>
      <Form competencies={competencies} setCompetencies={setCompetencies}/>
      <ShowButton competencies={competencies} setCompetencies={setCompetencies}/>
      
    </div>
  )
}

export default App
