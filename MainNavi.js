import React, {useContext} from "react";

//importing TaskContext from App.js
import {TaskContext} from "../App";

const MainNavi = () => {
    //get all states from TaskContext using useContext?
    const {tasks,setTasks} = useContext(TaskContext); 
    return (
        <>
            {/* check for booleans here? */}
            {/* if we have data in state, render task items into main state? */}
            tasks.map((task) => {
                return(
                    <div name={task.name} >
                        <h2>{task.name}</h2>
                    </div>
                );
            })
            All tasks in this space

            {/* click to add a task? */}
            <button
                style={{ margin: "10px" }}
                onClick={() => {
                    // let updatedCheckoutItems = [...checkoutItems];
                    // updatedCheckoutItems.push(item);
                    // setCheckoutItems(updatedCheckoutItems);
                    // setTotalValue(parseInt(totalValue + item.price));
                }}
                >
                Add task
            </button>
        </>
    );
};

export default MainNavi;