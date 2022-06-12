

//these are the global variables 
var upPressed = false;//these are the global variables 
var downPressed = false;//these are the global variables 
var leftPressed = false;//these are the global variables 
var rightPressed = false;//these are the global variables 
var lastPressed = false;//these are the global variables 
var playing = false;//these are the global variables 
var lives;//these are the global variables 
var playerScore;//these are the global variables 
var body;//these are the global variables 
var everytime;//these are the global variables 
var timeout;//these are the global variables 
var invulnerable = false;//these are the global variables 

// this code controls the frequency the bombs.
//Runs when start buttton is clicked
function startGame() { //this code makes the start button vanish.
	
	//this line of code written below adjusts the bomb frequency
	everytime = setInterval(bombFrequence, 500);//this code adjusts the bomb frequency

	   //the line of code writeen below declares the boolean variable 
	   playing = true; //boolean variable decleared

	   //the line of code written below checks the conditions
	if (playing == true) {//checking the conditions
		// this codehides the start button, resets score and resets player lives to 3 

        //the line of code written below selects the element by id
		var start = document.getElementById('start');  //this line of code selects the element by id
       //the line of code written below gives the styling to the start 
		start.style.display = 'none';//this line of code gives styling to the start
		//the line of code written below declares the variable
		lives = 3;//declaring variable
		playerScore = 0;//the line of code declares the variable

	
	
		//this code starts the bottom collision line movement
	mycollisonFunction();  //this line of code calls the 
		store(); //this line of code calls ghd 
	}
}

//this fuction of code is for keyup
function keyup(event) { //this is the starting of the keup function
	var player = document.getElementById('player'); //this declares the variable for the player

	if (playing == true) {//this line of code is starting of the if statement.
		if (event.keyCode == 37) {
			leftPressed = false;
			lastPressed = 'left';
		}
		if (event.keyCode == 39) {
			rightPressed = false;
			lastPressed = 'right';
		}
		if (event.keyCode == 38) {
			upPressed = false;
			lastPressed = 'up';
		}
		if (event.keyCode == 40) {
			downPressed = false;
			lastPressed = 'down';
		}
	}
	player.className = 'character stand ' + lastPressed;
}

//THIS IS  function of code is for FOR BOMB FREQUENCY
function bombFrequence() { //THIS IS the starting of the function

//BOMB FREQUENCY ARRAY
	    var bombbomb = [];//BOMB FREQUENCY ARRAY
		//BOMB FREQUENCY ARRAY
		bombbomb[0] = '200';//BOMB FREQUENCY ARRAY
		//BOMB FREQUENCY ARRAY
		bombbomb[1] = '600';//BOMB FREQUENCY ARRAY
		//BOMB FREQUENCY ARRAY
		bombbomb[2] = '1000';//BOMB FREQUENCY ARRAY
		//BOMB FREQUENCY ARRAY
		bombbomb[3] = '1400';//BOMB FREQUENCY ARRAY
		//BOMB FREQUENCY ARRAY
		bombbomb[4] = '2000';//BOMB FREQUENCY ARRAY
		//BOMB FREQUENCY ARRAY
		bombbomb[5] = '2200';//BOMB FREQUENCY ARRAY
		//BOMB FREQUENCY ARRAY
		bombbomb[6] = '2400';//BOMB FREQUENCY ARRAY

	 //THIS LINE OF CODE BELOW DECLEARS THE VARIABLE
		var ttt = Math.ceil(Math.random() * 500); //THIS LINE OF CODE DECLEARS THE VARIABLE
        //THIS LINE OF CODE IS FOR TIME OUT
		setTimeout(bomb, bombbomb[ttt]); //THIS LINE OF CODE IS FOR TIME OUT
}









 //THIS IS THE STARTING OF MOVE FUNCTION,THIS MAKES PLAYER MOVE	
 function move() {   
	if (playing == true) {//THIS IS A IF STATEMENT
		var player = document.getElementById('player');
		var positionLeft = player.offsetLeft;//THIS VARIABLE IS TO FOR LEFT POSITION
		var positionTop = player.offsetTop;//THIS VARIABLE IS FOR TOP POSITION

		if (downPressed) {
			if (downPressed && !invulnerable) {
			var newTop = positionTop + 1;

			var element = document.elementFromPoint(player.offsetLeft, newTop + 32);
			if (element.classList.contains('sky') == false) {
				player.style.top = newTop + 'px';
			}

			//if player overlaps with the explosion on the grass then the player takes damage and loses a life
			if (element.classList.contains('explosion') == true) {
				opop();
                 //after the player is hit with the bom the player is set to be invulanerable which stops them from being hit again and again
                 // after being  when the invulnerable is true the position of the player is pushed back away from the bomb explosion it stops them from overlapping 				invulnerable = true;
				setTimeout(function() { invulnerable = false;}, 1500);
			}

			if (leftPressed == false) {
				if (rightPressed == false) {
					player.className = 'character walk down';
				}
			}
		}
	}
		if (upPressed) {
			if (upPressed && !invulnerable) {
			var newTop = positionTop - 1;

			var element = document.elementFromPoint(player.offsetLeft, newTop);
			if (element.classList.contains('sky') == false) {
				player.style.top = newTop + 'px';
			}
			if (element.classList.contains('explosion') == true) {
				opop();
				//when invulnerable is true the players position is pushed back away from the explosion by a pixel which stops them from overlapping
				invulnerable = true;
				setTimeout(function() { invulnerable = false;}, 1500);
			}

			if (leftPressed == false) {
				if (rightPressed == false) {
					player.className = 'character walk up';
				}
			}
		}
	}
		if (leftPressed) {
			if (leftPressed && !invulnerable) {
				var newLeft = positionLeft - 1;

			var element = document.elementFromPoint(newLeft, player.offsetTop);
			if (element.classList.contains('sky') == false) {
				player.style.left = newLeft + 'px';
			}

			if (element.classList.contains('explosion') == true) {
				opo();
				
				setTimeout(function() { invulnerable = false;}, 1500);
			}

			player.className = 'character walk left';
		}
	}

		if (rightPressed) {
			if (rightPressed && !invulnerable) {
			var newLeft = positionLeft + 1;

			var element = document.elementFromPoint(newLeft + 32, player.offsetTop);
			if (element.classList.contains('sky') == false) {
				player.style.left = newLeft + 'px';
			}

			if (element.classList.contains('explosion') == true) {
				opop();
				
				invulnerable = true;
				setTimeout(function() { invulnerable = false;}, 1500);
			}
			player.className = 'character walk right';
		}
	}
}
}


function keydown(event) {
	if (playing == true) {
		if (event.keyCode == 37) {
			leftPressed = true;
		}
		if (event.keyCode == 39) {
			rightPressed = true;
		}
		if (event.keyCode == 38) {
			upPressed = true;
		}
		if (event.keyCode == 40) {
			downPressed = true;
		}
	}
}




























//this function of code creates a new HTML element which is then turned into a bomb 
     function nayab() {//moreBomb function creates a new HTML element which is then turned into a bomb 
	var naya = document.createElement('div');
	//the line of code written below appends a newbomb element
	body.appendChild(naya);//this line of code appends a newbomb element

	//this line of code gives class list
	naya.classList.add('bomb');//this line of code gives class list
	//the line of code  written below returns the value of newbomb element
	return naya;//this line of code returns the value of newbomb element
}

// command for the bombs
function bomb() {//this is the starting of the bomb function
	//calls to create a new bomb
	var bomb = nayab();

	//used to set the random X position at the top of the screen of the bombs when they spawn
	bomb.style.left = Math.ceil(Math.random() * window.innerWidth) + "px"

	


	//array to set bomb speed
	var bombSpeed = [];	//array to set bomb speed
	//array to set bomb speed
	bombSpeed[0] = '40';//array to set bomb speed
	//array to set bomb speed
	bombSpeed[1] = '80';//array to set bomb speed
    //array to set bomb speed
	bombSpeed[2] = '100';//array to set bomb speed
    //array to set bomb speed
	bombSpeed[3] = '150';//array to set bomb speed
     //array to set bomb speed
	bombSpeed[4] = '200';//array to set bomb speed
    //array to set bomb speed
	bombSpeed[5] = '250';//array to set bomb speed
    //array to set bomb speed
	bombSpeed[6] = '300';//array to set bomb speed

	var speed = Math.ceil(Math.random() * 6);


	//the line of code given below detects the collia=sion 
	var bombTimer = setInterval(function () {//this line of code declares the variable
		//Sets to false to reset collision at the beginning of the objects creation/ game start
		var collision = false;//checking the conditions
		//this line of code written below declares the variable
		var grassCollision = false;//this line of code declares the variable


		//bomb movement down the page
		if (playing == true) {//this line of code checks the conditions
			var toptop = bomb.offsetTop;//this line of code declares the variable
			bomb.style.top = toptop + 10 + 'px';//this line of code gives the styling to the variable
		}
		//the line of ocde given finds the bomb
		var toptop = bomb.offsetTop;//this line of code declares the variable
		//this line of code declares the variable
		var newTop = toptop + 0;//this line of code declares the variable
		var element = document.elementFromPoint(bomb.offsetLeft, newTop + 32);

		
		//Bomb colliding with the player
		if (element.classList.contains('solid') == true) {
			bomb.style.top = newTop + 'px';//this line of code gives the styling to the variable
			collision = true;//this line of code checks the condition of the variable
			clearInterval(bombTimer);//this line of code clears the interval
		}

		//Bombs collide with the moving collision line then they explode (allows for multiple explosion points on the grass)
		if (element.classList.contains('grassCollisionLine') == true) {
			bomb.style.top = newTop + 'px';//this line of code gives the style to the variable
			grassCollision = true;//thus line of code checks the condition
			clearInterval(bombTimer);//this line of code is for interval
		}

		//Bombs collide with bottom line then explode  (fail safe for elements being off screen)
		if (element.classList.contains('bottomCollisionLine') == true) {
			grassCollision = true;//this line of code checks the condition
			//this line of code is for interval
			clearInterval(bombTimer);//this line of code is for interval
		}

		//when hitting the grass the bombs explode, explosion replaces bomb and then the bomb element is removed entirely
		if (grassCollision == true ) {
			//animation change
			bomb.classList.add('explosion');
			bomb.classList.remove('bomb');

			setTimeout(function () {
				bomb.classList.remove('explosion');
				body.removeChild(bomb);
			}, 1200); //amount of time the explosion remains on screen. Can make slower to test collision with explosion

			//score counter 
			//when a bomb explodes the player score goes up by 1
			playerScore++;

			//console.log(playerScore); // <-- Used for testing score 
			var score = document.getElementById('scoreValue');

			//used to add the updated score value to the html
			score.innerHTML = playerScore;

			//console.log(playerScore); <-- Used for testing that the code increments before adding to display
		}

		//when a bomb hits the player explosion 2 is added and bomb is removed 
		if (collision == true) {
			//animation change
			bomb.classList.add('explosion2');
			bomb.classList.remove('bomb');
			setTimeout(function () {
				bomb.classList.remove('explosion2');
				body.removeChild(bomb);
			}, 800); //animation timer for the explosion that hits the player

			//calls hit to effect player character
			hitFunction();
		}
	}, bombSpeed[speed]); //Call to Array that randomises the speed the bombs fall at

}

//Runs when the player is hit, called in the bomb code
function hitFunction() {
	//hit animation
	player.classList.add('hit');

	//life counter
	//removes a players life icon when lives are decreased
	if (lives == 3) {
		var life1 = document.getElementById('life1');
		life1.style.display = "none";
	} else if (lives == 2) {
		var life2 = document.getElementById('life2');
		life2.style.display = "none";
	} else if (lives == 1) {
		var life3 = document.getElementById('life3');
		life3.style.display = "none";
		overandout();
	}
	//after hit the life counter decrements, this effects the if and else ifs above
	lives--;
	console.log(lives); //<--Used for testing
}


//thus function of code class the codes form above and below for diffrent actions
function overandout() {
	//dead animation
	player.classList.add('dead');

	//cancels timers to stop the game 
	stop();//this line of code calls the stop function

	//text, buttons and score form for end game screen
	overandoutText();//this line of code calls the overandouttext function
	//this line of code written below calls the submitscore function
	submitScore();//this line of code calls the submitscore function
	//this line of code calls the submitscore function
	scoreboardButton();//this line of code calls the scoreboardbutton function
	//this line of code class the resetgame function
	resetGame();//this line of code calls the reset function

}

//this function of code is for stop 
function stop() {//this is the starting of the function
	clearInterval(timeout);//this line of code is for interval
	clearInterval(everytime);//this line code code is for
}

// this function of code shows gameover text after game ends
function overandoutText() {//this is the starting of the function
	var overandoutText = document.getElementById('gameover');//this line of code gets the element byb id name 
	overandoutText.style.display = 'block';//this line of code gives the styling and sets the display to block
}



// this function of code shows reset button after a delay 
function resetGame() {//this is the startinhg of the resetgame function
	setInterval(function() {//this line of code is for setinterval function
		var reset = document.getElementById('reset');//this line of codee gets the element by id name
		//this line of  written below code gives the styling to the reset element
		reset.style.display = 'block';//this line of code gives the styling to the reset element
	}, 1500);
}


//this function of code is to reset the window
function resetClicked() {//the line of code written  resets the the window when the button is clicked
    
    
    
    //the line of code written below reloads the window
	window.location.reload();//this reloads the window
}

//shows view scoreboard button after a time delay (syncs with score board button/form) 
function scoreboardButton() {//the is the starting of the function
	setInterval(function() {//this function is to set the interval
		//the line of code  written below gets the element by id name
		scoreBoardButton.style.display = 'block';//this line of code gives the styling to the element scoreboardbutton and gives the value of display to none
		var scoreBoardButton = document.getElementById('scoreBoardButton');//this line of code gets the element by id name
		scoreBoardButton.style.display = 'block';//this line of code gives the styling to the element scoreboardbutton and gives the value of display to none
	}, 1500);
}

//this function of code is for scoreclicked 
function scoreClicked() {//this is the starting of the function
	var scoreboard = document.getElementById('scoreBoard'); //this line of code gets the element by id name
	scoreboard.style.display = 'block';

	var goBackButton = document.getElementById('goBackButton');//this line of code calls the element by the id name
	goBackButton.style.display = 'block';//the line of code gives the styling to the element
}

//when the scoreboard go back button is clicked the scoreboard and go back button is hidden so the other buttons can be used by the player
function goBackClicked() {
	var scoreboard = document.getElementById('scoreBoard');//thie line of code calls the elemenet by id name
	scoreboard.style.display = 'none';//this line of code give the styling to the element and sets the display to none

	var goBackButton = document.getElementById('goBackButton');
	
	goBackButton.style.display = 'none';//this line of code gives the styling to the element and sets the display to none
}	

//this function of code is for submit score
function submitScore() {//this is the starting of the subbmit score with the name submitscore
	setInterval(function () {//this line of code sets the interval
		var overandoutText = document.getElementById('gameover');//this line of code gets the elememt with the id and stores it in variable
		overandoutText.style.display = 'none';//this line of code gives the styling to the element

		var scoreForm = document.getElementById('submitScore');//this line of code gets the element by the id name and stores it in the variable
		//this line of code written below gives the styling to the varibale na,ed scoreform
		scoreForm.style.opacity = '1';//this line of code gives the styling to the variable
	}, 1500);
}

//this function of code is for collison array
function positionFunction() {//this is the starting of the function
	setInterval(function () {//this line of code sets the interval

		var popp = [];
		//array for collision 
		popp[0] = '80';//collision arry
		//array for collision 
		popp[1] = '82'; //array for collision 
		//array for collision 
		popp[2] = '84';//array for collision 
		//array for collision 

		popp[3] = '86';//array for collision 
		//array for collision 
		popp[4] = '88';//array for collision 
		//array for collision 
		popp[5] = '90';//array for collision 
		//array for collision 
		popp[6] = '92';//array for collision 
		//array for collision 
		popp[7] = '94';//array for collision 
		popp[8] = '96';//array for collision 
		//array for collision 
		popp[9] = '98';//array for collision 

		//the line of code written below declares the variable 
		var popp = Math.ceil(Math.random() * 10);//this line of code declares the variable
		//the line of code written below declares the variable
		var effect = document.getElementsByClassName('grassCollisionLine')[0];//this line of code declares the variable
		//the line of code writeen below gives the styling to the variable
		effect.style.top = popp[popp] + 'vh';//this line of code gives the styling to the element and sets the position to top

	}, 75);	
}




//this is line of code below is the starting of the myLoasFunction
function myLoadFunction() { //this is line of code is the starting of the myLoasFunction
	//this line of code below gives the add event listner and calls the keydown function after the keydown button is pressed
		document.addEventListener('keydown', keydown);//this line of code gives the add event listner and calls the keydown function after the keydown button is pressed
		//this line of code below gives the add event listner and calls the keydown function after the keyup button is pressed
		document.addEventListener('keyup', keyup);//this line of code gives the add event listner and calls the keydown function after the keyup button is pressed
	
		//this line of code below gives the add event listner and calls the start function after the mouse button is clicked
		start.addEventListener('click', startGame);//this line of code gives the add event listner and calls the start function after the mouse button is clicked
	
		//this line of code below gives the add event listner and calls the resetclicked function after the keydown button is pressed
		reset.addEventListener('click', resetClicked);//this line of code gives the add event listner and calls the resetclicked function after the keydown button is pressed
	
		//this line of code below gives the add event listner and calls the scoredclicked function after the keydown button is pressed
		scoreBoardButton.addEventListener('click',scoreClicked);//this line of code gives the add event listner and calls the scoredclicked function after the keydown button is pressed
	
	
		//this line of code gives the add event listner and calls the gobackclicked function after the keydown button is pressed
		goBackButton.addEventListener('click',goBackClicked);//this line of code gives the add event listner and calls the gobackclicked function after the keydown button is pressed
	
		//this line of code decleared
		timeout = setInterval(move, 1);//this line of code decleared
	
		 //this line of code calls the body tag	
		body = document.getElementsByTagName('body')[0];//this line of code calls the body tag
	}
	//this code calls the myloadFunction function
	document.addEventListener('DOMContentLoaded', myLoadFunction);//this code calls the myloadFunction function
