const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
├「 *GROUP MENU* 」
│
├ *${prefix}welcome* 「1/0」
├ *${prefix}leveling* 「1/0」
├ *${prefix}simih* 「1/0」
├ *${prefix}nsfw* 「1/0」
├ *${prefix}antilinkgrup* 「1/0」
├ *${prefix}grup* 「buka/tutup」
├ *${prefix}add*
├ *${prefix}kick*
├ *${prefix}hedsot*
├ *${prefix}linkgrup*
├ *${prefix}promote*
├ *${prefix}demote*
├ *${prefix}setname*
├ *${prefix}setdesc*
├ *${prefix}leave*
├ *${prefix}tagall*
├ *${prefix}admin*
├ *${prefix}level*
├ *${prefix}fitnah*
├ *${prefix}hidetag*
├
└──「 *REM BOT* 」`
}
exports.groupm = groupm