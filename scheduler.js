
//Not in use 

const schedule = require('node-schedule');
const { exec } = require('child_process');

const sendGoodMorningMessage = () => {
  exec('node bot.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing bot: ${error.message}`);
    }
  });
};

// Schedule the bot to run daily at 9:00 AM
const job = schedule.scheduleJob('0 9 * * *', sendGoodMorningMessage);

// Keep the script running
setInterval(() => {}, 1000);
