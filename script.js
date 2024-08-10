let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length;
let active = 0;

console.log(list);

next.onclick = () => {
    let activeOld = document.querySelector('.item.active');
    if (activeOld) {
        activeOld.classList.remove('active');
    }


    active = (active + 1) % count;
    list[active].classList.add('active');
};

prev.onclick = () => {
    let activeOld = document.querySelector('.item.active');
    if (activeOld) {
        activeOld.classList.remove('active');
    }

    active = (active - 1 + count) % count;
    list[active].classList.add('active');
};
