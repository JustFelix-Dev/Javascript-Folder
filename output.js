// var myAge = 14;
// myAge += 2;
// alert(myAge);

// var myAge= 15;
// console.log(myAge);
// console.log(document.getElementById('gate').type

// function myAge() {
//     var myAge= document.getElementById("age").value
    // alert(`Your Age is ${res}`)
    // alert(Number(myAge)+2);
    // alert(parseInt(myAge)+2);
    // alert(parseFloat(myAge)+2);
// }
// function myAge(){
//   res = document.getElementById('age').value;
//   document.getElementById('demo').innerText = "My age is " + res
  
// }
function myScore() {
   var res = score.value
        if(res>=0 && res<=39){
            ans.innerText ="Grade - F";
            ans.style.color = "red";
        }else if(res>39 && res<=44){
            ans.innerText ="Grade - E";
            ans.style.color = "red";
        }else if(res>=45 && res<=49){
            ans.innerText ="Grade - D";
            ans.style.color = "brown";
        }else if(res>=50 && res<=59){
            ans.innerText ="Grade - C"
            ans.style.color = "yellow";
        }else if (res>=60 && res<=69){
            ans.innerText ="Grade - B";
            ans.style.color = "blue";
        }else if(res>=70 && res<=100){
            ans.innerText ="Grade - A";
            ans.style.color = "green";
        }else if (res==101 || res==-3 || res=="KUNLE"){
            ans.innerText ="INVALID";
            ans.style.color = "black";
        }else if (res==""){
            ans.innerText ="Please enter a valid score";
            ans.style.color = "wine";
        }
        else {
            ans.innerText ="This Score doesn't exists!"
            ans.style.color = "orangered";
        }

  
}
