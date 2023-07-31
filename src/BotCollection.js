
import React, { useEffect } from "react";
import { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import Delete from "./Delete";

const BotCollection = ({ collection }) => {
  const [BotArray, setBotArray] = useState([]);
  const [botCollection, setBotCollection] = useState([]);

  useEffect(() => {
    setBotCollection(collection);
  }, [collection]);

  console.log(BotArray);
  console.log(botCollection);

  const AddBot = (bot) => {
    const botExists = BotArray.some((existing) => existing.id === bot.id);
    if (!botExists) {
      setBotArray([...BotArray, bot]);
    }
  };

  const removeBot = (botId) => {
    setBotArray(BotArray.filter((bot) => bot.id !== botId));
  };



  const updateBotArray = (newInfo) => {
    setBotCollection(newInfo);
  };

  return (
    <>
      <YourBotArmy botarray={BotArray} removeBot={removeBot} />
      <div className="bot-army">
        {botCollection.map((bot) => {
          return (
            <>
              
              <div
                key={bot.id}
                className="bot-details"
                onClick={() => {
                  AddBot(bot);
                }}
              >
                <Delete
                updateBotArray={updateBotArray}
                bot={bot}
                allBot={botCollection}
              />
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
              
            </>
          );
        })}
      </div>
    </>
  );
};

export default BotCollection;
