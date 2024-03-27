const meuNome = document.getElementById('meuNome');
const datadeNamoro = document.querySelector('input[type="date"]');
const validarbtn = document.getElementById('validar');



validarbtn.addEventListener('click', prosseguir)
function prosseguir(){
    var nome = meuNome.value;
    var data = datadeNamoro.value;
    console.log(data)
    if(nome == "Maria" || nome == "maria" && data == "2021-09-18"){
        alert('Deu certo!')
        validar()
    } else {
        alert('Algo está errado, verifique suas respostas!')
    }
    
}

function validar(){
    location.href = "homequiz.html"
}