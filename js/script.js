window.addEventListener('DOMContentLoaded', () =>{
   
    function clickButton(){
        const pc = document.querySelector('.pc-version'),
              button = pc.querySelectorAll('.advice-block__nav-button'),
              element = pc.querySelectorAll('.advice-block__wrapper-button'),
              parentBlock = pc.querySelector('.advice-block__nav');
              
           
         parentBlock.addEventListener('click', (e) =>{
             const target = e.target;
             if(target && target.classList.contains('advice-block__nav-button')){
                 button.forEach((btn, i ) =>{
                     if(btn === target){
                         btn.classList.toggle('show');
                         element[i].classList.toggle('click');
                     }
                     else{
                         btn.classList.remove('show');
                         element[i].classList.remove('click');
                     }
                 });
             }
         });
            
    };

    clickButton();

})