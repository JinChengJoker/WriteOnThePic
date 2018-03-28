var Jimp = require("jimp")
var xlsx = require('node-xlsx')

var xlsxArr = xlsx.parse('./xlsx/test.xlsx')
var usersData = xlsxArr[0].data
console.log('正在搞事...')

usersData.forEach(function(user) {
    Jimp.read("./template/template.jpg", function (err, template) {
        if (err) throw err;
        Jimp.loadFont('./fonts/fonts.fnt').then(function (font) {
            template.print(font, 200, 258, user[0])
            template.print(font, 200, 304, user[1])
            template.print(font, 222, 350, user[2].toString())
            template.print(font, 226, 396, user[3].toString())
            template.write("./pictures/" + user[0] + ".jpg")
        })
    })
})