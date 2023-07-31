import React from 'react'

export default function Delete({updateBotArray,bot, allBot}) {
 
  function removeBot(){

    const itemId = bot.id;
    let filteredBots = allBot.filter((item) => item.id !== itemId);
     updateBotArray(filteredBots)

    fetch(`http://localhost:8002/bots/${itemId}`, {
          method: "DELETE",
        })
}

 

return(
<div>
    <button onClick={removeBot}>Delete</button>
</div>
  )
}