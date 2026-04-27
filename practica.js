let n1=document.getElementById("n1")
let n2=document.getElementById("n2")
let boton=document.getElementById("boton")
let suma=document.getElementById("cantidad")
let R=0

boton.addEventListener("click",tarea)

function tarea(){
n1=Number(n1.value)
n2=Number(n2.value)

R=n1+n2

suma.textContent=(R)

console.log(suma)


}


