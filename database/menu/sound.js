const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
├「 *SOUND MENU* 」
│
├ *${prefix}iri*
├ *${prefix}pale*
├ *${prefix}sound1*
├ *${prefix}sound2*
├ *${prefix}sound3*
├ *${prefix}sound4*
├ *${prefix}sound5*
├ *${prefix}sound6*
├ *${prefix}sound7*
├ *${prefix}sound8*
├ *${prefix}sound9*
├ *${prefix}sound10*
├ *${prefix}sound11*
├ *${prefix}sound12*
├ *${prefix}sound13*
├ *${prefix}sound14*
├ *${prefix}bernyanyi*
├ *${prefix}kebenaran*
├ *${prefix}sad
├ *${prefix}sad1
├ *${prefix}candagodloking*
├ *${prefix}babycute*
├ *${prefix}cidro2*
├ *${prefix}gam2piri*
├ *${prefix}akusukakamu*
├ *${prefix}terpesona*
├ *${prefix}gajelas
├ *${prefix}ndabisabasaingris*
├ *${prefix}paplepap*
├ *${prefix}paplepapslow
├
└──「 *ABAY BOT* 」`
}
exports.sound = sound
