import { BasicComponent } from "../../utils";
import { NavLink } from "react-router-dom";

function Box({title, description, card}: BasicComponent) {
    return (
        card ? <div>
            Card
        </div> : <div>
            <p>
                <h2>{title}</h2>
                {description}
                <NavLink to={"/categories"}>Categories</NavLink>
            </p>
        </div>
    )
}

export default Box;