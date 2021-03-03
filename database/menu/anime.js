const anime = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `┌──「 *${botName}* 」
│        
├「 *USER STATUS* 」
│
├ NAMA : ${pushname}
├LEVEL:${getLevelingLevel(sender)}
├USER ${botName} : ${_registered.length}
├OWNER:${ownerName}
├ TOTAL FITUR:
│          
├「 *ABOUT BOT* 」
│
├ *${prefix}info*
├ *${prefix}ping*
├ *${prefix}donasi*
├ *${prefix}owner* 
│
├「 *ANIME MENU* 」
│
├ *${prefix}anime*
├ *${prefix}naruto*
├ *${prefix}boruto*
├ *${prefix}minato*
├ *${prefix}hinata*
├ *${prefix}sakura*
├ *${prefix}sasuke*
├ *${prefix}kaneki*
├ *${prefix}toukachan*
├ *${prefix}rize*
├ *${prefix}akira
├ *${prefix}itori
├ *${prefix}kurumi
├ *${prefix}miku
├ *${prefix}chika
├ *${prefix}rem
├ *${prefix}animecry
├ *${prefix}neonime
├ *${prefix}animekiss
├ *${prefix}wink
├ *${prefix}waifu
├ *${prefix}husbu
├ *${prefix}loli
├ *${prefix}waifukawai
├ *${prefix}kemonomimi
├ *${prefix}kuni
├ *${prefix}nsfwloli3
├ *${prefix}neko2
├ *${prefix}holo
├ *${prefix}wallpapernime
├
└──「 *abay bot*」`
}
exports.anime = anime
