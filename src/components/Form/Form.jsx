import { useState } from "react"
import "./Form.css"
import Input from "../Input/Input"

const Form = ({competencies, setCompetencies}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [fillinglevel, setFillinglevel] = useState("")

    const AddCompetence = (event) => {
        event.preventDefault();

        const updateCompetencies = [...competencies, {
                id: competencies.length + 1,
                Title: title,
                Description: description,
                FillingLevel: parseInt(fillinglevel, 10)
            }]
        setCompetencies(updateCompetencies);
        setTitle(""); 
        setDescription("");
        setFillinglevel(""); 
    }

    return (
        <div className="form">
            <Input placeholder={"Название"} text={title} onChange={e => setTitle(e.target.value)}/>
            <Input placeholder={"Описание"} text={description} onChange={e => setDescription(e.target.value)}/>
            <Input placeholder={"Уровень изученности"} text={fillinglevel} onChange={e => setFillinglevel(e.target.value)}/>
            <button onClick={AddCompetence}>Добавить компетенцию</button>
        </div>
    )
}
export default Form