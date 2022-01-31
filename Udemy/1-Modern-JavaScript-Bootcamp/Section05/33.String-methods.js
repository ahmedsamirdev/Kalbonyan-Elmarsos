let isValidPass = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPass('a34sfds'))
console.log(isValidPass('abc1fffff%^&'))
console.log(isValidPass('as524234324word'))