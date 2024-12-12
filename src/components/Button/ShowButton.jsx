import "./ShowButton.css"
import ListCompetencies from "../ListCompetencies/ListCompetencies"
import { useState, useEffect } from "react"

const ShowButton = ({competencies, setCompetencies}) => {
    const [showing, setShowing] = useState(false)
    const [text, setText] = useState("Показать компетенции")
    const [filteredcompetence, setFilteredcompetence] = useState(competencies)

    const HideOrShow = () => {
        setShowing(!showing);
        setText(showing ? "Показать компетенции" : "Убрать компетенции");
    }

    const More50 = () => {
        const competenciesmore50 = competencies.filter(competence => competence.FillingLevel > 50)
        setFilteredcompetence(competenciesmore50)
    }

    const Less50 = () => {
        const competenciesless50 = competencies.filter(competence => competence.FillingLevel < 50)
        setFilteredcompetence(competenciesless50)
    }

    
    useEffect(() => {
        setFilteredcompetence(competencies); 
    }, [competencies]);

    return (
        <div>
            <button onClick={HideOrShow}>{text}</button>
                { showing && 
                    <div>
                        <button onClick={More50}>Показать компетенции с уровнем изучения больше 50%</button>
                        <button onClick={Less50}>Показать компетенции с уровнем изучения меньше 50%</button>
                        <ListCompetencies competencies={filteredcompetence} setCompetencies={setCompetencies}/>
                    </div>
                }   
        </div>
    )
} 
export default ShowButton
