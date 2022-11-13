//═══════════════════════════════════════════ ═══════//
//
// 𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼 𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

globale . propriétaire
globale . préfa  propriétaire

globale  .  préfa    =  [  ''  ,  '!'  ,  '.'  ,  '🐦'  ,  '🐤'  ,  '🗿'  ]

globale  .  sp   =   '⭔'

globale . désordre  =  {

    réussi : 'Terminé ✓' ,

    admin : 'Cette fonctionnalité est réservée aux administrateurs !' ,

    botAdmin : 'Le bot doit d'abord être administrateur !' ,

    propriétaire : 'Cette fonctionnalité est réservée au propriétaire !' ,

    group : 'Fonctionnalité utilisée uniquement pour les groupes !' ,

    private : 'Fonctionnalités utilisées uniquement pour le chat privé !' ,

    bot : 'Cette fonctionnalité est réservée aux robots' ,

    wait : 'Attendez une minute...' ,

    erreur : 'Erreur ! Peut-être que la clé Api est expirée🤔 !' ,

    endLimit : 'Votre limite quotidienne a expiré, la limite sera réinitialisée toutes les 12 heures' ,

}   = [ '' , '!' , '.' , '🐦' , '🐤' , '🗿' ]
globale . sp   =   '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Wait A minute...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
