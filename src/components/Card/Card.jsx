import "./Card.css"

const Card = ({id, Title, Description, FillingLevel, competencies, setCompetencies}) => {

    const Delete = () => {
        const updateCompetencies = competencies.filter(competence => competence.id !== id)
        setCompetencies(updateCompetencies)
    }

    return (
        <div className="card">
            <h1>{Title}</h1>
            <h2>{Description}</h2>
            <p>{FillingLevel}%</p>
            <button className="button" onClick={Delete}>X</button>
        </div>
    )
}
export default Card