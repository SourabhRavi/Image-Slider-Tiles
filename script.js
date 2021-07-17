let src1 = "https://images.unsplash.com/photo-1620924333549-6ca69f51e5c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";
let src2 = 'https://images.unsplash.com/photo-1556917452-890eed890648?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';
let src3 = 'https://images.unsplash.com/photo-1568548527144-383edf5c2728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let img = [img1, img2, img3];
let src = [src1, src2, src3];

let prev = document.getElementById("prev");
let next = document.getElementById("next");

let count = 0;

console.log(img);
console.log(src);

next.addEventListener('click', () => {
    if (count == 0) {
        img[0].src = src[2];
        img[1].src = src[0];
        img[2].src = src[1];
        count++
        console.log(count);
    } else if (count == 1) {
        img[0].src = src[1];
        img[1].src = src[2];
        img[2].src = src[0];
        count++
        console.log(count);
    } else if (count == 2) {
        img[0].src = src[0];
        img[1].src = src[1];
        img[2].src = src[2];
        count++
        console.log(count);
    } else {
        count = 0
        console.log(count);
        next.click();
    }
})

prev.addEventListener('click', () => {
    if (count == 3) {
        count = 1
        next.click()
    } else if (count == 1) {
        count = 0
        img[0].src = src[0];
        img[1].src = src[1];
        img[2].src = src[2]
        console.log(count);
    } else if (count == 2) {
        count = 0
        next.click()
    } else {
        count = 2
        next.click()
    }
})














// next.addEventListener('click', () => {
//     if (count == 0) {
//         img[0].src = src1;
//         img[1].src = src2;
//         img[2].src = src0;
//         count++;
//         console.log(count + "next");
//     } else if (count == 1) {
//         img[0].src = src2;
//         img[1].src = src0;
//         img[2].src = src1;
//         count++
//         console.log(count + "next");
//     } else if (count == 2) {
//         img[0].src = src0;
//         img[1].src = src1;
//         img[2].src = src2;
//         count++
//         console.log(count + "next");
//     } else {
//         count = 0
//         next.click();
//     }
// })

// prev.addEventListener('click', () => {
//     if (count == 0) {
//         img[0].src = src2;
//         img[1].src = src0;
//         img[2].src = src1;
//         count--;
//         console.log(count + "prev");
//     } else if (count == 1) {
//         img[0].src = src1;
//         img[1].src = src2;
//         img[2].src = src0;
//         count--
//         console.log(count + "prev");
//     } else if (count == 2) {
//         img[0].src = src0;
//         img[1].src = src1;
//         img[2].src = src2;
//         count--
//         console.log(count + "prev");
//     } else if (count == -1) {
//         img[0].src = src1;
//         img[1].src = src2;
//         img[2].src = src0;
//         count = 1
//         console.log(count + "prev");
//     } else {
//         count = 0
//         prev.click();
//     }
// })