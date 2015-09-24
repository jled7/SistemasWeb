var verValores = function() {
  var sAux = "";
  var frm = document.getElementById("registro");
  for(var i=0;i<frm.elements.length;i++) {
    sAux += "Nombre: " + frm.elements[i].name + " ";
    sAux += "Valor: " + frm.elements[i].value + "\n";
  }
  alert(sAux);
}
var validar = function () {
  // Pongo en lineas separadas para que compruebe todas y siga aunque la primera sea falsa(evaluacion en cortocircuito)
  var correoOK = validarCorreo();
  var nombreApellidosOK = validarNombreApellidos();
  var passwordOK = validarPassword();
  var repeatPasswordOK = validarRepeatPassword();
  var telefonoOK = validarTelefono();
  var especialidadOk = validarEspecialidad();
  return correoOK && nombreApellidosOK && passwordOK && repeatPasswordOK && telefonoOK && especialidadOk;
}
var validarCorreo = function() {
  var dom_pointer = document.getElementById("Email");
  var reg = dom_pointer.value.match(/^[A-Za-z]*\d{3}@ikasle.ehu.(es|eus)$/i);
  if(reg === null) {
    dom_pointer.style.backgroundColor = "#FE2E2E";
    return false;

  } else {
    dom_pointer.style.backgroundColor ="#8AFC94";
    return true;
  }
}
var validarNombreApellidos = function() {
  var dom_pointer = document.getElementById("NombreApellidos");
  var reg = dom_pointer.value.match(/[A-Za-z]+\s[A-Za-z]+\s[A-Za-z]+/i);
  if(reg === null) {
    dom_pointer.style.backgroundColor = "#FE2E2E";
    return false;

  } else {
    dom_pointer.style.backgroundColor ="#8AFC94";
    return true;
  }
}
var validarPassword = function() {
  var dom_pointer = document.getElementById("Password");
  if(dom_pointer.value.length < 6) {
    //addErrorPassword("Password mayor de 6 caracteres");
    addError("Password mayor de 6 caracteres", "errorPassword");
    dom_pointer.style.backgroundColor = "#FE2E2E";
    return false;

  } else {
    removeError("errorPassword");
    dom_pointer.style.backgroundColor ="#8AFC94";
    return true;
  }
}
var validarRepeatPassword = function() {
  var dom_pointer = document.getElementById("RepeatPassword");
  var dom_pointer2 = document.getElementById("Password");
  if((dom_pointer.value !== dom_pointer2.value) || (dom_pointer.value.length < 6) ) {
    //addErrorRepeatPassword("Password no son iguales");
    addError("Password no son iguales", "errorRepeatPassword");
    dom_pointer.style.backgroundColor = "#FE2E2E";
    return false;

  } else {
    removeError("errorRepeatPassword");
    dom_pointer.style.backgroundColor ="#8AFC94";
    return true;
  }
}
var validarTelefono = function() {
  var dom_pointer = document.getElementById("Telefono");
  var reg = dom_pointer.value.match(/^\d{9}$/i);
  if(reg === null) {
    //addErrorTelefono("El telefono tiene que tener 9 digitos");
    addError("El telefono tiene que tener 9 digitos", "errorTelefono");
    dom_pointer.style.backgroundColor = "#FE2E2E";
    return false;

  } else {
    removeError("errorTelefono");
    dom_pointer.style.backgroundColor ="#8AFC94";
    return true;
  }
}
var validarEspecialidad = function() {
  var dom_pointer = document.getElementById("Especialidad");
  var dom_pointer2 = document.getElementById("especialidad");
  if(dom_pointer.options.selectedIndex === 0 ) {
    //addErrorEspecialidad("Seleccione una especialidad");
    addError("Seleccione una especialidad", "errorEspecialidad");
    dom_pointer.style.backgroundColor = "#FE2E2E";
    document.getElementById("especialidadotra").style.display = "none";
    return false;

  } else if (dom_pointer.options.selectedIndex === 4){
    dom_pointer.style.backgroundColor ="#8AFC94";
    document.getElementById("especialidadotra").style.display = "block";

    if(dom_pointer2.value.length === 0) {
      dom_pointer2.style.backgroundColor = "#FE2E2E";
      return false;
    } else {
      dom_pointer2.style.backgroundColor = "#8AFC94";
      return true;
    }
  } else {
    removeError("errorEspecialidad");
    document.getElementById("especialidadotra").style.display = "none";
    dom_pointer.style.backgroundColor ="#8AFC94";
    dom_pointer2.value= "";
    return true;
  }
}
var showImage = function(input) {

  var dom_pointer = document.getElementById("imageShow");
  var dom_pointer2 = document.getElementById("file");
  var tmp = URL.createObjectURL(dom_pointer2.files[0]);
  if(dom_pointer2.value === "") {
      dom_pointer.innerHTML = "";
  } else {
      dom_pointer.innerHTML = "<img src='" + tmp + "'  width=100px>";
  }

}

var addErrorPassword = function (text) {
  var dom_pointer = document.getElementById("errorPassword");
  dom_pointer.innerHTML = "<p class='error'>"+text+"</p>";
}
var removeErrorPassword = function () {
  var dom_pointer = document.getElementById("errorPassword");
  dom_pointer.innerHTML = "";
}
var addErrorRepeatPassword = function (text) {
  var dom_pointer = document.getElementById("errorRepeatPassword");
  dom_pointer.innerHTML = "<p class='error'>"+text+"</p>";
}
var removeErrorRepeatPassword = function () {
  var dom_pointer = document.getElementById("errorRepeatPassword");
  dom_pointer.innerHTML = "";
}
var addErrorTelefono = function (text) {
  var dom_pointer = document.getElementById("errorTelefono");
  dom_pointer.innerHTML = "<p class='error'>"+text+"</p>";
}
var removeErrorTelefono = function () {
  var dom_pointer = document.getElementById("errorTelefono");
  dom_pointer.innerHTML = "";
}
var addErrorEspecialidad = function (text) {
  var dom_pointer = document.getElementById("errorEspecialidad");
  dom_pointer.innerHTML = "<p class='error'>"+text+"</p>";
}
var removeErrorEspecialidad = function () {
  var dom_pointer = document.getElementById("errorEspecialidad");
  dom_pointer.innerHTML = "";
}
var addError = function(text,element) {
  var dom_pointer = document.getElementById(element);
  dom_pointer.innerHTML = "<p class='error'>"+text+"</p>";
}
var removeError = function(element) {
  var dom_pointer = document.getElementById(element);
  dom_pointer.innerHTML = "";
}
