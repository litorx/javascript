/*= passar valor == comparaçao*/ 
/* * multiplicaçao ** potencializaçao 10**2  raiz quadrada *0.5*/ 
/* + soma e concatenaçao*/ 
/* if = se ELSE = entao*/ 
let a = 10;
let b = 5;

soma=a+b;
multiplicacao=a*b;
console.log(soma);
console.log(multiplicacao)

const nome="Vitor";
const idade="15";
const peso="80";
const altura="165";

console.log("Meu nome e" ,nome);

console.log(`Meu nome e ${nome} e meu sobrenome e ${idade}`);

console.log(`Meu nome é ${nome} tenho ${idade} anos e meu imc é de ${(altura**2)/peso}`)



let c=10;
let d=3;

rest=10%3;
console.log(rest);

if (rest==0){
    console.log("O numero é par");}
    else if (rest==1){
    console.log("O numero é impar")}
    else if(rest==8){
        console.log("Nao e numero")   
}


let p=60
let o=70
let i=80
let u=10

let media=((p+o+i+u)/4)

if(media > 69){
    console.log("O aluno foi aprovado");}
    else if(media < 69){
        console.log("o aluno foi reprovado")
    }


    if(media >= 70){
        console.log("O aluno foi aprovado 2");}
        else{ 
            console.log("o aluno foi reprovado 2");}


let age = prompt("Digite uma idade");

if(age <= 5 ){
    alert("É um bebê");
}else if(age <= 10){
    alert("é uma criança");
}
else if(age <= 15){
    alert("é um adolescente");
}
else if(age <= 19){
    alert("é um pre adolescente");
}
else if(age <= 59){
    alert("é um adulto");
}
else if(age <= 99){
    alert("é um idoso");
}
else if(age >= 100){
    alert("é o Mun raaa");
}




if(age <= 5 ){
    document.body.innerHTML = ("É um bebê");
}else if(age <= 10){
    document.body.innerHTML = ("é uma criança");
}
else if(age <= 15){
    document.body.innerHTML = ("é um adolescente");
}
else if(age <= 19){
    document.body.innerHTML = ("é um pre adolescente");
}
else if(age <= 59){
    document.body.innerHTML = ("é um adulto");
}
else if(age <= 99){
    document.body.innerHTML = ("é um idoso");
}
else if(age >= 100){
    document.body.innerHTML = ("é o Mun raaa");
}

/*switch (age <= 5);*/

let ab=0;
while (ab < 11){
    ab++
    console.log(ab);
}

