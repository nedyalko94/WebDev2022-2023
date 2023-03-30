

/*
Problem - given arr of integer, sort the array
const arr = [-6,20,8,-2,4]
insertionSort (arr) => should return [-6,-2,4,-8,20]

virtually split arr into a sorted and an unsorted part 
assume that the first element is already sorted and remaining element are unsorted
select an unsorted element and compare with all elements in the sorted part
if the elements in the sorted part is smaller than the selected element ,proceed to the next 
element in the unsorted part . Else ,shift larger element in the sorted part towards the right.
insert the selected element at the right index 
repeat till all the unsorted elements are placed in the right order 

example

[-6,20,8,-2,4]  | nti = 20  | se= -6  | -6 > 20 ? No. Place 20 to the right of -6
[-6,20,8,-2,4]  | nti = 8   | se = 20 | 20>8 ?Yes . Shift 20 to the right 
[-6,20,20,-2,4] | nti = 8   | se = -6 | -6>8 ? No . Place 8 to the right of -6
[-6,8,20,-2,4]  | nti = -2  | se = 20 | 20>-2 ?Yes . Shift 20 to the right 
[-6,8,20,20,4]  | nti = -2  | se = 8  | 8 >-2 ?Yes . Shift 8 to the right 
[-6,8,8,20,4]   | nti = -2  | se = -6 | -6>-2 ?No . Place -2 to the right 
[-6,-2,8,20,4]  | nti = 4   | se = 20 | 20>4 ?Yes . Shift 20 to the right 
[-6,-2,8,20,20] | nti = 4   | se = 8  | 8>4 ?Yes . Shift 8 to the right 
[-6,-2,8,8,20]  | nti = 4   | se = -2 | -2>4 ?No  Place -4 to the right of -2  
[-6,-2,4,8,20]  |           |         | Reached end of the array. array is sorted

 */

function insertionSort(arr){
  
for(let i =1; i<arr.length;i++){
     let numberToInsert = arr[i]
     let j = i-1 // j index of the sorted element
     while(j>=0 && arr[j]> numberToInsert){
        arr[j+1] = arr[j]
        j = j-1
     }
     arr[j+1] = numberToInsert
}
}

const arr = [8,20,-2,4,6]
insertionSort(arr)
console.log(arr) // [-6,-2,4,8,20]

// big-O is O(n^2) quadratic