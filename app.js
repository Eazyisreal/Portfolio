const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const cursor = document.querySelector('.cursor')




hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});



document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = ' rgb(0, 3, 3)';
    }else{
        header.style.backgroundColor = 'transparent';
    }
})

menu_item.forEach((item) => {
    item.addEventListener('click',() =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
})

document.addEventListener('mousemove', e =>{
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListner('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
})