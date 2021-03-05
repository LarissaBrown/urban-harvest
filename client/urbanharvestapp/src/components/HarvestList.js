import React, {useContext, useEffect} from 'react'
import HarvestPhotos from './Harvest'
import HarvestContext from '../context/HarvestContext'
import UserProvider from '../context/UserProvider'





export default function HarvestList(props) {
    const {getAllHarvests, setHarvests, harvests} = useContext(HarvestContext)
    const {user} = useContext(UserProvider)
    useEffect(()=>{

     getAllHarvests()
     setHarvests(prevHarvests => [...prevHarvests])

        }, []
    )       

    

    return(
        <div>
            
            <h1>Current Available Harvests</h1>
            {harvests.map(harvest => <HarvestPhotos image={user.imageUrl} label={harvest.body} { ...harvest} 
            key={Math.floor(Math.random()* Math.floor(1000))}/>  )}
        </div>
    )
}