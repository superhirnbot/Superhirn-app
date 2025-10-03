const TelegramBot = require('node-telegram-bot-api');

// Bot-Token von Render (Umgebungsvariable TELEGRAM_TOKEN)
const token = process.env.TELEGRAM_TOKEN;
if (!token) {
  console.error("Fehler: TELEGRAM_TOKEN nicht gesetzt!");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hallo 👋, ich bin SuperhirnBot – bald live auf Render!");
});

console.log("Bot gestartet...");
