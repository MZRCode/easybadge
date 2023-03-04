const { REST, Routes, Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const TOKEN = process.env.TOKEN;
const BOT_ID = "";

const commands = [
  {
    name: 'selam',
    description: 'Size Aleyküm Selam der',
  },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('/ komutları yeniden yükleniyor!');

    await rest.put(Routes.applicationCommands(BOT_ID), { body: commands });

    console.log('/ komutları başarıyla yeniden yüklendi!');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', () => {
  console.log(`${client.user.tag} olarak giriş yaptı!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'selam') {
    await interaction.reply('Aleyküm Selam');
  }
});

client.login(TOKEN);
