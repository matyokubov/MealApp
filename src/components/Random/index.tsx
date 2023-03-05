import { useEffect, useState } from "react";
import { HeadData, Ingriedents, Measures } from "../../config/meal";
import Box from "../Box";

function RandomMeal({unique}: {unique?: boolean}) {
    const { REACT_APP_BASE_URL } = process.env
    const [ meal, setMeal ] = useState<HeadData & Ingriedents & Measures | undefined>()
    useEffect(() => {
        // setMeal({idMeal: 1})
        fetch(`${REACT_APP_BASE_URL}random.php`)
            .then((res) => res.json())
            .then((data: {meals: any}) => {
                console.log(data)
                data && setMeal(data.meals[0])
            })
    }, [])
    return (
        <Box card title={meal?.strMeal} description={meal?.strTags} img={meal?.strMealThumb} path={`/meal/${meal?.idMeal}`}/>
    )
}

export default RandomMeal;