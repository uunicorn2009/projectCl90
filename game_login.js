function addUser(){
  number1=document.getElementById("number1").value ;
    number2=document.getElementById("number2").value ;
actual_answer= parseInt(number1)*parseInt(number2);
question_number="<h4>"+number1+"X"+number2+"</h4>";
input_box="<br>Answer: <input tupe='text' id='input_check_bok'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row =question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";

  player_1_name=document.getElementById("player1_name_input").value ;
  player_2_name=document.getElementById("player2_name_input").value ;
  localStorage.setItem("player_1_name",player_1_name);
  localStorage.setItem("player_2_name",player_2_name);
  window.location="game_page.html";
 

}