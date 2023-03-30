
/*binary search
binary search work only at sorted array
given a SORTED array of "n" element and a target element 't', find index of "t" in the array
return -1 if the target element is not found 


arr = [-5,2,4,6,10] 
t = 10 should return 4 



*/

/* Binary search pseudocode
arr = [-5,2,4,6,10] 
target = 6 
if array is empty return -1 as the element cannot be found 

if the array has elements , find the middle element in the array if the target is equal 
to the middle element ,return the middle element  index

if target is less than the middle element, binary search left half of the array

if target is greater that middle element , binary search right half of the array 
*/


// step one find middle  [-5,2,4,6,10] is 4 and target 6 is greater
// right side of the array [6,10] 6 is equal to the middle  
//  return index 3 


// SOLUTION

function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[ middleIndex]) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)) //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6))  //3 
console.log(binarySearch([-5, 2, 4, 6, 10], 2)) //-1


// big-O is O(log n)

