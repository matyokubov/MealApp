import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Box from "../../components/Box";

interface SingleMealCards{
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

function Meals({type}: {type: any}){
    const params = useParams()
    const { REACT_APP_BASE_URL } = process.env
    const [ meals, setMeals ] = useState<any>()
    useEffect(() => {
        // setMeal({idMeal: 1})
        fetch(`${REACT_APP_BASE_URL}filter.php?${type}=${params.name}`)
            .then((res) => res.json())
            .then((data: {meals: any}) => {
                data && setMeals(data.meals)
            })
    }, [])
    console.log(meals);
    return (
        <div>
            {
                meals?.map(({idMeal, strMeal, strMealThumb}: SingleMealCards, ) => <Box img={strMealThumb} card key={idMeal} title={strMeal} path={`/meal/${idMeal}`}/>)
            }
        </div>
    )
}

export default Meals;