// import React from "react";
import { useState, useEffect } from "react"
import { fetchAllPlayers } from "../Api.jsx" //need the api here 
import PlayerListName from "./PlayerListName.jsx";
// import { useNavigate  } from "react-router-dom";
import NewPlayerForm from "./NewPlayerForm.jsx";



const AllPlayers = ()=>{
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useState("")
    console.log(players);
    
    // const navigate = useNavigate();
    // useEffect(() =>{
    //     async function getAllPlayers() {
    //         const response = await FetchAllPlayers();
    //         if (response.success){
    //             setPlayers(response.data.players);
    //         } else{
    //             setError(response.error.message);
    //         }
    //     }
    //     getAllPlayers()
    // }, []);


useEffect(() => {
    async function getAllPlayers(){
        const response = await fetchAllPlayers();
        if (response.success){
            setPlayers(response.data.players);
        } else{
            setError(response.error.message);
        }
    }
    getAllPlayers();
}, []);

const playersToDisplay = searchParams
    ? players.filter((player) =>{
        player.name.toLowercase().includes(searchParams);
    })
    : players;
console.log(playersToDisplay);

    return(
        <>
        <div>
            <label>
                Search{" "}
                <input 
                type="text"
                placeholder="search"
                onChange={(e) =>setSearchParams(e.target.value.toLowerCase())}
                 />
            </label>
        </div>
        <div>
            <NewPlayerForm/>
        </div>


        {playersToDisplay.map((player) => {
            return (
                <>
                <PlayerListName key={player.id} player={player}/>
                </>
            )
        })}
        </>
    );

    }

export default AllPlayers;