window.addEventListener('load', ()=> {
const form = document.querySelector('#formulario')
const usuario = document.getElementById("usuario")
const email = document.getElementById('email')

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    validaCampos()
        })
const validaCampos = ()=>{
    const usuarioValor = usuario.value.trim()
    const emailValor = email.value.trim()
    
    
    if(!usuarioValor){
        
        validaFalla(usuario, 'Campo vacío')
    }else{
        validaOk(usuario)
    }
    if(!emailValor){
        validaFalla(email, 'Campo vacío')            
    }else if(!validaEmail(emailValor)) {
        validaFalla(email, 'El e-mail no es válido')
    }else {
        validaOk(email)
    }
}
const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje

    formControl.className = 'form-control falla'
}
const validaOk = (input, msje) => {
    const formControl = input.parentElement
    formControl.className = 'form-control ok'
}

const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
}

})