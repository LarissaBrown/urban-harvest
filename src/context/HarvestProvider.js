import React, {useState} from "react";
import { userAxios} from "./UserProvider";

export const HarvestContext = React.createContext();

function HarvestProvider(props) {

    const [initState] = useState([
        { 
            title: 'Potatoes',
            body: 'These potatoes are fresh from the earth.', 
            harvestImg: 'https://images.unsplash.com/photo-1599776765307-c7fb21bf7a91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODJ8fHZlZ2V0YWJsZSUyMGdhcmRlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop', 
            userHandle: 'Farmer Brown' 
        },
        { 
            title: 'Lettuce',
            body: 'Lettuce is ready.', 
            harvestImg: 'https://images.unsplash.com/photo-1516906561371-53f48df1254d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZXRhYmxlJTIwZ2FyZGVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop', 
            userHandle: 'Farmer Gorton' 
        },
        { 
            title: 'Lemons',
            body: 'Life has given us lemons.', 
            harvestImg: 'https://images.unsplash.com/photo-1533680074546-cdacd8313251?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXQlMjB0cmVlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
            userHandle: 'Farmer Kirah' 
        },
        { 
            title: "Cherries",
            body: "Cherries! Cherries! We've got cherrries.", 
            harvestImg: 'https://images.unsplash.com/photo-1435910083655-98a18caf9b3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZnJ1aXQlMjB0cmVlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
            userHandle: 'Farmer Sue' 
        },
        { 
            title: "Apricots",
            body: 'Please take some apricots.', 
            harvestImg: 'https://images.unsplash.com/photo-1597663072555-b2c94a94ab71?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXByaWNvdCUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
            userHandle: 'Farmer Fred' 
        },
        { 
            title: "Apples",
            body: 'An apple a day, for days.', 
            harvestImg: 'https://images.unsplash.com/photo-1600917000152-ff5d44a22c2e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGFwcGxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
            userHandle: 'Farmer Gillian' 
        },
        {   
            title: "Tomatoes",
            body: 'Attack of Too Many Tomatoes!', 
            harvestImg: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHRvbWF0b2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
            userHandle: 'Farmer Penelope' 
        },
        { 
            title: "Raspberries",
            body: "Ripe for the Pickin'.", 
            harvestImg: 'https://images.unsplash.com/photo-1472479427421-c6daa7ce0f7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJlcnJpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
            userHandle: 'Farmer Mark' 
        }
    ])
    const [harvest, setHarvest] = useState();
    const [harvests, setHarvests] = useState(initState);
    const [home, setHome] = useState(true)
    const [myHarvestIsClicked, setMyHarvestIsClicked] = useState(false)
    const [isClicked, setIsClicked]= useState(true)

    
    const getAllHarvests = () => {
        userAxios.get(`/harvests`)
            .then(response => {
                setHarvests([response.data]);
            })
            .catch(err => console.error(err));
    };


    const getHarvest = (id) => {
        userAxios.get(`/api/harvest/${id}`)
            .then(response => {
                setHarvest(prevHarvests => prevHarvests.map(harvest => harvest._id === id ? { ...harvest } : harvest));
            }).catch(err => console.error(err));
    };



    const updateHarvest = (id, data) => {
        userAxios.put(`/api/harvest/${id}`, data).then(response => {
            const index = harvests.findIndex(harvest => harvest._id === id);
            const updated = [...harvests];
            updated[index].harvest = response.data;
            setHarvests([updated]);
        }).catch(err => console.dir(err));
    };



    const deleteHarvest = id => {
        userAxios.delete(`/api/harvest/${id}`).then(response => {
            setHarvest(prevHarvests => [prevHarvests.filter(harvest => harvest.user._id !== id), response.data]);
        }).catch(err => console.dir(err));
    };

    const getUserHarvests = id => {
        userAxios.get(`/api/harvest/${id}`).then(response => {
            setHarvest(prevHarvests => [prevHarvests.filter(harvest => harvest.user === id)], response.data);

        })
            .catch(err => console.log(err.response.data.errMsg));
    };

    const addHarvest = (body) => {
        userAxios.post(`/api/harvest`, body).then(response => {
            setHarvests(prevHarvests => [...prevHarvests], response.data);

        }).catch(err => console.dir(err));
    };


    return <HarvestContext.Provider
        value={{
            harvests,
            harvest,
            initState,
            getAllHarvests,
            getUserHarvests,
            deleteHarvest,
            updateHarvest,
            addHarvest,
            getHarvest,
            myHarvestIsClicked,
            setMyHarvestIsClicked,
            home, 
            setHome,
            isClicked,
            setIsClicked,
        }}>
        {props.children}
    </HarvestContext.Provider>;

}
export {HarvestProvider}