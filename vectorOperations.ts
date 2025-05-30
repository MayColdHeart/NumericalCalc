

function vectorSum(data_1: number[], data_2: number[]) {

    const result = [];

    for (let i = 0; i < data_1.length; i++) {
        result.push(data_1[i] + data_2[i])
    }

    return result;
}


function vectorSubtract(data_1: number[], data_2: number[]) {

    const result = []

    for (let i = 0; i < data_1.length; i++) {
        result.push(data_1[i] - data_2[i])
    }

    return result;
}


function vectorMultiply(data_1: number[], data_2: number[]) {

    const result = [];

    for (let i = 0; i < data_1.length; i++) {
        result.push(data_1[i] * data_2[i])
    }

    return result;
}







function vectorDivide(data_1: number[], data_2: number[]){
    
    const result = []; 
  


    for (let i = 0; i < data_1.length; i++){
        result.push(data_1[i]/data_2[i]);
    }

    return result;

}

  


















console.log(vectorSum([1, 3, 5, 3, 6, 9], [1, 3, 5, 3, 6, 9]));
console.log(vectorSubtract([3, 89, 5, 3, 8, 9], [1, 3, 55, 3, 89, 9]));
console.log(vectorMultiply([3, 89, 5, 3, 8, 9], [1, 3, 55, 3, 89, 9]));
console.log(vectorDivide([3, 89, 5, 3, 8, 9], [1, 3, 55, 3, 89, 9]));