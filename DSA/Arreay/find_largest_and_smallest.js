// Find the largest number

const numbers = [10, 45, 20, 80, 15, 90];

let largestaNumber=numbers[0]


for(let i =1; i<numbers.length; i++){
    if(numbers[i]>largestaNumber){
        largestaNumber=numbers[i]
    }

}

console.log(largestaNumber)



// Find the largest number

max_number=Math.max(...numbers)
console.log(max_number)




// Find the smallest number

let smallest_number=numbers[0]
for(let i=0; i<numbers.length; i++){
    if(smallest_number>numbers[i]){
        smallest_number=numbers[i]
    }
}

console.log(smallest_number)


const small_number=Math.min(...numbers)

console.log(small_number)