const meuNome = document.getElementById('meuNome');
const datadeNamoro = document.getElementById('nossaData');
const validarbtn = document.getElementById('validar');


validarbtn.addEventListener('click', prosseguir)
function prosseguir(){
    var nome = meuNome.value;
    var data = datadeNamoro.value;
    if(nome == "Maria" || nome == "maria" && data == "18/09/2021"){
        alert('Deu certo!')
        validar()
    } else {
        alert('Algo está errado, verifique suas respostas!')
    }
    
}

function validar(){
    location.href = "homequiz.html"
}