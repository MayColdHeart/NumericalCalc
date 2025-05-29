

function vectorSum(data_1:number[], data_2:number[]){

const result = [];

for(let i = 0; i < data_1.length; i++){
    result.push(data_1[i] + data_2[i])
}

return result;
}


console.log(vectorSum([1, 3, 5, 3, 6, 9],[1, 3, 5, 3, 6, 9]));
