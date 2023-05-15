const { create, Client } = require('@open-wa/wa-automate');
require('dotenv').config();

// Replace with your actual authentication credentials

const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;

const sendGoodMorningMessage = (client) => {
  const toNumber = '2348025316837@c.us';
  const message = 'Keep being happy and motivated to follow your dreams.';

  client.sendText(toNumber, message)
    .then(() => console.log('Message sent successfully'))
    .catch((error) => console.error('Error sending message:', error));
};

create({
  sessionId: '2116907688571f72dbfded4303f72ecf', // Provide a unique session ID
  authTimeout: 0, // Disable auth timeout
  // Provide the authentication credentials
  clientID: clientId,
  clientSecret: clientSecret,
}).then((client) => {
  sendGoodMorningMessage(client);
}).catch((error) => console.error('Error creating client:', error));
 


 
 /* clientID: clientId,
  clientSecret: clientSecret,
}).then((client) => {
  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 9 && now.getMinutes() === 0) {
      sendGoodMorningMessage(client);
    }
  }, 60000);
}).catch((error) => console.error('Error creating client:', error));

*/