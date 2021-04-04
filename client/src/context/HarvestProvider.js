import React, {useState} from "react";
import { userAxios} from "./UserProvider";




export const HarvestContext = React.createContext();



function HarvestProvider(props) {


    const [harvest, setHarvest] = useState({});
    const [harvests, setHarvests] = useState([]);
    const [initState, setInitState] = useState([{ body: '', harvestImg: '', userHandle: '' }])

    const getAllHarvests = () => {
        userAxios.get(`/harvests`)
            .then(response => {
                setHarvests([...harvests, response.data]);


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
            getHarvest
        }}>
        {props.children}
    </HarvestContext.Provider>;

}
export {HarvestProvider}