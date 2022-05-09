var answer1 = "";
var answer2 = "";
var answer3 = "";
var total = "";
    
    var name = window.prompt("What is your name?");
	


	document.getElementById("user-name").innerHTML = "Hello " + name;
    document.getElementById("fbButton").innerHTML = "Your Score";
    document.getElementById("twButton").innerHTML = "Your Score";
    //document.getElementById("twButton").innerHTML = "Your Score";

    function oneItem(checkbox) {
   		var checkboxes = document.getElementsByName("check");
    		checkboxes.forEach((item) => {
        	if (item !== checkbox){
            	item.checked = false;
				item.setAttribute("disabled", "disabled");
            }else{ 
                answer1 = item.value;
				
				//$(".selected").removeClass("selected");
				checkAnswer(1);
            }
    	})
	}
    
	function oneAnimal(input) {
		console.log(input);
		var selection = document.querySelectorAll(".btn-choice");
			selection.forEach((animal) => {
				if (animal !== input) {
					animal.checked = false;
					animal.setAttribute("disabled", "disabled");
					animal.setAttribute ("class", "btn-choice-non-select");
				} else {
					answer2 = animal.value;
					animal.setAttribute ("class", "btn-choice selected");
					checkAnswer(2);
				}
			})
	}
	
	function oneState (select) {
		var option = document.querySelectorAll(".btn");
			option.forEach((state) => {
				if (state !== select) {
					state.checked = false;
					state.setAttribute ("disabled", "disabled");
				}else {
					answer3 = state.value;
					state.setAttribute ("class", "btn selected");
					checkAnswer(3);
				}
			})
	}
		
	//}
    /*function getAnswerValue(btnId, answerNum, e) {
        var id = e.target.id;
		switch(answerNum) {
            case 2: {
               // answer2 = document.getElementById(id).value;
				//document.getElementById(id).classList.add("selected");
				//console.log(id);
				//document.getElementById(id).setAttribute("disabled", "disabled");
				//checkAnswer(2);
                break;	
            }
            case 3: {
                answer3 = document.getElementById(id).value;
				document.getElementById(id).classList.add("selected");
				checkAnswer(3);
                break;
            }
            default: {
                break;
            }
            
        }
    }*/
     
    function result() {
		let score = total.toString();
        if (total == 3){   
                    document.getElementById("msg1").style.display  = "block";
                    document.getElementById("img1").style.display  = "flex";
					document.getElementById("msgPre").style.display = "flex"
					document.getElementById("fbButton").innerHTML = score;
					document.getElementById("twButton").innerHTML = score;
				
        }
        else if(total == 4){
                    document.getElementById("msg2").style.display  = "block";
                    document.getElementById("img2").style.display  = "flex";
					
                }
        else if(total == 5){
                    document.getElementById("msg3").style.display  = "block";
                    document.getElementById("img3").style.display  = "flex";
                }
        else if(total == 6){
                    document.getElementById("msg4").style.display  = "block";
                    document.getElementById("img4").style.display  = "flex";
                }
        else if(total == 7){
                    document.getElementById("msg5").style.display  = "block";
                    document.getElementById("img5").style.display  = "flex";
                }
        else if(total == 8){
                    document.getElementById("msg6").style.display  = "block";
                    document.getElementById("img6").style.display  = "flex";
                }
        else if(total == 9){
                    document.getElementById("msg7").style.display  = "block";
                    document.getElementById("img7").style.display  = "flex";
                }
    }

	
	function checkAnswer (numOfAnswer) {
		switch(numOfAnswer){
		case 1: {
		if (answer2 !== "" && answer3 !== "") {
			total = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);
			console.log(total);
			result()
		}
		break;
		}
		case 2: {
		if (answer1 !== "" && answer3 !== "") {
			total = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);
			console.log(total);
			result()
		}
		break;
		}
		default: {
		if (answer1 !== "" && answer2 !== "") {
			total = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);
			console.log(total);
			result()
		}
		break;
		}
		}
	}
	
	const display = () => {
		let show = document.querySelector(".msgPre").style.display = "flex";
		console.log(show);
	}
	

