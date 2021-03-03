const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
├「 *OTHER MENU* 」
│
├ *${prefix}brainly*
├ *${prefix}pinterest*
├ *${prefix}resepmakanan*
├ *${prefix}beritahoax*
├ *${prefix}timer*
├ *${prefix}nulis1*
├ *${prefix}nulis2*
├
└──「 *REM BOT* 」`
}
exports.other = other