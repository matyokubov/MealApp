// import { useEffect, useState } from "react";
import List from "../../components/List";

interface SelectType{
    getDataBy?: string;
}

function Select({getDataBy}: SelectType) {
    return (
        <div className="container">
            {
                getDataBy == "c" ? (
                           <div className="container">
                                <h1>Categories of meals</h1>
                                <List type="c"/>
                           </div> 
                        ) :
                getDataBy == "a" ? (
                           <div className="container">
                                <h1>Areas</h1>
                                <List type="a"/>
                           </div> 
                        ) :
                getDataBy == "i" ? (
                           <div className="container">
                                <h1>Ingredients</h1>
                                <List type="i"/>
                           </div> 
                        ) :
                <></>
            }
        </div>
    )
}

export default Select;