# React Bot Collection App

This is a simple React application that allows you to display a collection of bots fetched from a server and create your own bot army. You can also remove bots from your army and delete them from the server.

## Getting Started

1. Clone the repository: git clone <repository_url>
2. Navigate to the project directory: using cd 
3. Install dependencies: npm install

## How to Use
- Start the React development server: npm start
T- he app will be running at http://localhost:3000.

## Components
### App
The main entry point of the application. It fetches the bot data from the server and renders the BotCollection component.

### BotCollection
This component displays the list of bots fetched from the server and provides the functionality to add a bot to your bot army. It also renders the YourBotArmy component to display the bots you have added to your army.

### YourBotArmy
This component displays the bots in your bot army. It shows the details of each bot and allows you to remove a bot from your army.

## API Integration
The application communicates with the server using the following endpoints:

. GET /bots: Fetches the list of bots from the server.
. DELETE /bots/:id: Deletes a bot with the specified ID from the server.

## How to Add a Bot to Your Army
1. Click on a bot from the available bots list.
2. The bot will be added to your bot army displayed below.
3. To remove a bot from your army, click on the bot in your army list.

## How to Delete a Bot
1. Each bot in the available bots list has a delete button (x) .
2. Click on the delete button (x) to remove the bot from the server and the available bots list.

## Error Handling
- If there is an error while fetching the bot data from the server, an error alert will be displayed.
- If there is an error while deleting a bot, an error alert will be displayed.

## Technologies Used
- React
- JavaScript (ES6+)

## License
This project is licensed under the MIT License - see the LICENSE file for details.




