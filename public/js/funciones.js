function f2(){
    // ondblclick ANTERIOR
    document.getElementById('b1').innerHTML='<tr><td scope = "row">1</td><td scope = "row">Usuario1</td><td scope = "row">10</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr> <tr><td scope = "row">2</td><td scope = "row">Usuario2</td><td scope = "row">15</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr> <tr><td scope = "row">3</td><td scope = "row">Usuario3</td><td scope = "row">12</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr> <tr><td scope = "row">4</td><td scope = "row">Usuario4</td><td scope = "row">11</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr> <tr><td scope = "row">5</td><td scope = "row">Usuario5</td><td scope = "row">16</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr> <tr><td scope = "row">6</td><td scope = "row">Usuario6</td><td scope = "row">17</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr>';
}

function f3(){
    // onclick
    document.getElementById('b1').innerHTML='<tr><td scope = "row">7</td><td scope = "row">Usuario7</td><td scope = "row">14</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr> <tr><td scope = "row">8</td><td scope = "row">Usuario8</td><td scope = "row">13</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr> <tr><td scope = "row">9</td><td scope = "row">Usuario9</td><td scope = "row">15</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr> <tr><td scope = "row">10</td><td scope = "row">Usuario10</td><td scope = "row">18</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr> <tr><td scope = "row">11</td><td scope = "row">Usuario11</td><td scope = "row">14</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr> <tr><td scope = "row">12</td><td scope = "row">Usuario12</td><td scope = "row">11</td><td scope = "row">Masculino</td><td scope = "row">ITC</td><td scope = "row">00:50:00</td><td scope = "row">500</td></tr>';
}

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