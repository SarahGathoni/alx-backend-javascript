export default function returnHowManyArguments(...args) {
    for(let args of args){
        return args
    }
}
console.lo(returnHowManyArguments("Hello", "Holberton", 2020));