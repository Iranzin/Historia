const avanca = document.querySelectorAll('.btn-proximo');
const music = new Audio('./sound/musica-tensao.mp3');
const btnSound = document.getElementById('indicador-de-som');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        let passoInt = parseInt(this.getAttribute('data-proximo'));

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');

        if (passoInt >= 16 && passoInt != 20) {
            console.log('chegamos!');
            music.src = './sound/musica-parabens.mp3';
            music.load();
        }
    })
})

document.addEventListener('click', function() {
    music.play();
    btnSound.style.opacity = '0';
});

btnSound.addEventListener('click', function() {
    btnSound.style.opacity = '0';
})