import { useEffect, useState } from "react";

interface ListType{
    type: string;
}

// c - categories
// a - area
// i - ingredients
function List({type}: ListType) {
    const { REACT_APP_BASE_URL } = process.env
    const [ list, setList ] = useState<any>()
    useEffect(() => {
        fetch(`${REACT_APP_BASE_URL}list.php?${type}=list`)
            .then((res) => res.json())
            .then((data: {meals: Array<object>}) => {
                console.log(data)
                data && setList(data.meals)
            })
    }, [])
    console.log(list, "list");
    return (
        <div className="list">
            <ul>
                {
                    type === "c" ? list?.map(({strCategory}: {strCategory: string}, i: number) => {
                        return (
                            <li key={i}>
                                {strCategory}
                            </li>
                        )
                    }) : type === "a" ? list?.map(({strArea}: {strArea: string}, i: number) => {
                        return (
                            <li key={i}>
                                {strArea}
                            </li>
                        )
                    }) : type === "i" ? list?.map(({strIngredient, idIngredient, strDescription}: {strIngredient: string, idIngredient: number, strDescription: string}) => {
                        console.log(strIngredient, "sec");
                        return (
                            <li key={idIngredient}>
                                <h3>{strIngredient}</h3>
                                {strDescription}
                            </li>
                        )
                    }) : <></>
                }
            </ul>
        </div>
    )
}

export default List;