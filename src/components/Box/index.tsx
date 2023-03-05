import { BasicComponent, Special } from "../../config/utils";
import { NavLink } from "react-router-dom";


function Box({title, description, img, card, path}: BasicComponent & Special) {
    return (
        card ? <div style={{border: "1px solid red"}}>
            <img src={img} alt={title} width={"50px"}/>
            <h3>
                {
                    path ? <NavLink to={`${path}`}>{title}</NavLink>
                    : title
                }
            </h3>
            {description}
        </div> : <div>
            <h2>{title}</h2>
            {description}
            <NavLink to={"/select/c"}>Categories</NavLink>
        </div>
    )
}

export default Box;