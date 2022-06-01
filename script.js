function inputChanged() {
    let value = document.getElementById('input').value;
    let fontSizeControl = docum
    let words = value.split(' ');
    result = '';
    words.forEach(element => {
        let splitIndex = element.length / 2;
        let outputWord = `<span class="bold">${element.slice(0, splitIndex)}</span>${element.slice(splitIndex, element.length)}`;
        result += outputWord + ' ';
    });
    document.getElementById('output').innerHTML = result;
}