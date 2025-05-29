
let data_1 = [1, 3, 5, 3, 6, 9];
let data_2 = [4, 2, 3, 1, 6, 9];


const result = [];

for(let i = 0; i < data_1.length; i++){
    result.push(data_1[i] + data_2[i])
}

console.log(result);