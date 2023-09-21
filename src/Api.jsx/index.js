const COHORT = "2306-ftb-et-web-am"

//*** we are using API_URL not baseurl ***
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers(){
    try {
        const response = await fetch(`${API_URL}/players`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};


export async function fetchSinglePlayer(playerId){
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`);
        const player = await response.json();
        return player;
    } catch (error) {
        console.error(`Cant find pupper ${playerId}! `);
    }
};