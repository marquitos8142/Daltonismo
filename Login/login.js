function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
//aca esta definido que si la contraseña no incluye los siguientes valores no se puede crear la cuenta (Mas que nada por seguridad aunque para mi pagina no sea muy util)
    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 10){
        alert('Max of 10');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//aca lo que hace el codigo es tanto almacenar con comprobar por medio del local Storage
function check(){

    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    //aca es donde se comprueba si los datos nuevos ingresados son iguales a los guardados en el storage y si estan correctos redirigir a la pagina inicial
    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        window.open("/Casa/Casa.html");
         window.close()    
        }else{
        alert('Error on login');
    }
}