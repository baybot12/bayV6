const vip = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
├「 *PREMIUM MENU* 」
│
├ *${prefix}premiumlist*
├ *${prefix}randomhentai*
├ *${prefix}bokep*
├ *${prefix}blowjob*
├ *${prefix}nulis1*
├ *${prefix}nulis2*
├ *${prefix}mutual*
├ *${prefix}next*
├ *${prefix}nangis*
├ *${prefix}cium*
├ *${prefix}peluk*
├ *${prefix}tiktod*
├ *${prefix}yutubdl*
├ *${prefix}hidetag5*
├ *${prefix}hidetag10*
├ *${prefix}moddroid*
├ *${prefix}happymod*
├ *${prefix}ninjalogo*
├ *${prefix}halloweentext*
├ *${prefix}pornhub*
├ *${prefix}glitchtext*
├ *${prefix}blackpink*
├ *${prefix}cloudtext*
├ *${prefix}neontext*
├
└──「 *ABAY BOT* 」`
}
exports.vip = vip
