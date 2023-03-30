/*
Tower of Hanoi
3 rod and multiple disc with different diameter size 

The objective of the puzzle is to move the entre stack to the last rod,
Obeying the following rules :
    Only one disk may be moved at a time.
    Each move consist of taking the upper disk from one of the stack and placing
    it on top of another stack or on an empty rod. 
    And lastly! No disk may be placed on top of a disk that is smaller.


    Example 
    Shift 'n-1' disks from "A" to "B" using "C" (when is require)
    Shift last disk from "A" to "C"
    Shift "n-1" disks from "B" to "C" using "A" (when is require)
*/

function TowerOfHanoi(n,fromRod,toRod,usingRod){
if(n===1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
    return
} 
TowerOfHanoi(n-1,fromRod,usingRod,toRod)
console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
TowerOfHanoi(n-1,usingRod,toRod,fromRod)


}

TowerOfHanoi(3,'A','C','B')


//big-O is O(2^n)