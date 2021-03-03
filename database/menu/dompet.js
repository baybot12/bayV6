const dompet = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `┌──「 *DOMPET MENU* ]----- ✔
├「 *USER STATUS* 」
│
├ NAMA : ${pushname}
├LEVEL:${getLevelingLevel(sender)}
├USER ${botName} : ${_registered.length}
├OWNER:${ownerName}
│
├「 *ABOUT BOT* 」
│
├ *${prefix}info*
├ *${prefix}ping*
├ *${prefix}donasi*
├ *${prefix}owner* 
│
├「 *DOMPET * 」
│
├ *${prefix}limit*
├ *${prefix}atm*
├ *${prefix}transfer*
├ *${prefix}buylimit*
├ 
└──「 *REM BOT* 」`
}
exports.dompet = dompet