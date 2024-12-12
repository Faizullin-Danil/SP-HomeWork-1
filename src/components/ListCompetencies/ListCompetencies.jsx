import Card from "../Card/Card"

const ListCompetencies = ({competencies, setCompetencies}) => {

    return (
        <div>
            {competencies.map((competence) => (
                <Card 
                    id = {competence.id}
                    Title={competence.Title} 
                    Description={competence.Description} 
                    FillingLevel={competence.FillingLevel} 
                    competencies={competencies}
                    setCompetencies={setCompetencies}
                />
            ))}
        </div>
    )
}
export default ListCompetencies