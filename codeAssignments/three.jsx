function firstReverse(str) {
    let chars = str.split('');
    let reversedChars = chars.reverse();
    let reversedStr = reversedChars.join('');

    return reversedStr
}
console.log(firstReverse('Hello world'))