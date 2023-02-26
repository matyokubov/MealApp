function RandomMeal({unique}: {unique?: boolean}) {
    const { REACT_APP_BASE_URL: url} = process.env
    console.log(url);
    
    return (
        <div>Meal</div>
    )
}

export default RandomMeal;