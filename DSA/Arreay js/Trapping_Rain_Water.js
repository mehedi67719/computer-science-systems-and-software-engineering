


const height = [3, 0, 2, 0, 4];

let totalWater = 0;

for (let i = 0; i < height.length; i++) {

    let leftMax = 0;
    let rightMax = 0;


    for (let j = 0; j <= i; j++) {
        leftMax = Math.max(leftMax, height[j]);
    }

    for (let j = i; j < height.length; j++) {
        rightMax = Math.max(rightMax, height[j]);
    }

    // Calculate Water
    let water = Math.min(leftMax, rightMax) - height[i];

    totalWater += water;
}

console.log("Height Array:", height);
console.log("Total Trapped Water:", totalWater);
