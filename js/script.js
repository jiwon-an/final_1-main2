let depth1_li = document.querySelectorAll('header nav .depth1 > li')
for (let i = 0; i < depth1_li.length; i++) {
    depth1_li[i].addEventListener('mouseover', function () {
        // for(let i = 0; i < depth1_li.length; i++) {
        //     depth1_li[i].classList.add('show');
        // }
        depth1_li.forEach(function (depth1) {
            depth1.classList.add('show')
        });

        console.log('완성');
    });
}
for (let i = 0; i < depth1_li.length; i++) {
    depth1_li[i].addEventListener('mouseout', function () {
        // for(let i = 0; i < depth1_li.length; i++) {
        //     depth1_li[i].classList.add('show');
        // }
        depth1_li.forEach(function (depth1) {
            depth1.classList.remove('show')
        });

        console.log('완성');
    });
}

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});


let imgBox = document.querySelector('main .slider .slider-box');
let img = document.querySelectorAll('.slider-box .title').length;
let count = 0;
let imgWidth = -100;
console.log(img)
setInterval(function () {
    count++
    if (count > img - 1) { count = 0 };
    // console.log(count * imgWidth)
    imgBox.style.transform = `translate(${count * imgWidth}vw, 0)`;
}, 20000);

let next = document.querySelector('main .main-banner .next-btn');
let prev = document.querySelector('.prev-btn');

next.addEventListener('click', function () {
    count++;
    if (count > img - 1) { count = 0 };
    console.log(count);

    document.querySelector('main .slider .slider-box').style.transform = `translate(${-100 * count}vw, 0)`
});
prev.addEventListener('click', function () {
    count--;
    if (count < 0) { count = 2 };
    console.log(count);
    document.querySelector('main .slider .slider-box').style.transform = `translate(${-100 * count}vw, 0)`
});
