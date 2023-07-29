const YourBotArmy = ({ botarray }) => {
  return (
    <div>
      <h2>Display your bots</h2>
      <div className="your-bot-army">
      {botarray.map((bot) => {
        return (
          <div key={bot.id} >
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
        );
      })}
      </div>
    </div>
  );
};

export default YourBotArmy;
