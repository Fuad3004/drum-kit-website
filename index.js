
// document.querySelector("button").addEventListener("click", handleClick); 


// // function calling we use a paranthesis like handleClick() ....here if we use () then this addEventListener will work from the beggining because our js script is added in the last of the html file.

// // here we are not calling function. we pass this function as an input

// function handleClick(){
// alert("I'm clicked")

// }

// annonymous function

// document.querySelector("button").addEventListener("click", function(){
//     alert("I'm clicked")
    
//     }); 
 


// applying loops for all button


var numberOfButtons= document.querySelectorAll(".drum").length;


for (var i=0; i<numberOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 

      var buttonInnerHTML = this.innerHTML; 
      makeSound(buttonInnerHTML); 
      buttonAnimation(buttonInnerHTML);      
                
       
    
    }); 

}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch(key){
        case "w":
                var tom1= new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2= new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "s":
                var tom3= new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
                
            case "d":
                var tom4= new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare= new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var kick= new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            
            case "l":
                var crash= new Audio("sounds/crash.mp3");
                crash.play();
                break;

            default:
                console.log(this.innerHTML);
    }
}


function buttonAnimation(currentKey){

    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}