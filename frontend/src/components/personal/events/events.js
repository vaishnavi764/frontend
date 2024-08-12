import {useState} from "react"
export const Events=()=>{
    const [name,setName]=useState()
    const ChangeName=() => {
        alert("darlings")
console.log("hello world")
        
    }
    return(
        <div> 
        <h2> homepage</h2>
        <button onClick={()=>ChangeName()}>click me </button>
        </div>
    );
}
