const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `┌──「 *${botName}* 」
│        
├「 *USER STATUS* 」
│
├ NAMA : ${pushname}
├LEVEL:${getLevelingLevel(sender)}
├USER ${botName} : ${_registered.length}
├OWNER:${ownerName}
├ TOTAL USER: 
│          
├「 *ABOUT BOT* 」
│
├ *${prefix}info*
├ *${prefix}ping*
├ *${prefix}donasi*
├ *${prefix}owner* 
│
├「 *SIMPLE MENU* 」
│
├ *${prefix}sticker*
├ *${prefix}ttp*
├ *${prefix}tts*
├ *${prefix}toimg*
├ *${prefix}nulis*
├ *${prefix}stalking*
├ *${prefix}quotes*
├ *${prefix}bikinquote*
├ *${prefix}memeindo*
├ *${prefix}profile*
├
└──「 *ABAY BOT* 」`
}
exports.simple = simple
