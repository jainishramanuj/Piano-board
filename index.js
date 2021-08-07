  window.addEventListener('keydown',function(e){
    const aud_tag = document.querySelector(`audio[data-key="${e.keyCode}"]`); // here audio is tag name
    const ka = document.querySelector(`.k[data-key="${e.keyCode}"]`); // here .k is class name


    if(!aud_tag) return;

    aud_tag.currentTime = 0; //start again
    aud_tag.play(); //play audio
    ka.classList.add('playing'); //playing efect
    setTimeout(function(){
        ka.classList.remove('playing');
    },500);
    
  });
