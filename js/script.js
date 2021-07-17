window.onload = () =>{
    const pc = document.querySelector('.pc-version'),
    mb = document.querySelector('.mobile-version'),
    button = pc.querySelectorAll('.advice-block__nav-button'),
    buttonMb = mb.querySelectorAll('.advice-block__nav-button'),
    element = pc.querySelectorAll('.advice-block__wrapper-button'),
    parentBlock = pc.querySelector('.advice-block__nav'),
    parentBlockMb = mb.querySelector('.advice-block__nav'),
    elem = document.getElementById('slider'),
    elemMb = document.getElementById('slider-mb'),
    sliderTitle = pc.querySelector('.advice-block__text_question'),
    sliderTitleMb = mb.querySelector('.advice-block__text_question');
    let arrOffset = [ 110, 430, 730, 1100, 1700, 3800],
    arrTitle = ['Как стать популярным работодателем?',
              'Как получать больше откликов?',
              'Как улучшить процесс отбора?',
              'Как снизить текучесть на испытательном сроке?',
              'Как сделать так, чтобы сотрудники работали долго и счастливо?',
              'Как сделать так, чтобы сотрудники не уходили?'];
    let  offset = parseInt(window.getComputedStyle(elem).getPropertyValue('left'));
    offsetMb = parseInt(window.getComputedStyle(elemMb).getPropertyValue('left'));
    let newOffset,
        newOffsetMb;
    
    window.onresize = function(event){
        for (let i = 0; i < button.length; i++) {
            let btn = button[i];

            if(btn.classList.contains('show')){
                elem.style.left = 50 + '%';
                setTimeout(() => {
                    newOffset = parseInt(window.getComputedStyle(elem).getPropertyValue('left'));
                    console.log('newOffset', newOffset)
                    console.log('arrOffset[i]', arrOffset[i])
                    console.log('b if', newOffset - arrOffset[i] + 'px');
                    elem.style.left = newOffset - arrOffset[i] + 'px';
                }, 1000);
            };
        };
    };

    window.onresize = function(event){
        for (let i = 0; i < buttonMb.length; i++) {
            let btn = buttonMb[i];

            if(btn.classList.contains('show')){
                elemMb.style.left = 50 + '%';
                setTimeout(() => {
                    newOffsetMb = parseInt(window.getComputedStyle(elemMb).getPropertyValue('left'));
                    elemMb.style.left =  newOffsetMb - arrOffset[i] + 'px';
                }, 1000);
            };
        };
    };
    

    function clickButton(){
        function activeButtonByDefault(){
            button.forEach((btns, i) =>{
                if(btns.classList.contains('show')){
                    element[i].classList.add('click');
                    elem.style.left = offset - arrOffset[4] + 'px';
                }
            });
        }
              
        activeButtonByDefault();

        function activeButtonByDefaultMb(){
            buttonMb.forEach(btns =>{
                if(btns.classList.contains('mb-show')){
                    elemMb.style.left = offsetMb - arrOffset[4] + 'px';
                }
            });
        }
              
        activeButtonByDefaultMb();

        parentBlock.addEventListener('click', (e) =>{
            const target = e.target;
            if(target && target.classList.contains('advice-block__nav-button')){
                button.forEach((btn, i ) =>{
                    if(btn === target){
                        btn.classList.add('show');
                        element[i].classList.add('click');
                        elem.style.left = offset - arrOffset[i] + 'px';
                        sliderTitle.textContent = arrTitle[i];
                    }
                    else{
                        btn.classList.remove('show');
                        element[i].classList.remove('click');
                    }
                });
            }
        });

        parentBlockMb.addEventListener('click', (e) =>{
            const target = e.target;
            if(target && target.classList.contains('advice-block__nav-button')){
                buttonMb.forEach((btn, i ) =>{
                    if(btn === target){
                        btn.classList.add('mb-show');
                        elemMb.style.left = offsetMb - arrOffset[i] + 'px';
                        sliderTitleMb.textContent = arrTitle[i];
                    }
                    else{
                        btn.classList.remove('mb-show');
                    }
                });
            }
        });

       
    };
    clickButton();

    function displayingTheSectionStatus(){     
        const status = document.querySelectorAll('[data-on]');
        
        status.forEach(item =>{
            item.classList.add('status-on');
            item.classList.remove('status-off');
        })
    };
    displayingTheSectionStatus();

    
    
    
     
}