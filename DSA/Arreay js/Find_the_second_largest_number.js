// Find the second largest number

const numbers = [10, 50, 30, 80, 60, 70]; 

let largest=numbers[0]
let second_largest=numbers[0]

for(let i=0; i<numbers.length; i++){
    if(largest<numbers[i]){
        second_largest=largest
        largest=numbers[i]
    }

    if(largest>numbers[i] && second_largest<numbers[i]){
        second_largest=numbers[i]
    }
}

console.log(second_largest)