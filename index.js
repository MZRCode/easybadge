const { REST, Routes, Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const TOKEN = "BOTUNUZUN TOKENI";
const BOT_ID = "BOTUNUZUN IDSI";

const commands = [
  {
    name: 'ping',
    description: 'Size Pingini Gösterir',
  },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('(/) komutları yükleniyor!');

    await rest.put(Routes.applicationCommands(BOT_ID), { body: commands });

    console.log('(/) komutları başarıyla yüklendi!');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', () => {
  console.log(`${client.user.tag} olarak giriş yaptı!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply(`**İşte Pingim:\n${client.ws.ping}ms 🏓**`);
  }
});

client.login(TOKEN);
