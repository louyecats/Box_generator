import React, {useState} from 'react'


const ColorForm = ({allBoxObj, setAllBoxObj}) => {
    // to use state, import it at top and create an anonymous function [setter, getter] = useState ({key:value}) 
    const [box, setBox] = useState({
        color: "",
        boxSize: 100,
    });

    //to have one onChange synthetic event function to use on all inputs we use a function to make it into an object vs having multiple functions for each input
    const changeHandler = (e) => {
        // need name of the input & value user changed it to
        //start with function call of the setter setBox used in function to create state, we want to set setBox to an object
        //next use spread operator with getter box, to get all the data within state, so all keys are updated in state, not just the one specific key input value by user at that time
        setBox({
            ...box, [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        //add our new box object to the allBoxObj without losing prev input color/size values, use spread operator to combine/concactenate arrays of current box objects and new box objects placed at the end of array
        setAllBoxObj([...allBoxObj, box])
        //Clear inputs after form submitted since we aren't refreshing the page update <input/> to value{box.key}
        setBox({
            color: "",
            boxSize: ""
        })
    }

  return (
    <div>
        <form onSubmit = {submitHandler}>
            <div>
                <label htmlFor="color">Color:</label>
                <input 
                    type="text" 
                    name="color" 
                    value={box.color} 
                    onChange={changeHandler} 
                />
            </div>
            <div>
                <label htmlFor="size">Size:</label>
                <input 
                    type="number" 
                    name="size" 
                    value={box.size} 
                    onChange={changeHandler} 
                />
            </div>
            <input type="submit" value="Add"/>
        </form>
    </div>
  )
}

export default ColorForm;