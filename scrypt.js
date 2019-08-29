function highlightDays() {
    let week = ["Понедельник\n", "Вторник\n", "Среда\n", "Четверг\n", "Пятница\n", "Суббота\n", "Воскресенье"]

week.forEach((em, i) => {
    i++;
    let tagName = (i === 6 || i === 7) ? 'oblique' : 'span';
    let newEm = document.createElement(tagName);
    newEm.innerHTML = em;
    document.body.appendChild(newEm);
});
}

console.log(highlightDays());