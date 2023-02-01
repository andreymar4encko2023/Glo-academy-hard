let str1 = '    123456789123456789123456789123';

const getStr = function (str) {

    if (typeof str === 'string') {
        str = str.trim()
        if (str.length >= 30) {


            str = str.slice(0, 30 - 3) + '...'

        }

        return ' строка'
    } else {
        return 'не строка'
    }

}

if (str1 != undefined) {
    console.log(getStr(str1))
}