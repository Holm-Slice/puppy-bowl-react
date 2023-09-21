import { useNavigate } from "react-router-dom";

export default function PlayerListName({player}){
    const navigate = useNavigate()
    console.log(player.id)
    return(
        <>
        <h3> {player.name} </h3>
        <button onClick={() => navigate(`/${player.id}`)}>Details</button>
        </>
    )
}
// import { useNavigate } from "react-router-dom";

// export default function playerListName ({player}) {
//     const navigate =useNavigate()
//     console.log(player.id)
//     return (
//         <>
//         <h3>{player.name}<h3 key= {player.id}></h3>
//         <button onClick={()=> navigate (`/${player.id}`)}>See Details</button>
//         </h3>
//         </>
//     )
// }