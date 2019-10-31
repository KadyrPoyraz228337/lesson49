const black = '██  ██  ██  ██  ';
const white = '  ██  ██  ██  ██';
let indicator = true;

for(let i = 0; i < 8; i++) {
    if(indicator) {
        console.log(white);
        indicator = !indicator;
    } else {
        console.log(black);
        indicator = !indicator
    }
}