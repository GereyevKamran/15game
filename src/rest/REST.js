
async function saveGame(newGame){
    return await fetch("http://localhost:2000/addNewGame/",
    {method: 'POST',
    headers: {
        "Content-type":"application/json"
    },
    body: JSON.stringify(newGame)
    });
}

async function getGame(id){
    const resp = await fetch(`http://localhost:2000/getGame/${id}`);
    const respData = await resp.json();  
    
    return respData;
}

async function getAllGames(){
    const resp = await fetch("http://localhost:2000/allGames/");
    const respData = await resp.json();  
    
    return respData;
}

module.exports = {
    saveGame,
    getGame,
    getAllGames
}