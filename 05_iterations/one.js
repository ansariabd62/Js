// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (i === 7) {
        // console.log("7 is overatted number");
    }
    // console.log(element);

}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop : ${i}`);
    for (let j = 1; j <= 10; j++) {

        // console.log(i + '*' + j + '=' + i * j);

    }
}


const myArr=["a","b","c"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index===7){
//         console.log(`7 Detected`);
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }



for (let index = 1; index <= 20; index++) {
    if(index===7){
        console.log(`7 Detected`);
        continue;
    }
    console.log(`value of i is ${index}`);

}