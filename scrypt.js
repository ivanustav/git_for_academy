function strProcessing(str) {
    checkString(str);
    let strO = str.replace(/\s/g, "");
    return trimStr(strO, 30);
}

function checkString(str) {
    ((typeof str) === 'string') ? console.log('норм') : console.log('ошибка');
}

function trimStr(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}

console.log(strProcessing('sdflksdfksfkfjasl falksjfjalksdfalsjd sdlfkjasljdkfasdjlfk dsalkjfalsjkdf'));

