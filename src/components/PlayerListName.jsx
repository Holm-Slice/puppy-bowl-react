import { useNavigate } from "react-router-dom";

export default function PlayerListName({player}){
    const navigate = useNavigate()
    // console.log(player.id)
    return(
    <>
        <div className="preview">
        <h2 key={player.id}>{player.name}</h2>
        <h3>{player.breed}</h3>
        <button onClick={() => navigate(`/${player.id}`)} player={player}> More info here!</button>
        </div>
    </>
    )
}

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