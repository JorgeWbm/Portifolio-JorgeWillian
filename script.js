function initMenuMobile() {
    const menuButton = document.querySelector("[data-menu='button']");
    const menuList = document.querySelector("[data-menu='list']");
  
    menuButton.addEventListener('click', openMenu);
  
    function openMenu() {
        menuList.classList.toggle('active')
        menuButton.classList.toggle('active')
    }
  
  }
  
  function initTyping() {
    let letter = 0;
    const text = '     Jorge Willian';
  
    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".meu-nome").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 150)
        }
    }
  
    typeWriter();
  }
  
  function initMenuTransition() {
      
    function transitionMenu() {
        const nav = document.querySelector('nav');
        nav.classList.toggle("fixed", window.scrollY > 0)
    }
    window.addEventListener('scroll', transitionMenu)
  }
  
  function mostrarFrase() {
  
    let descTecnologias = document.querySelectorAll('.container-barra');
    let iconTecnologias = document.querySelectorAll('.icons');
    let inst = document.querySelector('#instrucao');
    
    for (let a = 0; a < iconTecnologias.length; a++) {
  
        iconTecnologias[a].addEventListener('mouseover', () => {
        descTecnologias[a].classList.remove('hide');
        inst.classList.add('hide');
  
        })
    
        iconTecnologias[a].addEventListener('mouseout', () => {
        descTecnologias[a].classList.add('hide');
        inst.classList.remove('hide');
  
        })
    }
  }

  function showDialog() {
    const button1 = document.getElementById("dialogProjeto1");
    const button2 = document.getElementById("dialogProjeto2");
    const button3 = document.getElementById("dialogProjeto3");
    const button4 = document.getElementById("dialogProjeto4");
    const button5 = document.getElementById("dialogProjeto5");
    const button6 = document.getElementById("dialogProjeto6");

    const dialog1 = document.getElementById("dialog1");
    const dialog2 = document.getElementById("dialog2");
    const dialog3 = document.getElementById("dialog3");
    const dialog4 = document.getElementById("dialog4");
    const dialog5 = document.getElementById("dialog5");
    const dialog6 = document.getElementById("dialog6");

    button1.addEventListener("click", () => {
      dialog1.showModal();
    });
    button2.addEventListener("click", () => {
      dialog2.showModal();
    });
    button3.addEventListener("click", () => {
      dialog3.showModal();
    });
    button4.addEventListener("click", () => {
      dialog4.showModal();
    });
    button5.addEventListener("click", () => {
      dialog5.showModal();
    });

    button6.addEventListener("click", () => {
      dialog6.showModal();
    });
  }
  
  showDialog();
  initTyping();
  mostrarFrase(); 
  initMenuTransition();
  initMenuMobile();