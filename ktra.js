//b1
// let str = "data"
// function reverseString(str){
//     let newString = " ";
//     for (let i = str.length - 1; i>=0; i--){
//         newString = newString + str[i]
//     }
//     console.log(newString); 
// }
//  reverseString ('data');

//b2
// 
//        let string = "my name is huyen"
// function titleCase (string){
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }  
// console.log(titleCase("My name is Huyen"));

//b3.
// function unique(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//       if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//       }
//     }
//     console.log(newArr); 
//   }
//   console.log(unique([1,2,3,3,4,5,4,4,4,5,5]))

//b4.
let mindX = [
    {
        id : 1,
        age: 22,
        name: "Huyen" ,
        income: 1000,
        position: "sv" ,
    },
    {
        id : 2,
        age: 23,
        name: "Trang",
        income: 1200,
        position: "gv",
    },
    {
        id : 3,
        age: 22,
        name: "Ly",
        income: 2000 ,
        position: "qa",
    }
];
let isLoop=true;
while(isLoop){
let input = prompt("Enter your function : C/R/U/D/E");
if (input === "C") {
  let name =  prompt("Enter name");
  let age = prompt ("Enter age");
  let income = prompt ("Enter income");
  let position = prompt ("Enter position");
  let id  = mindX.length+1;
  let newObj = {
      id: id,
      name: name,
      age: age,
      income: income,
      position: position
  }
  mindX.push(newObj);
}
else if (input === "D") {
    let idInput = Number(prompt("Enter id: "));
    if(idInput < 0 && idInput >= mindX.length){
        alert("Not found");
    }
    else{
        mindX.splice(idInput,1);

        }
}
else if (input==="R"){
    for(let i=0; i<mindX.length; i++){
    alert(`${mindX[i].id}---${mindX[i].name}---${mindX[i].age}---${mindX[i].income}---${mindX[i].position}`);
    }
}
else if (input === "E"){
        alert("Exit the program");
    isLoop = false;
  }else {
    alert("C/R/U/D/E ?");
}
}
 
