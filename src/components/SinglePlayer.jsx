import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {fetchSinglePlayer} from "../Api.jsx"


export default function SinglePlayer() {

    const[player, setPlayer] = useState(null)
    const [error, setError] = useState(null)
    // console.log(player);
    // console.log(player);
    const {id} = useParams();
    const navigate = useNavigate();
    const backButton =()=>{
        navigate(-1)
    }
    console.log(id);


useEffect(() => {
    async function getSinglePlayer(){
        const response = await fetchSinglePlayer(id);
        if (response.success){
            setPlayer(response.data.player);
        } else{
            setError(response.error.message);
        }
    }
    getSinglePlayer()
}, [])

    return(
        <>
        <h1>{player && player.name}</h1>
        <h2>{player && player.breed}</h2>
        <h2>{player && player.status}</h2>
        <h2>{player && player.teamId}</h2>
        <img src={player && player.imageUrl} alt="dog pic" />
        <button onClick={backButton}>Back To The Kennel!</button>
        </>
    )

};

// export default SinglePlayer;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { fetchSinglePlayer } from "../API";

// export default function SinglePlayer () {
//     const {id}=useParams();
//     console.log(id);
//     const [player, setPlayer] = useState(null);
//     // console.log(player);
//     useEffect(()=>{
//         async function getSinglePlayer()  {
//             const APIResponse = await fetchSinglePlayer(id);
//             console.log(APIResponse)
//             if (APIResponse.success) {
//                 setPlayer(APIResponse.data.player);
//             } else {
//                 setError(APIResponse.error.message);
//             }
//         }
    
//         getSinglePlayer();
//     }, []);

//     return (
//         <>
//        <h1>{player && player.name}</h1>
//        <h2>{player && player.breed}</h2>
//        <img src={player && player.imageUrl} alt="Puppy" />
//         </>
//     )
// }
