/*
===============
    Menu
===============
*/

const navMenu = document.querySelector('.nav__menu');
const menuContainer = document.querySelector('.menu-container');



//Show or hidde menu
navMenu.addEventListener('click', function() {
    showHideMenu();
    
});

function showHideMenu(){
    const menuHidden = menuContainer.classList.contains('hidden');
    const menuOpacity = menuContainer.classList.contains('opacity');

    if(menuHidden && menuOpacity){
        menuContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
       
        setTimeout(()=>{
            menuContainer.classList.remove('opacity');
        }, 100);
    }else{
        menuContainer.classList.add('opacity');
        document.body.style.overflow = 'visible';
        
        setTimeout(()=>{
            menuContainer.classList.add('hidden');
        },300);

    }
     closeMenuBtn(); 

}

/* button open-close menu  */
function closeMenuBtn() {
    const menuBtn = document.querySelector('.m_menu');
    const closeBtn = document.querySelector('.m_close');
    const btnLines = document.querySelectorAll('.bar');

    closeBtn.classList.toggle('hidden');
    menuBtn.classList.toggle('hidden');

    //button cross lines
    btnLines.forEach(line => {
        const btnLine = line.classList;
        if (btnLine[1] == 'bar1') line.classList.toggle('bar1-close');
        if (btnLine[1] == 'bar2') line.classList.toggle('hidden');
        if (btnLine[1] == 'bar3') line.classList.toggle('bar3-close');
    });
}


/* Menu links */
const menuLinks = document.querySelectorAll('.menu__link');
//hide menu and change close button
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        showHideMenu();
    });
});

/*
======================
   section hero scroll
======================
*/
// const sectionHero = document.querySelector('.hero');

// addEventListener('scroll', (e)=>{
//  sectionHero.style.height = '50vh';
// });



/*
======================
    Skills Slider
======================
*/

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const bullets = document.querySelectorAll('.pagination__bullet')

// hide prevBtn
prevBtn.style.visibility = "hidden";

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function () {
    counter++;
    paginationBtns();
    slide();
    sliderPagination();

});
prevBtn.addEventListener('click', function () {
    counter--;
    paginationBtns();
    slide();
    sliderPagination();

});




function paginationBtns(){
    //show next btn
    if (counter < slides.length - 1) {
        nextBtn.style.visibility = "visible";
    } else {
        nextBtn.style.visibility = "hidden";
    }

    //show prev btn
    if (counter > 0) {
        prevBtn.style.visibility = "visible";
    } else {
        prevBtn.style.visibility = "hidden";
    }

}

function slide() {
     slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
        if (counter == index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function sliderPagination(){
    slides.forEach((slide, index) =>{
        const active = slide.classList.contains('active');
        if(active){
            bullets[index].classList.add('active-bullet');
        }else{
            bullets[index].classList.remove('active-bullet')
        }
    });
}
