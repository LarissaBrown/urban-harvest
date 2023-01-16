import React, { useState, useContext } from 'react'
import  { UserContext } from '../context/UserProvider'
import { HarvestContext } from '../context/HarvestProvider'
import Grid from '@material-ui/core/Grid'


export default function HarvestPublishing(props) {
  

    const { user } = useContext(UserContext)
    const { addHarvest } = useContext(HarvestContext)
    const [inputs, setInputs] = useState(user)
    const { hideform, setHideform } = props

 
    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value
       }))
    }

    function handleSubmit(e){
        e.preventDefault()
         addHarvest(inputs)
         
    }

   

    return (
        <Grid  sm={3} xs={8} >
            <div className='publishing-container'>
            <form onSubmit={handleSubmit} >
				<label for="message"></label>
				<input  
                    type="text" 
                    onChange={handleChange} 
                    value=""
                    className="harvest-title" 
                    placeholder="title"
                    name="title" 
                    id="title" 
                    rows="5">
                </input>
                <input
                    type="text"
                    value=""
                    placeholder="image url"
                    name="image"
                    onChange={handleChange}
                    />
                <button>Publish</button>
            </form> */}
            {/* </div> 
        </Grid >
    )
}