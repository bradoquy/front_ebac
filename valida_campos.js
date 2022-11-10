const form = document.getElementById('form-valida');
const campA = document.getElementById("numA");
const campB = document.getElementById("numB");
const fieldB = parseInt(campB.value);
const fieldA = parseInt(campA.value);



function compare(numA, numB) {
	if (numB > numA) {
        return numB;
	}
}


form.addEventListener('submit', function (e) {
    let formEValido = false;
    e.preventDefault();

    const mensagemSucesso = `O número no acampamento B é maior que o número no acampamento A, vá em frente!!!`;
    const mensagemError = `O número no acampamento B é menor que o número no acampamento A, desculpe!!!`;
        
    formEValido = compare(campA.value, campB.value);
    if (formEValido) {
        document.querySelector('.sucess-message').innerHTML = mensagemSucesso;
        // alert("Campo B maior que A");
    } else {
        document.querySelector('.error-message').innerHTML = mensagemError;
        // alert("Campo A Maior que B");    

    }

    
       
}) 

console.log(form);


    
    
