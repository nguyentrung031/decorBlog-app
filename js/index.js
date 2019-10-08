document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById('search01');
    const fromDrop = document.querySelector('.dropdow-search');
    // click moi nhat
    const wrap = document.querySelector('.wrap-item');
    const drop = document.querySelector('.wrap-drop');
    // click nav
    // const navli = document.getElementsByClassName('nav-item');
    // console.log(navli[1]);
    // navli[1].onclick(() => {
    //     this.classList.toggle('test');
    // })
    
    search.addEventListener('click', ()=>{
        fromDrop.classList.toggle('ds-01');
    });
    // // click moi nhat
    wrap.addEventListener('click', ()=>{
        drop.classList.toggle('tg-01');
    });
    //  nếu click ra ngoài các button thì ẩn tất cả các menu con
//      window.addEventListener("click", function(){
//         if (!event.target.matches('wrap-drop')){
//         drop.classList.remove('tg-01');
//         }
//    });
    
}, false)
