import Box from "../../components/Box"
import RandomMeal from "../../components/Random";
import "./index.css"
// import { useNavigate } from "react-router-dom";

function Home() {
    // const navigate = useNavigate()
    return (
        <div>
            <Box title="Meals For You!" description="See more meals in the "/>
            <hr />
            <div className="foryou">
                <RandomMeal/>
                <RandomMeal/>
                <RandomMeal/>
            </div>
            <hr />
        </div>
    )
}

export default Home;