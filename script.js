/* let js= 'aishu';
if(js ==='aishu') alert('Aishu - IAS and 25LPA!!!')
console.log("remember to press ctrl shift j to open up console in chrome...");
// let aa ='xdff'
//this is a comment 

let aishuIsIAS25LPA = true;
console.log("YEss " + aishuIsIAS25LPA + " " +  typeof(aishuIsIAS25LPA))

console.log(typeof null) */

let a=1 //mutable
a=2
console.log("Value of let a is now changed ",a)

const b =1 //immutable 
//b=2 //this will throw type error 
//if u have this error, everything wil stop here.. code wont move forward
console.log("value of const cant change..u wll get error -- Uncaught TypeError: Assignment to constant variable." + b)

//const cc; --> will throw error 'const' declarations must be initialized.ts(1155)
let cc; // can just declare let but cant just declare const - const must b initialized too 

const a1 ='sjsj'
const b1 = 'djfjf'

const op = `I'm ${a1} , this is ${b1}, year ${10+10}`
console.log(op)

console.log("this is \n\
an exmaple of \n\
multiple lines ")

console.log(`example of
multiple line
with template literal??`)

console.log(Number('Aishu')) // Nan 
console.log(typeof(NaN)) //number - not a number is still a number 

console.log("aishu earns" + 25 + 'lpa') // + symbol automatically triggers string conversion -- coercion 
console.log("25" - "11" - 1) // - symbol automatically triggers number conversion 

console.log("loose equal comp-- here type coercion happens ", '18' == 18)
console.log("strict equal comp-- no type coer happens ", 18 == 18)

const career = prompt("whats your profession??")
console.log(career)

const careerDestiny = 'IAS'
switch(careerDestiny){
    case 'IAS' :
        console.log("amazing u r an IAS now!!!")
        break;
    case '25LPA' :
        console.log("Still a great life.. 25LPA!!!")
        break;
    default:
        console.log("we will figure it out...dont worry :)")        
}

cc = 'IAS'

console.log(`Lets see.  ${cc == 'IAS'? 'Finally IAS, great life' : 'Still great, earning 25lpa!!!'}`)