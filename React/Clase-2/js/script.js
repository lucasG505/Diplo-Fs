//Estructuras de control de flujo

//let edad = 20;
//let permiso;
//let age = parseInt(prompt("Edad"));

// if (age >=18){
//     console.log("Sos mayor de edad capo");
//     permiso=true;
// }else {
//     console.log("Sos un baby, raja");
//     permiso=false;
// }

// if (age<=24 && age>=18){
//     console.log("Veni con alguien pa");
// }else{
//     if (age>=25){
//         console.log("Pasa compa");
//     }else{
//         console.log("A mimir");
//     }
// }

//___________________________________________
//Switch

// let dia = prompt("Ingrese un dia");

// switch (dia) {
//     case ("Lunes"):
//         console.log("hoy es Lunes");
//         break;
//     case ("Martes"):
//         console.log("hoy es Martes");
//         break;
//     case ("Miercoles"):
//         console.log("hoy es Miercoles");
//         break;
//     case ("Jueves"):
//         console.log("hoy es Jueves");
//         break;
//     case ("Viernes"):
//         console.log("hoy es Viernes");
//         break;
//     case ("Sabado"):
//         console.log("hoy es Sabado");
//         break;
//     case ("Domingo"):
//         console.log("hoy es Domingo");
//         break;
//     default:
//         console.log("no ingresaste un dia pa");
//         break;
// }

//____________________________________________
//Bucles

// for (let i = 0; i < 4; i++) {
//     console.log(`Repeticion ${i+1}`);
    
// }
// let count=1;

// while (count<5) {
//     console.log(`Dia ${count}`);
//     count++;
// }

// count=10

// do {
//     console.log(`Masivo ${count-45}`);
//     count--
// } while (count>5);

//____________________________________________
//Arrays

// let arr = [ "Manzana", "Furia", "Licha"];

// for (let bro of arr) {
//     console.log(bro);
// }
// console.log([...arr]);

// let arr = [
//     {
//         nombre:"Lucas",
//         edad:23,
//         estudios:"Universitarios"
//     },
//     {
//         nombre:"Chiara",
//         edad:22,
//         estudios:"Universitarios"
//     },
//     {
//         nombre:"Pepe",
//         edad:13,
//         estudios:"Primarios"
//     }
// ];
// let mayores=[];
// let menores=[];
// for (const p of arr) {
//     if(p.edad>=18){
//         mayores.push(p);
//     }else{
//         menores.push(p);
//     }
// }
// console.log([...mayores]);
// console.log([...menores]);

// let entradaUsuario;

// do {
//     entradaUsuario = prompt("Valor numerico");

//     if(isNaN(entradaUsuario)){
//         alert("Pone un numero capo");
//     }

// } while (isNaN(entradaUsuario));

// let numero = Number(entradaUsuario);

// console.log(`Su numero es ${numero}`);
//____________________________________________
//Funciones

// let createUser = (name, age, hobby) => {
//     let user={
//         name:name,
//         age:age,
//         hobby:hobby
//     }
//     return user;
// }

// let nombre=prompt("nombre");
// let edad;
// do {
//     edad=prompt("edad");
//     if(isNaN(edad)){
//         alert("valor numerico");
//     }
// } while (isNaN(edad));
// let hobby=prompt("hobby");
// let user1= createUser(nombre,edad,hobby);
// for (const p in user1){
//     console.log(user1[p]);
// };
//
//Funcion implicita con retunr implicito
// const suma = (a,b,c)=>a+b+c;
// console.log(suma(10,10,10));