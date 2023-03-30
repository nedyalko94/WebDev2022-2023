


const arr1 = [1,2]
const arr2 = [3,4,5]



function CartesianProduct(arr1,arr2){
const result = []
    for(let i = 0 ;i<arr1.length;i++ ){
        for(let j = 0 ; j<arr2.length;j++){
            result.push([arr1[i],arr2[j]])
        }
    }
return result
}

console.log(CartesianProduct(arr1,arr2))

// big-O is O(mn)  is not quadratic because arr can be different so is n * m depend of both arr



