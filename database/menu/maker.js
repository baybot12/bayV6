const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
├「 *MAKER MENU* 」
│
├ *${prefix}hartatahta*
├ *${prefix}galaxtext*
├ *${prefix}pupycut*
├ *${prefix}galaxstyle*
├ *${prefix}hologram*
├ *${prefix}textbyname*
├ *${prefix}herrypoter*
├ *${prefix}greanneon*
├ *${prefix}coffetext*
├ *${prefix}metallogo*
├ *${prefix}cblackpink*
├ *${prefix}imgmaker*
├ *${prefix}battelfiel*
├ *${prefix}grenneon*
├ *${prefix}cpubg*
├ *${prefix}logoepep*
├ *${prefix}logoepep2*
├ *${prefix}logoepep3*
├ *${prefix}logoepep4*
├ *${prefix}logoepep5*
├ *${prefix}gamelogo*
├ *${prefix}glitchtext*
├ *${prefix}textlight*
├ *${prefix}glitch*
├
└──「 *REM BOT* 」`
}
exports.maker = maker