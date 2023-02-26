import Box from "../../components/Box"
import RandomMeal from "../../components/Random";
// import { useNavigate } from "react-router-dom";

function Home() {
    // const navigate = useNavigate()
    return (
        <div>
            <Box title="Meals For You!" description="See more meals in the "/>
            <div>
                <RandomMeal/>
                <RandomMeal/>
                <RandomMeal/>
                <RandomMeal/>
                <RandomMeal/>
                <RandomMeal/>
                <RandomMeal/>
                <RandomMeal/>
                <RandomMeal/>
                <RandomMeal/>
                <RandomMeal/>
                <RandomMeal/>
            </div>
        </div>
    )
}

export default Home;