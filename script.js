// this first h

let x;
let y;
let z;

x=10;
y=12;
z=x+y;

console.log(x);
console.log(y);
console.log(z);



// teacher really i'm so sorry because the last day i was taird so i couldn;t foucs with you :(

// the sconed h.w

// F to C

function convert(){
    const fahrenheit  = parseInt(
        document.getElementById("fahrenheit").value
    );

    const C =(fahrenheit-32) *0.5556;
    document.getElementById("C").innerText =C;
}


// C to F
function convert2(){
    const celsius  = parseInt(
        document.getElementById("celsius").value
    );

    const F =( celsius / 0.5556 )  +32;
    document.getElementById("F").innerText =F;
}