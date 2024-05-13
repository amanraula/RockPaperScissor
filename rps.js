
let userscore=0;
let compscore=0;
let tie=0;
let n;

const choices=document.querySelectorAll("#c");
const comptxt=document.querySelector(".compchoice");
const choicetxt=document.querySelector(".res");


const w=document.querySelector(".users");
const l=document.querySelector(".comps");
const t=document.querySelector(".ties");

const compchoice=(userchoice)=>{
    //alert(userchoice);
    let arr=["rock","paper","scissor"];
    let n=Math.random();
    n=n*3;
    n=Math.floor(n);
    console.log(n);
    if(n==0){
        return arr[n];
    }
    else if(n==1){
        return arr[n];
    }
    else{
        return arr[n];
    }

}
const lose=()=>{
    compscore+=1;
    l.textContent=compscore;
    choicetxt.textContent="You Lose";
    choicetxt.style.backgroundColor = "red";
    choicetxt.style.color = "white";

}
const win=()=>{
    userscore+=1;
    w.textContent=userscore;
    choicetxt.textContent="You Win !";
    choicetxt.style.backgroundColor = "greenyellow";
    choicetxt.style.color = "Black";
}
const result=(userchoice,v)=>{
    if(userchoice==v){
        tie+=1;
       // alert("same");
       t.textContent=tie;
       choicetxt.textContent="Aww... It's a Tie";
       choicetxt.style.backgroundColor = "lightyellow";
       choicetxt.style.color = "Black";
       
    }
    else if(userchoice=="rock" && v=="paper"){
        lose();
        
    }
    else if(userchoice=="rock" && v=="scissor"){
        win();
    }
    else if(userchoice=="paper" && v=="rock"){
        win();
    }
    else if(userchoice=="paper" && v=="scissor"){
        lose();
    }
    else if(userchoice=="scissor" && v=="rock"){
        lose();
    }
    else if(userchoice=="scissor" && v=="paper"){
        win();
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        
        const userchoice=choice.getAttribute("class");
       // console.log(userchoice);
        let v=compchoice(userchoice);
       // console.log(v);
       comptxt.innerHTML="Computer chose: " + v.toUpperCase() + "<br>You chose: " + userchoice.toUpperCase();
       //console.log(userchoice,"--",v);
       result(userchoice,v);

    });
})
;