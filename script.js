var istatus = document.querySelector("h5");
var check = 0;
var btn = document.querySelector("#add");
btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    btn.innerHTML = "RemoveFriend";
    console.log("yeeeeyyy");
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "AddFriend";
    check = 0;
  }
});

//var removeFriend=document.querySelector("#remove")
//removeFriend.addEventListener("click",function(){
//  istatus.innerHTML="Stranger"
//istatus.style.color="red"
//})
