var answer1 = "";
var answer2 = "";
var answer3 = "";
var total = "";
    
    // var name = window.prompt("What is your name?");
	
	// document.getElementById("user-name").innerHTML = "Hello " + name;
    document.getElementById("fbButton").innerHTML = " Your Score";
    document.getElementById("twButton").innerHTML = " Your Score";

	$('#reload').on('click', function(){
		location.reload();
	})

	$('.form-check-input').on('click',function(){
		oneItem(this);
	})
    const oneItem = (item) => {
		var checkbox = document.getElementsByName(item.name);
		for (var i = 0, c; c = checkbox[i]; i++) {
			c.disabled = (item.checked || c === item)
			// c.disabled = !(!item.checked || c === item)
		}
		item.parentElement.parentElement.classList.add("h-checked")
		answer1 = item.value
		console.log(answer1)
		calcTotal()
	}
    
	const oneAnimal = (input) => {
		// console.log(input);
		var selection = document.querySelectorAll(".btn-choice");
			selection.forEach((animal) => {
				if (animal !== input) {
					animal.checked = false;
					animal.setAttribute("disabled", "disabled");
					animal.setAttribute ("class", "btn-choice-non-select");
				} else {
					answer2 = animal.value;
					animal.setAttribute ("class", "btn-choice selected");
					calcTotal();
				}
			})
	}
	
	const oneState = (select) => {
		var option = document.querySelectorAll(".h-option");
			option.forEach((state) => {
				if (state !== select) {
					state.checked = false;
					state.setAttribute ("disabled", "disabled");
				}else {
					answer3 = state.value;
					state.classList.add ("selected");
					calcTotal();
				}
			})
	}
     
    const result = () => {
		// console.log(total)
		if (!(isNaN(total))) {
			document.getElementById("fbButton").innerHTML = " Your score: " + total;
			document.getElementById("twButton").innerHTML = " Your score: " + total;
		}
        if (total == 3){   
			document.getElementById("msg1").style.display = "flex"
        }
        else if(total == 4){
			document.getElementById("msg2").style.display = "flex"
        }
        else if(total == 5){
			document.getElementById("msg3").style.display  = "flex";
        }
        else if(total == 6){
			document.getElementById("msg4").style.display  = "flex";
        }
        else if(total == 7){
			document.getElementById("msg5").style.display  = "flex";
        }
        else if(total == 8){
			document.getElementById("msg6").style.display  = "flex";
        }
        else if(total == 9){
			document.getElementById("msg7").style.display  = "flex";
        }
    }

	const calcTotal = () => {
		total = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);
		result()
	}

	

