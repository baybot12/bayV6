exports.wait = () => {
	return`*Cottomatekudasai...`
}

exports.succes = () => {
	return`*Donee...*`
}

exports.lvlon = () => {
	return`*Leveling sudah aktif gan...`
}

exports.lvloff = () => {
	return`*Disaple Leveling`
}

exports.premium = () => {
	return`*Fitur ini khusus premium..*`
}

exports.lvlnul = () => {
	return`*Level luh 0 gan....`
}

exports.lvlnoon = () => {
	return`*Fitur level blum di aktifkan...*`
}

exports.noregis = () => {
	return`*「❗」BELUM DAFTAR*\n*cara daftar ${prefix}daftar nama|umur* \n\n*contoh ${prefix}daftar MrG{108P}*|18*`
}

exports.baned = () => {
	return`*LUH DI BAN LOL,MAKANYA MAKAI BOT ITU MAKAI OTAK BANGSAT*`
}

exports.rediregis = () => {
	return`*「✔」*\n\n*LUH SUDAH DAFTAR GAN...*`
}

exports.stikga = () => {
	return`*Eror gan...❌*`
}

exports.linkga = () => {
	return`*link yang anda kirim tidak valid..*❌`
}

exports.groupo = () => {
	return`*「❗」KHUSUS GRUP *`
}

exports.ownerb = () => {
	return`*「❗」WOYYY!! KHUSUS OWNER*`
}

exports.ownerg = () => {
	return`*「❗」BUAT OWNER DOANG*`
}

exports.admin = () => {
	return`*「❗」KHUSUS ADMIN*`
}

exports.badmin = () => {
	return`*「❗」JADIIN GW ADMIN DULU SU*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW GAK AKTIF (_sangean si goblok_)*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*Masukkan text nya gan..*`
}

exports.clears = () => {
	return`*「🚮」Clear all Success*`
}

exports.pc = () => {
	return`*「❗」REGISTRASI*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`*「 REGISTRASI BERHASIL 」*\nUntuk User Info :\n\n*➸ Nama : ${namaUser}*\n*➸ Nomor : wa.me/${sender.split("@")[0]}*\n*➸ Umur : ${umurUser}*\n*➸ Waktu Pendaftaran : ${time}*\n\n*「SN」: ${serialUser}*\n_NOTE : Pesan ini sangat penting :v_`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
➸ *Nama* : ${pushname}
➸ *Nomor* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
*sisa limit anda :* _${limitCounts}_

_Upgrade premium bosku, biar bebas gunain bot_`
}

exports.satukos = () => {
	return`*Tambah parameter 1(enable) atau 0(disable)*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}