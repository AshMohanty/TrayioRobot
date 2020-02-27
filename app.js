// Reading in the input.txt file and splitting it based on each new line

let fs = require("fs");
var info = fs.readFileSync('input.txt', "utf8").split("\n");

//Taking information from the input.txt file and casting them appropriately

var size = [parseInt(info[0][0]),parseInt(info[0][2])]; //size of room
var current = [parseInt(info[1][0]),parseInt(info[1][2])]; // current location
var directions= info[info.length - 1].split(''); // finding the last line and turning it into directions

// Parsing all the patches
info = info.splice(2, info.length - 3); // shorten info so its just the patches
var patches = [[],[]];
function parsepatches(){
    for (let i = 0; i < info.length; i++) {
        patches[i] = [parseInt(info[i][0]),parseInt(info[i][2])];
    }
}
parsepatches(); // populate patches array
patches = uniqBy(patches, JSON.stringify); // use a function to delete duplicates in the patches array

var count = 0; // Count of Patches Cleaned

//Function to move the robot based on directions, and each move the robot checks to see if it cleaned a patch
function run() {
    for (let i = 0; i < directions.length; i++) {
        if (searchForArray(patches, current) !== -1 ){
            count += 1;
            patches[searchForArray(patches, current)] = 'clean'; //Marks the patch as clean so an extra count doesn't get added
        }
        move(current, directions[i], size);
    }
}

// Move function based on directional input. Set conditions to make sure robot wouldn't leave max room dimensions
function move(current, direction, size) {
    if (direction === 'N') {
        if (current[1] + 1 > size[1]) {
            current[1] = size[1]
        } else current[1] += 1;
    } else if (direction === 'S') {
        if (current[1] - 1 < 0) {
            current[1] = 0
        } else current[1] -= 1;
    } else if (direction === 'E') {
        if (current[0] + 1 > size[0]) {
            current[0] = size[0]
        } else current[0] += 1;
    } else if (direction === 'W') {
        if (current[0] - 1 < 0) {
            current[0] = 0
        } else current[0] -= 1;
    }
}
//Generic needle and haystack function to find index of the robot in relation to the dirty patches
function searchForArray(haystack, needle){
    var i, j, current;
    for(i = 0; i < haystack.length; ++i){
        if(needle.length === haystack[i].length){
            current = haystack[i];
            for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
            if(j === needle.length)
                return i; // returns index so we can mark patch as clean
        }
    }
    return -1; // returns -1
}

// Generic function to delete duplicates in a 2d array; Put here to avoid duplicate counts of patches
function uniqBy(a, key) {
    var seen = {};
    return a.filter(function (item) {
        var k = key(item);
        return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    })
}

// Run function and print final count of patches cleaned and final coordinates
run();
console.log(current);
console.log(count);

