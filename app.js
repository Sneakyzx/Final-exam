// Bài 1

// let a = Number(prompt('Nhập số a :'));
// let b = Number(prompt('Nhập số b :'));

// for(let i = 0; i >= a && i <= b ; i++){
//     if(i % i == 0 && i % 1 == 0){
//         console.log(i);
//     }
// }



// bài 2
const $inPut = document.getElementsByClassName("in");
const $butTon = document.getElementsByClassName("button");

function numberOneTriangle(){
    let a = Number(prompt('Nhập số a :'))
     for (let i = 0; i < a; i++){
        let triangle = "";
        for(let j = 0; j <= i; j++){
            triangle = triangle + "*";
        }
        console.log(triangle);
    }
};

$butTon.onclick = function numberOneTriangle() {
    
}



// Bài 1 

let a = Number(prompt('input a :'));
let b = Number(prompt('input b :'));

for(let i = a; i <= b; i++){
   if (a > 0 && b > 0){
   for(let j = 2; j < i; j++){
    if ( i % j != 0){
        console.log(j);
        break;
    }
   }
}
};





