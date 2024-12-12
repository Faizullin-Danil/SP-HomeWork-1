import { useState } from "react"
import Input from "../Input/Input"
import "./Formcompetencies.css"

const Formcompetencies = ({competentencies, setCompetencies}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [fillinglevel, setFillinglevel] = useState("")

    const AddCompetentence = (event) => {
        event.preventDefault();
    
        const newcompetentence = {
            id: competentencies.length + 1,
            Name: title,
            Description: description,
            FillingLevel: parseInt(fillinglevel, 10) 
        };
    
        setCompetencies((prevCompetencies) => [...prevCompetencies, newcompetentence]);
    
        setTitle("");
        setDescription("");
        setFillinglevel("");
    };

    return(
        <div className="form-competencies">
            <div className="input-competencies">
                <Input text={"Заголовок"} value={title} onChange={(e) => (setTitle(e.target.value))}/>
                <Input text={"Описание"} value={description} onChange={(e) => (setDescription(e.target.value))}/>
                <Input text={"Уровень изученности"} value={fillinglevel} onChange={(e) => (setFillinglevel(e.target.value))}/>
            </div>
            <button onClick={AddCompetentence}>Добавить</button>
        </div>
    )
}
export default Formcompetencies