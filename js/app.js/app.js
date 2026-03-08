document.addEventListener("DOMContentLoaded", () => {

let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
let medicos = JSON.parse(localStorage.getItem("medicos")) || [];
let citas = JSON.parse(localStorage.getItem("citas")) || [];


/* PACIENTES */

const formPaciente = document.getElementById("formPaciente");

if(formPaciente){

formPaciente.addEventListener("submit", e => {

e.preventDefault();

let nombre = document.getElementById("nombrePaciente").value;
let edad = document.getElementById("edadPaciente").value;
let telefono = document.getElementById("telefonoPaciente").value;

pacientes.push({nombre, edad, telefono});

localStorage.setItem("pacientes", JSON.stringify(pacientes));

mostrarPacientes();

formPaciente.reset();

});

mostrarPacientes();

}

function mostrarPacientes(){

let tabla = document.getElementById("tablaPacientes");

if(!tabla) return;

tabla.innerHTML = "";

pacientes.forEach(p => {

tabla.innerHTML += `
<tr>
<td>${p.nombre}</td>
<td>${p.edad}</td>
<td>${p.telefono}</td>
</tr>
`;

});

}


/* MEDICOS */

const formMedico = document.getElementById("formMedico");

if(formMedico){

formMedico.addEventListener("submit", e => {

e.preventDefault();

let nombre = document.getElementById("nombreMedico").value;
let especialidad = document.getElementById("especialidadMedico").value;

medicos.push({nombre, especialidad});

localStorage.setItem("medicos", JSON.stringify(medicos));

mostrarMedicos();

formMedico.reset();

});

mostrarMedicos();

}

function mostrarMedicos(){

let tabla = document.getElementById("tablaMedicos");

if(!tabla) return;

tabla.innerHTML = "";

medicos.forEach(m => {

tabla.innerHTML += `
<tr>
<td>${m.nombre}</td>
<td>${m.especialidad}</td>
</tr>
`;

});

}


/* CITAS */

const formCita = document.getElementById("formCita");

if(formCita){

formCita.addEventListener("submit", e => {

e.preventDefault();

let paciente = document.getElementById("pacienteCita").value;
let medico = document.getElementById("medicoCita").value;
let fecha = document.getElementById("fechaCita").value;

citas.push({paciente, medico, fecha});

localStorage.setItem("citas", JSON.stringify(citas));

mostrarCitas();

formCita.reset();

});

mostrarCitas();

}

function mostrarCitas(){

let tabla = document.getElementById("tablaCitas");

if(!tabla) return;

tabla.innerHTML = "";

citas.forEach(c => {

tabla.innerHTML += `
<tr>
<td>${c.paciente}</td>
<td>${c.medico}</td>
<td>${c.fecha}</td>
</tr>
`;

});

}

});