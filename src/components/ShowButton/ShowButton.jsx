import { useState } from "react"
import Card from "../Card/Card.jsx"
import Formcompetencies from "../Formcompetencies/Formcompetencies.jsx"
import "./ShowButton.css"

const ShowButton = ({competencies, setCompetencies}) => {
    const [showing, setShowing] = useState(false)
    const [text, setText] = useState("Показать компетенции")
    const [filtercompetencies, setFiltercompetencies] = useState(competencies)
    
    const ShowOrHide = () => {
        if (showing) {
            setShowing(false)
            setText("Показать компетенции")
        }
        else {
            setShowing(true)
            setText("Убрать компетенции")
        }
    }

    const More50 = () => {
        const filtered = competencies.filter(competence => competence.FillingLevel > 50)
    
        setFiltercompetencies(filtered);
    };
    
    
    const Less50 = () => {
        const filtered = competencies.filter(competence => competence.FillingLevel < 50)

        setFiltercompetencies(filtered);
    }

    return (
        <div>
            <button onClick={ShowOrHide}>{text}</button>

            {showing && (
                <div className="center-container">
                    <Formcompetencies competentencies={competencies} setCompetencies={setCompetencies}/>
                    <button onClick={More50}>Показать компетенции с уровнем изучения больше 50%</button>
                    <button onClick={Less50}>Показать компетенции с уровнем изучения меньше 50%</button>

                    {filtercompetencies.map((filtercompetence) => (
                        <Card 
                            key={filtercompetence.id} 
                            Name={filtercompetence.Name} 
                            Description={filtercompetence.Description} 
                            FillingLevel={filtercompetence.FillingLevel}
                        />
                    ))}
                </div>
            )}
        </div>
        
    )
}
export default ShowButton