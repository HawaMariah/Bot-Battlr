import React from "react";
import { useState } from "react";
import YourBotArmy from "./YourBotArmy";

const BotCollection = ({ collection }) => {
  const [BotArray, setBotArray]= useState([])
  console.log(BotArray)
 const AddBot =(bot)=>{setBotArray(
  [...BotArray, bot]
 )

}

  return (
    <> 
     <YourBotArmy botarray ={BotArray}/>
    
    <div className="bot-army">
     
      {collection.map((bot) => (
        <div key={bot.id} className="bot-details" onClick={()=>{AddBot(bot)}}>
          <div>
            <img src={bot.avatar_url} alt={`${bot.name} Avatar`} />
          </div>
          <div>Name : {bot.name}</div>
          <div>Health : {bot.health}</div>
          <div>Damage : {bot.damage}</div>
          <div>Armor : {bot.armor}</div>
          <div>Class : {bot.bot_class}</div>
          <div>Catchphrase : {bot.catchphrase}</div>
          <div>Created at :{bot.created_at}</div>
          <div>Updated at : {bot.updated_at}</div>
        </div>
      ))}
     
    </div>
    </>
  );
};

export default BotCollection;