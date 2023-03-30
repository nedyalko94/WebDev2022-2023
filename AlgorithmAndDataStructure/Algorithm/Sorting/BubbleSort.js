/*
Problem given an array of integer sor the array

arr = [-6,20,8,-2,4]
bubbleSort(arr) => [-6,-2,4,8,20]


*/

/*
[-6,20,8,-2,4]
[-6,20,8,-2,4]=>[-6,8,20,-2,4] swap 20  since 20>9
[-6,8,20,-2,4]=>[-6,8,-2,20,4] swap 20  since 20>-2
[-6,8,-2,20,4]=>[-6,8,-2,4,20] swap 20  since 20>4

end of the array element swapped yes repeat the comparison

[-6,8,-2,4,20]
[-6,8,-2,4,20]=>[-6,-2,8,4,20] swap 8 >-2
[-6,-2,8,4,20]=>[-6,-2,4,8,20] swap 8 > 4
[-6,-2,4,8,20]=>[-6,-2,4,8,20] swap 8 > 4
8 is smaller that 20 so we do it again from start
end of arr 
[-6,-2,4,8,20] end of the arr  element to swap  no arr is sorted 

*/

function bubbleSort(arr){
let swapped
do{
    swapped = false
    for(let i = 0; i <arr.length-1; i++){
        if (arr[i]> arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
    }
}while(swapped)
}


const arr = [8,20,-2,4,-6]
bubbleSort(arr)
console.log(arr)// [-6,-2,4,8,20]

// big-O is O(n^2) quadratic


