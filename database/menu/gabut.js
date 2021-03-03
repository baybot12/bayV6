const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
├「 *GABUT* 」
│
├ **${prefix}apakah*
├ *${prefix}bisakah*
├ *${prefix}kapankah*
├ *${prefix}hobby*
├ *${prefix}rate*
├ *${prefix}seberapagay*
├ *${prefix}truth*
├ *${prefix}dare*
├ *${prefix}tebakin*
├ *${prefix}caklontong*
├ *${prefix}timer*
├ *${prefix}simi*
├ 
└──「 *REM BOT* 」`
}
exports.gabut = gabut
