const hamburger = document.querySelector('.burger');
const burger = document.querySelectorAll('.burger-menu__animated');

let showMenu = false;

const rotate = () =>{
    for (i = 0; i < burger.length; i++)
    burger[0].classList.add('transparent');
    burger[1].classList.add('rotate');
    burger[2].classList.add('before-rotate');
}

const toggleMenu = () => {
    if( ! showMenu) {
        for (let i = 0; i < burger.length; i++) {
            burger[i].classList.add('width')
            burger[i].classList.add('close');
        }
        setTimeout(rotate, 100);
        showMenu = true;
    }
    else{
        for (i = 1; i < burger.length; i++)
        burger[1].classList.remove('rotate');
        burger[2].classList.remove('before-rotate');
        
        const rotate = () =>{
            for (let i = 0; i < burger.length; i++) {
                burger[i].classList.remove('close', 'transparent', 'width');
            }
        }
        setTimeout(rotate, 600);

        showMenu = false;
    }
}
hamburger.addEventListener('click', toggleMenu)