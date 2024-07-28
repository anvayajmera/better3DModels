document.getElementById('changeColor').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

document.getElementById('addContent').addEventListener('click', function() {
    var newContent = document.createElement('p');
    newContent.textContent = 'This is some new content!';
    document.querySelector('.container').appendChild(newContent);
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
