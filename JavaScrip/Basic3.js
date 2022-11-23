/*
let a=3;
while(a < 11){
    a++
    console.log(a);
}
/*Da variavel ate o numero colocado como while
while = enquanto*/
/*
for(let b =0; b < 11; b++){
    console.log(b);
}
/**açao sempre dentro de chaves */
/*
let c=0;

while (c<=10){
   mult = 3 * c;
    c++
    console.log(mult);
}

/*Tabuada */


/*
let number = prompt("Digite um numero");
let number2=0;



while (number2<=10){
    mult = number * number2;
    console.log(`${number} X ${number2} é igual a ${mult}`);
    number2++
}
*/
/*
let day=5;
switch(day){
    case 1:
        console.log("Hoje é Segunda-Feira");
        break;
        case 2:
            console.log("Hoje é Terça-Feira")
            break;
            case 3:
                console.log("Hoje é Quarta-Feira")
                break;
                case 4:
                    console.log("Hoje é Quinta-Feira")
                    break;
                    case 5:
                        console.log("Hoje é Sexta-Feira")
                        break;
                        case 6:
                            console.log("Hoje é Sabado")
                            break;
                            case 7:
                                console.log("hoje é Domingo")

}
*/
/*
let= fruta=prompt("Digite a cor da sua fruta favorita");

switch(fruta){
case "amarelo":
    alert("Sua fruta favorita é banana ou melão")
    break;
    case "vermelho":
        alert("Sua fruta favorita é maçã")
        break;
        case "preto":
            alert("Sua fruta favoria não é uma fruta")
            break;
            case "roxo":
                alert("Sua fruta favorita é úva")
                break;
                case "marrom":
                    alert("Sua fruta favorita é kiwi")
                    break;
                    case "laranja":
                        alert("Sua fruta favorita é laranja")
}
*/
/*
let salario=4500
let poupança=2000
let viagem = 5000

if (salario+poupança>=viagem){
    alert("Tenho dinheiro susficiente para viajar");}
    else{
        alert("Não tenho dinheiro para viajar")
    }
    */

//const fruta=["abacaxi","mamão", "banana", 10, 15 , 20, true, false, 1.5];

//console.log(fruta.length)
//fruta.push("abacate");
//console.log(fruta);
//console.log(fruta[2][5]);

//const pessoa1={
  //  nome:"joao",
    //sobrenome:"henrique",
    //idade:25

//}
//console.log(pessoa1.idade);
//console.log(pessoa1.sobrenome);
//console.log(pessoa1.nome);

//function criapessoa(nome, sobrenome, idade,){
  //  return{nome,sobrenome,idade};
//}
//const pessoa2=criapessoa("marco","ferreira",15)
//const pessoa3=criapessoa("luciana", "silva", 32)


//console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)

//function cars(marca, modelo, ano){
//    return{marca,modelo,ano};
//}
//const nissan=cars("nissan", "360zV6", 2009);
//const honda=cars("honda", "civic flexone",2019)
//const lambo=cars("lamborghini", "gallardo 5.0 v10",2008)

//console.log(lambo.marca, lambo.modelo, lambo.ano)


//function soma (x,y){
  //  const resultado = x + y;
    //return resultado;
//}
//console.log(soma(2,5));
//console.log(soma(22,51));
//console.log(soma(12,25));
//function ola(){
 //   console.log("Bom dia");
//}
//ola();
//function ola2(nome){
  //  console.log(`Bom dia ${nome}`);
//}
//ola2('junior');
//const variavel=ola('joao paulo');
//console.log(variavel);


//const raiz= function(n){
//    return n ** 0.5;
//};
//console.log(raiz(100));
//console.log(raiz(8181818181));


const raiz1=(n) =>{
    return n ** 0.5;
}
console.log(raiz1(9));
console.log(raiz1(8181818181818188181));

const raiz2= n => n ** 0.5;

console.log(raiz2(18));