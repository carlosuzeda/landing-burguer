function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/images/menu_white_36dp.svg";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/images/close_white_36dp.svg";
    }
}

let content = 'Utilize o cupom BOASVINDAS e tenha 10% de desconto no seu primeiro pedido!';
let text = document.getElementById('text');
let speed = 100; //velocidade que o texto vai aparecer na tela.
let cont = 0;
function typeWriter(){
    if(cont < content.length){
        text.textContent += content.charAt(cont);
        cont++;
        setTimeout(typeWriter, speed);
    }else{
        text.textContent = '';
        cont = 0;
        typeWriter();
    }
}
typeWriter();