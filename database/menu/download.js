const download = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
├「 *DOWNLOADER* 」
│
├ *${prefix}play*
├ *${prefix}play2*
├ *${prefix}ytmp3
├ *${prefix}ytmp4*
├ *${prefix}joox*
├ 
└──「 *ABAY BOT* 」`
}
exports.download = download
