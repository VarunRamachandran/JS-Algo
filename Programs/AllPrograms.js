
//-----1 > Count all the charaters in a array 
/*  {
    1:1,
    2:2,
    3:3,
    4:4,
    b:1,
    e:1,+
    i:2,
    m:1, 
    n:2,
    o:1,
    p:1,
    r:2,
    s:1,
    u:2,
    y:1
}*/
function charCount(str){
// Make an object to return at the end
    var result = {};
// Loop over the string for each character
// IF you   keep i<=str.length then then last element will be undefined in the loop. hence i<length
    for(i=0;i<str.length;i++){
        var char = str[i];
// if the char is number/letter AND is key in the object, add one to the count
        if(result[char]>0){
            result[char]++;
        }
// if the char is number/letter AND is not a key in the object, add it to the object and set value  to 1
        else{ 
          result[char]=1;  
        };
    }
// if character is something else (space, period, etc) don't do anything
// return ojcet at the end
    return result;
}
charCount("Your pin Number is 1234 !");

//===========================================================================================================================================================



//---- 2.> Charcount Refractored
function charCount(str){
    var result = {};
    for(var char of str){
         char = char.toLowerCase();
         if(/[a-z0-9]/.test(char)){    
         result[char] ? ++result[char] : result[char]= 1;    
         }    
    }
    return result;
}
charCount("Your pin Number is 1234 !");
//===========================================================================================================================================================


 

// ----3.> SAME (NAIVE SOLUTION) Write a function called same, which accepts two arrays.
//  The function should return true if every value in the array has it's corresponding value squared in the second array.
//  The frequency of values must be the same.
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
      // Here we remove all the matched numbers so that at last if there is a mismatch the array will return false
        arr2.splice(correctIndex,1)
    }
    return true
}
//===========================================================================================================================================================




// ---- 4.> SAME (REFRACTORED SOLUTION) Write a function called same, which accepts two arrays.
//  The function should return true if every value in the array has it's corresponding value squared in the second array.
//  The frequency of values must be the same.
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
function same(arr1, arr2){ 
    if(arr1.length !== arr2.length){    
        return false;
    }
    let frequencyCounter1Arr = {}
    let frequencyCounter2Arr = {}
    for(let val of arr1){
        frequencyCounter1Arr[val] ? ++frequencyCounter1Arr[val] : frequencyCounter1Arr[val] =1;
    }
    for(let val of arr2){
        frequencyCounter2Arr[val] ? ++frequencyCounter2Arr[val] : frequencyCounter2Arr[val]= 1;               
    }

    for(let key in frequencyCounter1Arr){
      // See the value is present the arr2
    // Remember key here is the values of the array that is 1,2,3     and   4,1,9 
    // Check if the saquare value of the key is present in counter2 array
        if(!(key ** 2 in frequencyCounter2Arr)){
            return false
        }
       // Remember this to calculate the if the number of values of the keys are equal to each other thats why is the way as below
       // This means the number of times eg: (key ie our target numbers)->(number of times)      2->2   is equal to 4->2
       // Below line also means the value of the key is equal to the corresponding array key value 
        if(frequencyCounter2Arr[key ** 2] !== frequencyCounter1Arr[key]){
            return false
        }
    }
    return true
}
//===========================================================================================================================================================



//--- 5.> Anagram My Solution
//Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram(str1,str2){
    let str1ToLower = str1.toLowerCase();
    let str2ToLower = str2.toLowerCase();
    if(str1ToLower.length !== str2ToLower.length){
        return false;
    }
    let counter1 = [];
    let counter2 = [];
     for(let val of str1ToLower){
          counter1[val] = (++counter1[val] ||  1)
      }
      for(let val of str2ToLower){
          counter2[val] = (++counter2[val] ||  1)
      }
      for(let key in counter1){
          if(!(key in counter2)){
              return false;
          }
          if(counter1[key]!==counter2[key]){
              return false;
          }
      }
      return true;
  }
//============================================================================================================================================================



//---6.> Anagram Solution
function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
    const lookup = {};
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      //This s to count the unique values in  if letter exists, increment, otherwise set to 1
      lookup[letter] ? ++lookup[letter]  : lookup[letter] = 1;
    }  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else { 
    // this is to avoid any false positives
        lookup[letter] -= 1;
      }
    }
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagram', 'gramnaa')
//===========================================================================================================================================================



//---- 7.> Anagram Refractored
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
      }
      let lookup = {};
      for (let char of first) {
        lookup[char] ? ++lookup[char]  : lookup[char] = 1;
      }    
      for (let char of second) {
        !lookup[char] ? 'return false;'  : --lookup[char] ;
      }
      return true;
    }
    
    validAnagram('anagram', 'gramnaa')
//==========================================================================================================================================================



//--- 8.> SUM ZERO Naive Solution       
// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
//=========================================================================================================================================================



//--- 9.> SUM ZERO    Multiple Pointers    
// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}
//=============================================================================================================================================================



//--- 10.> countUniqueValues
//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
//There can be negative numbers in the array, but it will always be sorted.
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,3,5,7,7,9]);
// This solution we are going to alter the same array we will alter value of index i;
//=====================================================================================================================================================



//--- 11.> SLIDING WINDOW Navie Solution
//Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }


  
//--- 12.> SLIDING WINDOW Refractor Solution
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
//=============================================================================================================================================================



//--- 13. >Divide and Conquer NAIVE SOLUTION
//Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. 
//If the value is not found, return -1

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1
// NAIVE SOLUTION
function search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}
//--- 14. >Divide and Conquer REFRACTORED SOLUTION
function search(array, val) {
 
    let min = 0;
    let max = array.length - 1;
 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
 
        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
 
    return -1;
}
//===========================================================================================================================


// 15 Exercise 3 - Frequency counter --- Lec 36
// Frequency Counter - sameFrequency
// Write a function called sameFrequency
// Given two positive integers, find out if the two numbers have the same frequency of digits.
// function sameFrequency(num1, num2){
  function sameFrequency(num1, num2){
    //Very imp step to convert number to string
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let val of strNum1){
      countNum1[val] ? ++countNum1[val] : countNum1[val]=1
    }
    
    for(let val of strNum2){
      countNum2[val] ? ++countNum2[val] : countNum2[val]=1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }
  
   
  sameFrequency(3456,6543);
  
  
  //==========================================================================================================================================================================================================================6+

// 16 EX 4: areThereDuplicates (frequencyCounter)
//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates
//among the arguments passed in You can solve this using the frequency counter pattern OR the multiple pointers pattern.
areThereDuplicates(1,2,3);
areThereDuplicates('a','b','c','d');

function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }




  function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      let char = arguments[val];
      collection[char] ? ++collection[char] : collection[char]=1;
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }
//=====================================================================================================================================================

  


// 17 EX 4(b): areThereDuplicates (Multiple Pointers)
//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates
//among the arguments passed in You can solve this using the frequency counter pattern OR the multiple pointers pattern.
areThereDuplicates(1,2,3);
areThereDuplicates('a','b','c','d');

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
//===========================================================================================================================================================



// 18 EX 4(c): areThereDuplicates (One Liner Solution)
//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates
//among the arguments passed in You can solve this using the frequency counter pattern OR the multiple pointers pattern.
areThereDuplicates(1,2,3);
areThereDuplicates('a','b','c','d');

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }
//===========================================================================================================================================================




// 19. EX 5: averagePair Solution
//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates
//among the arguments passed in You can solve this using the frequency counter pattern OR the multiple pointers pattern.
averagePair([1,3,3,5,6,7,10,12,19],8)

function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }
//==========================================================================================================================================================




// 20. EX:6 Multiple Pointers-isSubsequence Iterative
//Write a function called  isSubsequence  which takes in two strings and checks whether the characters in the first string form a subsequence of the 
//characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
  isSubsequence('hello','hello world');
  isSubsequence('abc','acb');//order matters
  function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }
//===========================================================================================================================================================



// 21. EX:6(b) Multiple Pointers - isSubsequence Recursive but not O(1) Space
//Write a function called  isSubsequence  which takes in two strings and checks whether the characters in the first string form a subsequence of the 
//characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
  isSubsequence('hello','hello world');
  isSubsequence('abc','acb');//order matters
  function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }
//==========================================================================================================================================================



// 22. EX:7 maxSubArray Solution
// Given an array of integers and a number, write a function called maxSubarraySum , which finds the maximum sum of a subarray with the length of
// the number passed to the function. Note that a subarray must consist of consecutive  elements from the original array. 
//In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 maxSubarraySum([1,3,5,8,2,5,6],2);
 function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}
//==========================================================================================================================================================



// 23. EX:8 minSubArrayLen Solution
// Write a function called minSubArrayLen  which accepts two parameters - an array of positive integers and a positive integer. 
// This function should return the minimal length of a contiguous  subarray of which the sum is greater than or equal to the integer passed to the function. 
//If there isn't one, return 0 instead.
minSubArrayLen([2,3,1,2,4,3],7)// [4,3] as its the smallest subarray
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
     // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }
//===========================================================================================================================================================



//24. EX:9 findLongestSubstring, 
// Write a function called findLongestSubstring,  which accepts a string and returns the length of the longest substring with all distinct characters.
findLongestSubstring('ertwnmsdfwqwe')
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      //IF character is seen then reset the start variable
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      // After the start has been reset longest will hold on to the last value untill the start is bigger than the current longest
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }
//=========================================================================================================================================================



//25. CallStack Example
function takeShower(){
  return "Showering!"
}

function eatBreakfast(){
  let meal = cookFood()
  return `Eating ${meal}`
}

function cookFood(){
  let items = ["Oatmeal", "Eggs", "Protein Shake"]
  return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
  takeShower()
  eatBreakfast()
  console.log("Ok ready to go to work!")
}

wakeUp();
//============================================================================================================================================================



//26.  countDown Recursive Version
function countDown(num){
  if(num <= 0) {
      console.log("All done!");
      return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3)

//27. countDown Iterative Version
function countDown(num){
  for(var i = num; i > 0; i--){
      console.log(i);
  }
  console.log("All done!")
}
//===========================================================================================================================================================
//29. Factorila iterative
function factorial(num){
  let total = 1;
  for(let i = num; i > 1; i--){
      total *= i
  }
  return total;
}
//=========================================================================================================================================================
// 28. Sumrange
function sumRange(num){
  if(num === 1) return 1; 
  return num + sumRange(num-1);
}

sumRange(4);
//==========================================================================================================================================================


//30. Factorila Recursive

function factorial(num){
  if(num === 1) return 1;
  return num * factorial(num-1);
}
//==========================================================================================================================================================


//31. helper_method_recursion
// A helper method will persist the value the result array the outer function here is the helper method
function collectOddValues(arr){
  let result = [];
  function helper(helperInput){
      if(helperInput.length === 0) {
          return;
      }    
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      } 
      helper(helperInput.slice(1))
  }
  helper(arr)
  return result;
}
collectOddValues([1,2,3,4,5,6,7,8,9])
//==========================================================================================================================================================


//32.  collect_odds_pure_recursion Lec 49
function collectOddValues(arr){
    let newArr = [];
    if(arr.length === 0) {
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }  
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
collectOddValues([1,2,3,4,5])
//==========================================================================================================================================================


//33.Ex 10 Power
//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. 
//This function should mimic the functionality of Math.pow()   - do not worry about negative bases and exponents.
function power(base, exponent){
  if(exponent === 0) return 1;
  return base * power(base,exponent-1);
}
//==========================================================================================================================================================


//34.Ex Factorial
// Write a function factorial  which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24. 
//  factorial zero (0!) is always 1.
function factorial(x){
  if (x < 0 ) return 0;
  if (x <= 1 ) return 1;
  return x * factorial(x-1);
}
//=========================================================================================================================================================


//35. productOfArray
//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
function productOfArray(arr) {
  if(arr.length === 0) {
      return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
//==========================================================================================================================================================


//36. recursiveRange
// Write a function called recursiveRange  which accepts a number and adds up all the numbers from 0 to the number passed to the function 
function recursiveRange(x){
  if (x === 0 ) return 0;
  return x + recursiveRange(x-1);
}
//==========================================================================================================================================================


//37. fib
// Write a recursive function called fib  which accepts a number and returns the th number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
// and where every number thereafter is equal to the sum of the previous two numbers.
function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}




function fibonacci(num){ 
	var num1=0; 
	var num2=1; 
	var sum; 
	var i=0; 
	for (i = 0; i < num; i++){ 
		sum=num1+num2; 
		num1=num2; 
		num2=sum; 
	} 
	return num2; 
} 



function fibonacci(num){ 
	var num1=0; 
	var num2=1;
  var sum; 
	var counter =0; 
	while(counter < num){
    console.log(num1);
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    counter++;
  }
} 

//===========================================================================================================================================================


//38.Ex.15 reverse
// Write a recursive function called reverse  which accepts a string and returns a new string in reverse.
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}



function reverse(s){
  return s.split(" ").reverse().join(" ");
}


//===========================================================================================================================================================


// 39.EX.16 isPalindrome 
// Write a recursive function called isPalindrome  which returns true if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}

function checkPalindrom (str) {
  return str == str.split('').reverse().join('');
}
//===========================================================================================================================================================


// 40.someRecursive Ex.17 
// Write a recursive function called someRecursive  which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}
//============================================================================================================================================================



// 41.EX.18 flatten
// Write a recursive function called flatten  which accepts an array of arrays and returns a new array with all values flattened.
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}
//================================================================================================================================================================


//42.Ex.19 capitalizeFirst
// Write a recursive function called capitalizeFirst
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
//================================================================================================================================================================


//43.Ex.20
// Write a recursive function called nestedEvenSum . Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum (obj, sum=0) {
  for (var key in obj) {
      if (typeof obj[key] === 'object'){
          sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
          sum += obj[key];
      }
  }
  return sum;
}
//===============================================================================================================================================================
-

//44.Ex.21 capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}
//============================================================================================================================================================


//45.Ex.22stringifyNumbers
// Write a function called stringifyNumbers  which takes in an object and finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}-
//============================================================================================================================================================


//46.Ex.22 collectStrings Solution: Helper Method Recursion Version
// Write a function called collectStrings  which accepts an object and returns an array of all the values in the object that have a typeof string
function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
      for(var key in o) {
          if(typeof o[key] === 'string') {
              stringsArr.push(o[key]);
          }
          else if(typeof o[key] === 'object') {
              return gatherStrings(o[key]);
          }
      }
  }

  gatherStrings(obj);
  return stringsArr;
}
//============================================================================================================================================================


//47. Ex.23 collectStrings Solution: Pure Recursion Version
// Write a function called collectStrings  which accepts an object and returns an array of all the values in the object that have a typeof string
function collectStrings(obj) {
  var stringsArr = [];
  for(var key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      else if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
  }

  return stringsArr;
}
//============================================================================================================================================================



//48.LinearSearch
function linearSearch(arr, val){
  for(var i = 0; i < arr.length; i++){
      if(arr[i] === val) return i;
  }
  return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)
//============================================================================================================================================================


//49. binarySearch Original Solution
// Write a function called binarySearch  which accepts a  array and a value and returns the index at which the value exists. Otherwise, return -1. 
// 
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]){
          end = middle - 1;
      } else {
          start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem){
      return middle;
  }
  return -1;
}
//============================================================================================================================================================



//49. binarySearch Refactored Version
// Write a function called binarySearch  which accepts a  array and a value and returns the index at which the value exists. Otherwise, return -1. 
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)
//============================================================================================================================================================


//50. naiveSearch 
function naiveSearch(long, short){
  var count = 0;
  for(var i = 0; i < long.length; i++){
      for(var j = 0; j < short.length; j++){
         if(short[j] !== long[i+j]) break;
         if(j === short.length - 1) count++;
      }
  }
  return count;
}

naiveSearch("lorie loled", "lol")
//=============================================================================================================================================================



//51. UNOPTIMIZED VERSION OF BUBBLE SORT(Dont memorize)
// In bubble sort the end is structured first so we have to eliminate the last item on the array everytime as it is already sorted.
// Largest value bubble to top that is the end
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}
bubbleSort([8,1,2,3,4,5,6,7]);
//=============================================================================================================================================================



//52. ES2015 Bubblesort Version
// In bubble sort the end is structured first so we have to eliminate the last item on the array everytime as it is already sorted.
// Largest value bubble to top that is the end
// Here we have the new way of swaping with the swap function.
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
bubbleSort([8,1,2,3,4,5,6,7]);
//=============================================================================================================================================================



//53. Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}
bubbleSort([8,1,2,3,4,5,6,7]);
//=============================================================================================================================================================



//54.selectionSort_LEGACY
function selectionSort(arr){
  for(var i = 0; i < arr.length; i++){
      var lowest = i;
      for(var j = i+1; j < arr.length; j++){
          if(arr[j] < arr[lowest]){
              lowest = j;
          }
      }
      if(i !== lowest){
          //SWAP!
          var temp = arr[i];
          arr[i] = arr[lowest];
          arr[lowest] = temp;
      }
  }
  return arr;
}
selectionSort([0,2,34,22,10,19,17]);
//=============================================================================================================================================================



//55.selectionSort_ES2015_VERSION
// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
function selectionSort(arr) {
const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

for (let i = 0; i < arr.length; i++) {
  let lowest = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[lowest] > arr[j]) {
      lowest = j;
    }
  }
  if (i !== lowest) swap(arr, i, lowest);
}
return arr;
}
selectionSort([0,2,34,22,10,19,17]);
//=============================================================================================================================================================


//56.insertionSort
//Builds up the sort by gradually creating a larger left half which is always sorted
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,0])
//=============================================================================================================================================================



//56.mergeSort
// Merges two already sorted arrays
//It's a combination of two things - merging and sorting!
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
          results.push(arr1[i]);
          i++;
      } else {
          results.push(arr2[j])
          j++;
      }
  }
  while(i < arr1.length) {
      results.push(arr1[i])
      i++;
  }
  while(j < arr2.length) {
      results.push(arr2[j])
      j++;
  }
  return results;
}
// Recrusive Merge Sort
function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
mergeSort([10,24,76,73])
//=============================================================================================================================================================



//57.QuickSort
//It's a combination of two things - merging and sorting!
function pivot(arr, start = 0, end = arr.length - 1) {

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
}           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
//=============================================================================================================================================================


//58.Radixsort
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])
//=============================================================================================================================================================



//57. Class Basics
class Student {
  constructor(firstName, lastName, year){
      this.firstName = firstName;
      this.lastName = lastName;
      this.grade = year;
  }
}
let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);
//=============================================================================================================================================================



//58.Instance_method
class Student {
  constructor(firstName, lastName, year){
      this.firstName = firstName;
      this.lastName = lastName;
      this.grade = year;
      this.tardies = 0;
      this.scores = [];
  }
  fullName(){
      return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate(){
      this.tardies += 1;
      if(this.tardies >= 3) {
          return "YOU ARE EXPELLED!!!!"
      }
      return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score){
      this.scores.push(score);
      return this.scores
  }
  calculateAverage(){
      let sum = this.scores.reduce(function(a,b){return a+b;})
      return sum/this.scores.length;
  }  
}
let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);
//=============================================================================================================================================================


//59.SLL
// A data structure that contains a head, tail and length property.
// Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
// Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
// Arrays contain a built in index whereas Linked Lists do not
// The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues
class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
//-------Adding a new node to the end of the Linked List!
// This function should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
// Increment the length by one
// Return the linked list
  push(val){
      var newNode = new Node(val);
      if(!this.head){ 
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }
//------Removing a node from the end of the Linked List!
// If there are no nodes in the list, return undefined
// Loop through the list until you reach the tail
// Set the next property of the 2nd to last node to be null
// Set the tail to be the 2nd to last node
// Decrement the length of the list by 1
// Return the value of the node removed
  pop(){
      if(!this.head) return undefined;
      var current = this.head;
      var newTail = current;
      while(current.next){
          newTail = current;
          current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
          this.head = null;
          this.tail = null;
      }
      return current;
  }
// Removing a new node from the beginning of the Linked List!
// If there are no nodes, return undefined
// Store the current head property in a variable
// Set the head property to be the current head's next property
// Decrement the length by 1
// Return the value of the node removed
  shift(){
      if(!this.head) return undefined;
      var currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if(this.length === 0){
          this.tail = null;
      }
      return currentHead;
  }
//---------> Adding a new node to the beginning of the Linked List!
// This function should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the newly created node's next property to be the current head property on the list
// Set the head property on the list to be that newly created node
// Increment the length of the list by 1
// Return the linked list
  unshift(val){
      var newNode = new Node(val);
      if(!this.head) {
          this.head = newNode;
          this.tail = this.head;
      }else{
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
      return this;
  }
// Retrieving a node by it's position in the Linked List!
// This function should accept an index
// If the index is less than zero or greater than or equal to the length of the list, return null
// Loop through the list until you reach the index and return the node at that specific index
  get(index){
      if(index < 0 || index >= this.length) return null;
      var counter = 0;
      var current = this.head;
      while(counter !== index){
          current = current.next;
          counter++;
      }
      return current;
  }
//   Changing the value of a node based on it's position in the Linked List
//   This function should accept a value and an index
// Use your get function to find the specific node.
// If the node is not found, return false
// If the node is found, set the value of that node to be the value passed to the function and return true
  set(index, val){
      var foundNode = this.get(index);
      if(foundNode){
          foundNode.val = val;
          return true;
      }
      return false;
  }
// Adding a node to the Linked List at a specific position
// If the index is less than zero or greater than the length, return false
// If the index is the same as the length, push a new node to the end of the list
// If the index is 0, unshift a new node to the start of the list
// Otherwise, using the get method, access the node at the index - 1
// Set the next property on that node to be the new node
// Set the next property on the new node to be the previous next
// Increment the length
// Return true
  insert(index, val){
      if(index < 0 || index > this.length) return false;
      if(index === this.length) return !!this.push(val);
      if(index === 0) return !!this.unshift(val);
      var newNode = new Node(val);
      var prev = this.get(index - 1);
      var temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
  }
// Removing a node from the Linked List at a specific position
// If the index is less than zero or greater than the length, return undefined
// If the index is the same as the length-1, pop
// If the index is 0, shift
// Otherwise, using the get method, access the node at the index - 1
// Set the next property on that node to be the next of the next node
// Decrement the length
// Return the value of the node removed
  remove(index){
      if(index < 0 || index >= this.length) return undefined;
      if(index === 0) return this.shift();
      if(index === this.length - 1) return this.pop();
      var previousNode = this.get(index - 1);
      var removed = previousNode.next;
      previousNode.next = removed.next;
      this.length--;
      return removed;
  }
//   Reversing the Linked List in place!
//   Swap the head and tail
// Create a variable called next
// Create a variable called prev
// Create a variable called node and initialize it to the head property
// Loop through the list
// Set next to be the next property on whatever node is
// Set the next property on the node to be whatever prev is
// Set prev to be the value of the node variable
// Set the node variable to be the value of the next variable
// Once you have finished looping, return the list
  reverse(){
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for(var i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print(){
      var arr = [];
      var current = this.head
      while(current){
          arr.push(current.val)
          current = current.next
      }
      console.log(arr);
  }
}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)
//=============================================================================================================================================================



//60.DLL
class Node{
  constructor(val){
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}


class DoublyLinkedList {
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(this.length === 0){
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.length++;
      return this;
  } 
  pop(){
      if(!this.head) return undefined;
      var poppedNode = this.tail;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      } else {
          this.tail = poppedNode.prev;
          this.tail.next = null;
          poppedNode.prev = null;
      }
      this.length--;
      return poppedNode;
  }
  shift(){
      if(this.length === 0) return undefined;
      var oldHead = this.head;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      }else{
          this.head = oldHead.next;
          this.head.prev = null;
          oldHead.next = null;
      }
      this.length--;
      return oldHead;
  }
  unshift(val){
      var newNode = new Node(val);
      if(this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
      return this;
  }
  get(index){
      if(index < 0 || index >= this.length) return null;
      var count, current;
      if(index <= this.length/2){
          count = 0;
          current = this.head;
          while(count !== index){
              current = current.next;
              count++;
          }
      } else {
          count = this.length - 1;
          current = this.tail;
          while(count !== index){
              current = current.prev;
              count--;
          }
      }
      return current;
  }
  set(index, val){
      var foundNode = this.get(index);
      if(foundNode != null){
          foundNode.val = val;
          return true;
      }
      return false;
  }
  insert(index, val){
      if(index < 0 || index > this.length) return false;
      if(index === 0) return !!this.unshift(val);
      if(index === this.length) return !!this.push(val);
      var newNode = new Node(val);
      var beforeNode = this.get(index-1);
      var afterNode = beforeNode.next;
      beforeNode.next = newNode, newNode.prev = beforeNode;
      newNode.next = afterNode, afterNode.prev = newNode;
      this.length++;
      return true;
  }
  remove(index){
      if(index < 0 || index >= this.length) return null;
      if(index === 0) return this.shift();
      if(index === this.length -1 ) return this.pop();
      var removedNode = this.get(index);
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode; 
  }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
//=============================================================================================================================================================



//61.Stack
class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(!this.first){
          this.first = newNode;
          this.last = newNode;
      } else {
          var temp = this.first;
          this.first = newNode;
          this.first.next = temp;
      }
      return ++this.size;
  }
  pop(){
      if(!this.first) return null;
      var temp = this.first;
      if(this.first === this.last){
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }
}
//=============================================================================================================================================================



//62.Queue
class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  enqueue(val){
      var newNode = new Node(val);
      if(!this.first){
          this.first = newNode;
          this.last = newNode;
      } else {
          this.last.next = newNode;
          this.last = newNode;
      }
      return ++this.size;
  }

  dequeue(){
      if(!this.first) return null;

      var temp = this.first;
      if(this.first === this.last) {
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }
}
//=============================================================================================================================================================



//63.BST
class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      var current = this.root;
      while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
  }
  find(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      return current;
  }
  contains(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              return true;
          }
      }
      return false;
  }
}
//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
//=============================================================================================================================================================



//64.Tree Traversal
class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      var current = this.root;
      while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
  }
  find(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      return current;
  }
  contains(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              return true;
          }
      }
      return false;
  }
  BFS(){
      var node = this.root,
          data = [],
          queue = [];
      queue.push(node);

      while(queue.length){
         node = queue.shift();
         data.push(node.value);
         if(node.left) queue.push(node.left);
         if(node.right) queue.push(node.right);
      }
      return data;
  }
  DFSPreOrder(){
      var data = [];
      function traverse(node){
          data.push(node.value);
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
  }
  DFSPostOrder(){
      var data = [];
      function traverse(node){
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
          data.push(node.value);
      }
      traverse(this.root);
      return data;
  }
  DFSInOrder(){
      var data = [];
      function traverse(node){
          if(node.left) traverse(node.left);
          data.push(node.value);
          if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
  }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
//=============================================================================================================================================================


//65.Binary Heap
class PriorityQueue {
  constructor(){
      this.values = [];
  }
  enqueue(val, priority){
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element.priority >= parent.priority) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
      }
  }
  dequeue(){
      const min = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.sinkDown();
      }
      return min;
  }
  sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild,rightChild;
          let swap = null;

          if(leftChildIdx < length){
              leftChild = this.values[leftChildIdx];
              if(leftChild.priority < element.priority) {
                  swap = leftChildIdx;
              }
          }
          if(rightChildIdx < length){
              rightChild = this.values[rightChildIdx];
              if(
                  (swap === null && rightChild.priority < element.priority) || 
                  (swap !== null && rightChild.priority < leftChild.priority)
              ) {
                 swap = rightChildIdx;
              }
          }
          if(swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap;
      }
  }
}

class Node {
  constructor(val, priority){
      this.val = val;
      this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
//=============================================================================================================================================================


//66. Hash Table
class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }
  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")


ht.keys().forEach(function(key){
  console.log(ht.get(key));
})
//=============================================================================================================================================================


//67.Graphs
class Graph{
  constructor(){
      this.adjacencyList = {};
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1,v2){
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1,vertex2){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
          v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
          v => v !== vertex1
      );
  }
  removeVertex(vertex){
      while(this.adjacencyList[vertex].length){
          const adjacentVertex = this.adjacencyList[vertex].pop();
          this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex]
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
//=============================================================================================================================================================



//68.Graph Traversal
class Graph{
  constructor(){
      this.adjacencyList = {};
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1,v2){
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1,vertex2){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
          v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
          v => v !== vertex1
      );
  }
  removeVertex(vertex){
      while(this.adjacencyList[vertex].length){
          const adjacentVertex = this.adjacencyList[vertex].pop();
          this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex]
  }
  depthFirstRecursive(start){
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;

      (function dfs(vertex){
          if(!vertex) return null;
          visited[vertex] = true;
          result.push(vertex);
          adjacencyList[vertex].forEach(neighbor => {
              if(!visited[neighbor]){
                  return dfs(neighbor)
              }
          });
      })(start);

      return result;
  }
  depthFirstIterative(start){
      const stack = [start];
      const result = [];
      const visited = {};
      let currentVertex;

      visited[start] = true;
      while(stack.length){
          currentVertex = stack.pop();
          result.push(currentVertex);

          this.adjacencyList[currentVertex].forEach(neighbor => {
             if(!visited[neighbor]){
                 visited[neighbor] = true;
                 stack.push(neighbor)
             } 
          });
      }
      return result;
  }
  breadthFirst(start){
      const queue = [start];
      const result = [];
      const visited = {};
      let currentVertex;
      visited[start] = true;

      while(queue.length){
          currentVertex = queue.shift();
          result.push(currentVertex);
         

          this.adjacencyList[currentVertex].forEach(neighbor => {
              if(!visited[neighbor]){
                  visited[neighbor] = true;
                  queue.push(neighbor);
              }
          });
      }
      return result;
  }
}



let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]
//=============================================================================================================================================================


//69.Dijkstra 
class WeightedGraph {
  constructor() {
      this.adjacencyList = {};
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1,vertex2, weight){
      this.adjacencyList[vertex1].push({node:vertex2,weight});
      this.adjacencyList[vertex2].push({node:vertex1, weight});
  }
  Dijkstra(start, finish){
      const nodes = new PriorityQueue();
      const distances = {};
      const previous = {};
      let path = [] //to return at end
      let smallest;
      //build up initial state
      for(let vertex in this.adjacencyList){
          if(vertex === start){
              distances[vertex] = 0;
              nodes.enqueue(vertex, 0);
          } else {
              distances[vertex] = Infinity;
              nodes.enqueue(vertex, Infinity);
          }
          previous[vertex] = null;
      }
      // as long as there is something to visit
      while(nodes.values.length){
          smallest = nodes.dequeue().val;
          if(smallest === finish){
              //WE ARE DONE
              //BUILD UP PATH TO RETURN AT END
              while(previous[smallest]){
                  path.push(smallest);
                  smallest = previous[smallest];
              }
              break;
          } 
          if(smallest || distances[smallest] !== Infinity){
              for(let neighbor in this.adjacencyList[smallest]){
                  //find neighboring node
                  let nextNode = this.adjacencyList[smallest][neighbor];
                  //calculate new distance to neighboring node
                  let candidate = distances[smallest] + nextNode.weight;
                  let nextNeighbor = nextNode.node;
                  if(candidate < distances[nextNeighbor]){
                      //updating new smallest distance to neighbor
                      distances[nextNeighbor] = candidate;
                      //updating previous - How we got to neighbor
                      previous[nextNeighbor] = smallest;
                      //enqueue in priority queue with new priority
                      nodes.enqueue(nextNeighbor, candidate);
                  }
              }
          }
      }
      return path.concat(smallest).reverse();     
  }
}

class PriorityQueue {
  constructor(){
      this.values = [];
  }
  enqueue(val, priority){
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element.priority >= parent.priority) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
      }
  }
  dequeue(){
      const min = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.sinkDown();
      }
      return min;
  }
  sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild,rightChild;
          let swap = null;

          if(leftChildIdx < length){
              leftChild = this.values[leftChildIdx];
              if(leftChild.priority < element.priority) {
                  swap = leftChildIdx;
              }
          }
          if(rightChildIdx < length){
              rightChild = this.values[rightChildIdx];
              if(
                  (swap === null && rightChild.priority < element.priority) || 
                  (swap !== null && rightChild.priority < leftChild.priority)
              ) {
                 swap = rightChildIdx;
              }
          }
          if(swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap;
      }
  }
}

class Node {
  constructor(val, priority){
      this.val = val;
      this.priority = priority;
  }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");
//=============================================================================================================================================================


// 70. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
function twoSum (nums, target){
  for(var i=0;i<nums.length;i++){
         for(var j = i+1;j<nums.length;j++){
             if(nums[i]+nums[j] == target){
                 return [i,j]
             }
         }
     }
 }
 twoSum ([2,3,4], 6);
//=============================================================================================================================================================

// 71. Add numbers in array
var array = [1, 2, 3, 4, 5];
          
const sum = arr.reduce((a, b) => a + b)
//=============================================================================================================================================================

//72. Array in ascending order
var points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b)
//=============================================================================================================================================================


//73. Array in Descending order
var points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a)
//=============================================================================================================================================================


//74. Switch Case statement 
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
//=============================================================================================================================================================


//75.Leap year 

// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);



//Leap year in a given range
function leap_year_range(st_year, end_year) {
        var year_range = [];
        for (var i = st_year; i <= end_year; i++)
        {
             year_range.push(i);
        }
        var new_array = [];

  year_range.forEach(
   function(year)
    { 
       if (test_LeapYear(year)) 
       new_array.push(year);
    });

  return new_array;
     }

function test_LeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                return year;
        } else {
                return false;
        }
}

console.log(leap_year_range(2000,2012));

//=============================================================================================================================================================

//Prime Number in a range
// The number 1 is not aprime number by definition

const isPrime = num => { 
for(let i = 2; i < num; i++) 
    if(num % i === 0) return false; 
    return num > 1;
}


//=============================================================================================================================================================


function circleArea(radius) {
  let area = Math.PI * (radius * radius);
  console.log(area);
  console.log(Math.round(area*100)/100);
}

circleArea(5);



//=============================================================================================================================================================

//Fizz Buzz 

for (var i=1; i < 101; i++){
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}


//=============================================================================================================================================================

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}



//=============================================================================================================================================================
//vowels in string


const vowels = ["a", "e", "i", "o", "u"];

function countVowelsIterative(text) {
// Initialize counter
let counter = 0;
// Loop through text to test if each character is a vowel
for (let letter of text.toLowerCase()){
    if (vowels.includes(letter)) {
       counter++
    }
}
// Log formatted response to console
console.log(`The text contains ${counter} vowel(s)`)
// Return number of vowels
return counter;

}



function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
is_perfect(28); 




var i, j;
//outer loop
for(i=1; i <= 5; i++)
 {
 //inner loop
  for(j=1; j<=i; j++)
 {
   document.write('*');
  }
   document.write('<br/>');
 }



 var i, j;
  //outer loop
  for(i=5;i>=1;i--)
   {
   //inner loop
    for(j=1;j<=i;j++)
   {
     document.write('*');
    }
     document.write('<br/>');
   }

//Everything in the below link
   https://www.tutorialstonight.com/js/javascript-star-pattern.php 