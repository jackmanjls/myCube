let x = 0,
    bool = false,
    interval;

// create function to rotate
const rotate = () => {
    // this comes from inspect element
    //   NodeList(3) [div.cube.cube-1, div.cube.cube-2, div.cube.cube-3]
    // NodeList has a vast selection of elements
    // NOTE: for rotateY use backtick ` rather than normal tick '
    const cubes = document.querySelectorAll(".cube");
    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
}

//**************** LEFT ARROW - click ******************/
// attach click event to arrow
document.querySelector('.left-arrow').addEventListener('click', () => {
    // rotate the cube
    x += 90;
    rotate();
    // if bool is true then slideshow is running
    if (bool) {
        playPause();
    }
});
//**************** LEFT ARROW - mouseover ******************/
// attach click event to arrow
// When the cursor is over the arrow is rotates 25degs via mouseover
// when removed it defaults to the normal position via mouseout
document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    // rotate the cube
    x += 25;
    rotate();
});
//**************** LEFT ARROW - mouseout ******************/
// attach click event to arrow
document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    // rotate the cube
    x -= 25;
    rotate();
});

//**************** RIGHT ARROW - click ******************/
document.querySelector('.right-arrow').addEventListener('click', () => {
    x -= 90;
    rotate();
    // if bool is true then slideshow is running
    if (bool) {
        playPause();
    }
});

//**************** RIGHT ARROW - mouseover ******************/
// When the cursor is over the arrow is rotates 25degs via mouseover
// when removed it defaults to the normal position via mouseou
// attach click event to arrow
document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    // rotate the cube
    x -= 25;
    rotate();
});

//**************** RIGHT ARROW - mouseout ******************/
// attach click event to arrow
document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    // rotate the cube
    x += 25;
    rotate();
});

//**************** PLAY / PAUSE ******************/
const playPause = () => {

    if (!bool) {
        // excute function repeatedly with some interval
        interval = setInterval(() => {
            x -= 90;
            rotate();
        }, 1000);
        changePlayPause();
        bool = true;

    } else {
        // if 2nd click on the p/p then stop rotation
        clearInterval(interval);
        changePlayPause();
        bool = false;
    }
}
const changePlayPause = () => {
    // change icon from play to pause
    const i = document.querySelector('.play-pause i');
    // using inspelem we can see fa-play is index 1
    const cls = i.classList[1];
    if (cls === 'fa-play') {
        i.classList.remove('fa-play');
        i.classList.add('fa-pause');
    } else {
        i.classList.remove('fa-pause');
        i.classList.add('fa-play');

    }
}

document.querySelector('.play-pause').addEventListener('click', () => {
    playPause();
});