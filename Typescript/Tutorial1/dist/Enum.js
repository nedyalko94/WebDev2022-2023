"use strict";
var Count;
(function (Count) {
    Count[Count["one"] = 0] = "one";
    Count[Count["two"] = 1] = "two";
    Count[Count["three"] = 2] = "three";
    Count[Count["four"] = 3] = "four";
})(Count || (Count = {}));
console.log(Count);
console.log(Count.four);
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.down);
