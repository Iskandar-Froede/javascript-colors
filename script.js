let index = 0;

function changeColors() {
    const colors = ["red", "blue", "green","pink", "yellow", "purple"];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if(index > colors.length - 1)
    index = 0;
}