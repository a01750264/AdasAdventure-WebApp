function f4(){
    document.getElementById('btnEnviar').disabled = false
}

function f5(){
    document.getElementById('btnEnviar').disabled = true
}

function validarPassword(){
    var pswd1 = document.getElementById('PswdUsuario').value;
    var pswd2 = document.getElementById('PswdUsuario2').value;
    if (pswd1 === pswd2)
    {
        f4()
    } else {
        f5()
    }
}