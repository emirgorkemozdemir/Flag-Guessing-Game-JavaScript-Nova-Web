let question_flags = ["Denmark","France","Italy","Turkey"];
let choice_flags = ["Denmark","France","Italy","Turkey"];
var point = 0;

const flag_image = document.getElementById("flag");
const c1_button = document.getElementById("choice1");
const c2_button = document.getElementById("choice2");
const c3_button = document.getElementById("choice3");
const my_point = document.getElementById("mypoint");

function display_point()
{
  my_point.innerHTML="Score : "+point;
}

const next_button = document.getElementById("next");

function next_question()
{
    // Aşağıdaki seçtiğim direkt doğru cevap
    let selected_question_index =Math.trunc(Math.random()*question_flags.length);
    
    let choice_2_index = Math.trunc(Math.random()*choice_flags.length);
    let choice_3_index = Math.trunc(Math.random()*choice_flags.length);
    
    while(true)
    {
       // Soru olarak seçilen ülkeyle, şıklardan gelen 2. ve 3. ülke
       // aynı olmamalı
       if(question_flags[selected_question_index]==choice_flags[choice_2_index])
       {
         // Aynı gelen şıkkı değiştiriyorum
         choice_2_index = Math.trunc(Math.random()*choice_flags.length);
       }
       else if(question_flags[selected_question_index]==choice_flags[choice_3_index])
       {
         choice_3_index = Math.trunc(Math.random()*choice_flags.length);
       }
       else if(choice_flags[choice_2_index]==choice_flags[choice_3_index])
       {
         choice_3_index = Math.trunc(Math.random()*choice_flags.length);
       }
       else
       {
           break;
       }
    }

    let right_answer = question_flags[selected_question_index];
    let c2 = choice_flags[choice_2_index];
    let c3 = choice_flags[choice_3_index];
    
    flag_image.src = "/images/"+right_answer+".png";

    // Şıkların yerini değiştirmek için, şıkları shuffle yani
    // karıştırma yapmam lazım.

    let choices = [right_answer,c2,c3];
    let shuffled_choices = [];

    for(i=0;i<3;i++)
    {
        let random_choice = Math.trunc(Math.random()*choices.length);
        shuffled_choices.push(choices[random_choice]);
        choices.splice(random_choice,1);
    }

    c1_button.innerHTML=shuffled_choices[0];
    c2_button.innerHTML=shuffled_choices[1];
    c3_button.innerHTML=shuffled_choices[2];

}

function select_c1()
{
let choice_text = c1_button.innerHTML;
let img_link = flag_image.src;

let choice_link = "http://127.0.0.1:5500/images/"+choice_text+".png";

if(choice_link==img_link)
{
window.alert("Correct answer");
next_button.style.display="block";
c1_button.style.display="none";
c2_button.style.display="none";
c3_button.style.display="none";
point++;
display_point();
}
else
{
window.alert("Wrong answer");
point--;
c1_button.style.display="none";
display_point();
}

}

function select_c2()
{
let choice_text = c2_button.innerHTML;
let img_link = flag_image.src;

let choice_link = "http://127.0.0.1:5500/images/"+choice_text+".png";

if(choice_link==img_link)
{
window.alert("Correct answer");
next_button.style.display="block";
c1_button.style.display="none";
c2_button.style.display="none";
c3_button.style.display="none";
point++;
display_point();
}
else
{
window.alert("Wrong answer");
point--;
c2_button.style.display="none";
display_point();
}

}


function select_c3()
{
let choice_text = c3_button.innerHTML;
let img_link = flag_image.src;

let choice_link = "http://127.0.0.1:5500/images/"+choice_text+".png";

if(choice_link==img_link)
{
window.alert("Correct answer");
next_button.style.display="block";
c1_button.style.display="none";
c2_button.style.display="none";
c3_button.style.display="none";
point++;
display_point();
}
else
{
window.alert("Wrong answer");
point--;
c3_button.style.display="none";
display_point();
}

}

function check_game_end()
{
  if(question_flags.length==0)
  {
       // oyun bitecek
  }
  else
  {
    next_button.style.display="none";
    c1_button.style.display="block";
    c2_button.style.display="block";
    c3_button.style.display="block";
    next_question();
  }
}

c1_button.addEventListener("click",select_c1);
c2_button.addEventListener("click",select_c2);
c3_button.addEventListener("click",select_c3);
next_button.addEventListener("click",check_game_end);
next_question();