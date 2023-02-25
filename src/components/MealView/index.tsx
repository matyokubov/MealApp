import { useParams } from "react-router-dom"

function MealView(){
    const params = useParams()
    return (
        <div className="container">
            {params.meal_id}
        </div>
    )
}

export default MealView;