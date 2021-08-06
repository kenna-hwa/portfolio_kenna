 //modal
 const body = document.querySelector('body'); 
 const modal = document.querySelector('.modal_wrap'); 
 const closeBtn = document.querySelector('.modal_close_btn');

 window.addEventListener('load', () => {
     modal.classList.add('active');

     if (modal.classList.contains('active')) {
         body.style.overflow = 'hidden';
     }
 });

 closeBtn.addEventListener('click', () => {
     modal.classList.remove('active');

     if (!modal.classList.contains('active')) {
         body.style.overflow = 'auto';
     }
 });
 