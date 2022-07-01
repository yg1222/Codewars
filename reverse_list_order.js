// This function takes an array/list and returns it in reversed order
//Where x is the input array and y the result
function reverse(x){
    let y = [];
    for (let i = x.length - 1; i > -1; i--){
        y.push(x[i]);    
    }
    console.log(y);
    return y;
}



