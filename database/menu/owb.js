const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
├「 *OWNER MENU* 」
│
├ *${prefix}bc*
├ *${prefix}bcgc*
├ *${prefix}clearall*
├ *${prefix}block*
├ *${prefix}unblock*
├ *${prefix}clone*
├ *${prefix}setppbot*
├ *${prefix}setreplay*
├ *${prefix}setprefix*
├ *${prefix}addprem*
├ *${prefix}dellprem*
├ *${prefix}ban*
├ *${prefix}unban*
├ *${prefix}event1/0*
├
└──「 *REM BOT* 」`
}
exports.owb = owb