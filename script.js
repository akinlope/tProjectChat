// const projectName = "ToluPortfolio"
// alert("You are welcome to this page...")




// // let bCap = "this is the day the lord has made";
// // let newCap = bCap.replace(/lord/ig, "LORD");

// // let todayDate = new Date().toLocaleDateString();
// let today =new Date();
// var dd = String(today.getDay() - 1);
// var mm = String(today.getMonth() + 1);
// var yy = String(today.getFullYear());

// today = dd +"/" + mm +"/" + yy;
// console.log(today);


// // console.log("hello world...")

// String.prototype.replaceAt = function(index, character) {
//     return (
//       this.substr(0, index) + character + this.substr(index + character.length)
//     );
//   };
  
//   function titleCase(str) {
//     var newTitle = str.split(" ");
//     var updatedTitle = [];
//     for (var st in newTitle) {
//       updatedTitle[st] = newTitle[st]
//         .toLowerCase()
//         .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
//     }
//     return updatedTitle.join(" ");
//   }
//   console.log(titleCase("to god be the glory great things he has done"));


// function addTwoNum(arr, total){
//     // let newTotal = total;
//     for(i=0; i<arr.length; i++){
//         for(j=0; j<arr.length; j++){
//             if(i != j && (arr[i] + arr[j]) == total){
//                return `${arr[i]} + ${arr[j]} = ${total}`
//             }
//         }
//     }
//     return `no two number can be added to form ${total}`;
// }

// console.log(addTwoNum([2,2,3,4,5,6,7,8], 10));

// function checkProduct(input){
//   let res = [];
//   let totalProduct = 1;
//   for(let i=0; i<input.length; i++){
//     totalProduct = totalProduct * input[i];
//   }
//   for(let i=0;i<input.length; i++){
//     let timesSubtarcted = 0;
//     let divisor =input[i];
//     let dividend = totalProduct;
//     while(divisor <= dividend){
//       dividend = dividend - divisor;
//       timesSubtarcted++;
//     }
//     res.push(timesSubtarcted);
//   }
//   return res;
// }
// console.log(checkProduct([1,2,3,4,5]));

// evenNum = (arr) => {
//   let emptyArr =[];
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//       emptyArr.push(arr[i]);
//     }
//   }
//   return emptyArr;
// }
// console.log(evenNum([12,3,5,6,9,8,7]))

// for(let i=0; i<arr.length; i++){
//   let newArr = arr[i];
//   if(newArr.toString() % 2 == 0){
//     let emptyArr =[]
//      emptyArr = newArr.push();
//     return emptyArr;
//   }else{
//     return "not possible"
//   }
// }

// first i have 2 arguement 
// create a loop
// check throough the loop 
// evaluation of the program 

// getIndexToIns = (arr, num) =>{
//   var cout=0;
//   // let counter = counter++;
//   let  sortedArr =arr.sort();
//   console.log(sortedArr);
//   for(let i=0; i<sortedArr.length; i++){
//     if(num > sortedArr[i]){
//       cout++;
      
//     }
//   }
 
//   return cout;
// }
// console.log("it is "+getIndexToIns([6,5,4,3,2,1], 5));


//MUTATION 
mutation = (arr) => {
  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();
  for (let i=0; i<arr2.length; i++){
    if (arr1.indexOf(arr2[i]) < 0){
      return false
    }
  }
 return true
}
console.log(mutation(["floor", "for"]))



