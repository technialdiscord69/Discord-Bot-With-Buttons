 BUttonsmodule.exports = {
  bot: {
    prefix: "prefix", //Bot Prefix
    owners: ["yourID"], //Bot Onwer ID
    maintenance: false,
    invite:
      "botInviteLink", //Link Invite Bot
    bot_add_description:
      "You've just added me to **{guild}**.\nThank you for adding me to your server",
    bot_remove_description:
      "You got me out on the **{guild}** server, sorry if there's a mistake on me"
  },
  status: {
    stats: "online", //Status Bot <idle, online, dnd , invisible>
    type: "watching", //Playing Bot <PLAYING, WATCHING , and others>
    name: "testing" //Status Playing
  },//Unfinished Dashboard
  dash: {
    secret: "botSecretHere", //SECRET Bot
    id: "botID", //ID Bot
    url: "https://vibes.tk" //Ignore
  },
  server: {
    id: "serverIDhere", //Server ID
    invite: "supportServerInviteLink" //Server Support
  },
  image: {
    welcome:
      "https://cdn.glitch.com/02e867ae-7c7c-4637-ace7-66ea251fe9d5%2Fwelcome.png?v=1613195262594", //Image WelcomeCard
    leave:
      "https://cdn.glitch.com/02e867ae-7c7c-4637-ace7-66ea251fe9d5%2Fwelcome.png?v=1613195262594", //Image LeaveCard
    level:
      "https://cdn.glitch.com/2337366e-e123-49db-827b-3e28e03e7910%2Fimages.jpeg?1623811398590", //Image LevelCard
    help:
      "https://share.creavite.co/MrmGDXP0EyXuECoT.gif", //Image Cmd Help.js
    guild_add:
      "https://share.creavite.co/DnYK8d8q16bCzbrk.gif", //Image Guild Add
    leaderboard: 
"https://i.pinimg.com/736x/d1/00/7b/d1007b46e6175f49f53712f16e4f6a3c.jpg" //Image Leaderboard Card
  },
  mod: {
    muted_defauld: "Muted", // bot will make Roles muted for members who got muted

    //Coming soon auto mod!
    limit_warn: 0, //bot will kick member if it has 3 warns
    limit_muted: 0 //bot will kick member if it has 5 Muted
  },
  logs: {
    boton: "", //Channel ID Bot Online
    botadd: "", //Channel ID Bot Add In Guild
    botdel: "", //Channel ID Bot Remove in Guild
    botlogin: "there is not any yet", //Channel ID User Login
    botreport: ""
  },
  giveaway: {
    default: {
      storage: "./data/giveaways.json",
      default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        embedColorEnd: "#FF0000",
        reaction: "882659092559196190"
      }
    }
  }
};