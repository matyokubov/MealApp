import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { HeadData, Ingriedents, Measures } from "../../config/meal";


function MealView(){
    const params = useParams()
    const { REACT_APP_BASE_URL } = process.env
    const [ meal, setMeal ] = useState<HeadData & Ingriedents & Measures | undefined>()
    useEffect(() => {
        // setMeal({idMeal: 1})
        fetch(`${REACT_APP_BASE_URL}lookup.php?i=${params.meal_id}`)
            .then((res) => res.json())
            .then((data: {meals: any}) => {
                console.log(data)
                data && setMeal(data.meals[0])
            })
    }, [])

    // const generateRows = () => {
    //     let rows = []
    //     for (let row=1; row<20; row++){
    //         rows.push(
    //             <tr>
    //                 <td>{meal[`strIngredient${row}`]}</td>
    //                 {/* <td>{meal}</td> */}
    //             </tr>
    //         )
    //     }
    // }
    return (
        <div className="container">
            {params.meal_id} {!meal && (<h3>Loading</h3>)}
            <hr />
            {
                meal && <>
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt={params.meal_id} />
                    <br /><br />
                    <table>
                        <tr>
                            <td>{meal.strIngredient1}</td>
                            <td>{meal.strMeasure1}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient2}</td>
                            <td>{meal.strMeasure2}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient3}</td>
                            <td>{meal.strMeasure3}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient4}</td>
                            <td>{meal.strMeasure4}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient5}</td>
                            <td>{meal.strMeasure5}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient6}</td>
                            <td>{meal.strMeasure6}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient7}</td>
                            <td>{meal.strMeasure7}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient8}</td>
                            <td>{meal.strMeasure8}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient9}</td>
                            <td>{meal.strMeasure9}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient10}</td>
                            <td>{meal.strMeasure10}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient11}</td>
                            <td>{meal.strMeasure11}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient12}</td>
                            <td>{meal.strMeasure12}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient13}</td>
                            <td>{meal.strMeasure13}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient14}</td>
                            <td>{meal.strMeasure14}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient15}</td>
                            <td>{meal.strMeasure15}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient16}</td>
                            <td>{meal.strMeasure16}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient17}</td>
                            <td>{meal.strMeasure17}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient18}</td>
                            <td>{meal.strMeasure18}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient19}</td>
                            <td>{meal.strMeasure19}</td>
                        </tr>
                        <tr>
                            <td>{meal.strIngredient20}</td>
                            <td>{meal.strMeasure20}</td>
                        </tr>
                    </table>
                    <p>
                        <h2>Instructions</h2>
                        <p>
                            {meal.strInstructions}
                        </p>
                    </p>
                </>
            }
        </div>
    )
}

export default MealView;