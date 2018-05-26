function makeCanvas(){

	var pi = Math.PI * 2;

	//CANVAS TEXT
	//We are getting the Id and storing it in Variable. Then Getting the Context of same var
	var canvasText = document.getElementById('canvasText');
	var ctx1 = canvasText.getContext('2d');
	ctx1.font = '32pt sans-seriff';
	ctx1.fillStyle = 'DeepSkyBlue';
	ctx1.strokeStyle = 'black';
	//This will give us the Blue Text. 1st Param is distance from left border
	//Second Param is ditance from top
	ctx1.fillText('I love Html5',75,150);
	//Stroke text is the Hollow outline seperate text that we overlap with
	//original to make it look like it has boundries around it
	ctx1.strokeText('I love Html5',75,150);

	
	//CANVAS RECTANGLE
	var convasRect = document.getElementById('canvasRectangle');
	var ctx2 = convasRect.getContext('2d');
	//fill Properties
	ctx2.fillStyle = "#FF0000";
	//stroke Properties
	ctx2.strokeStyle = "#000000";
	ctx2.lineWidth = 5;
	
	/*Fill Rect gives the Basic Rectangle
	1st and 2nd are co-ordinates from left and top. 3rd and 4th are Width and height */
	ctx2.fillRect(45,5,135,135);
	//Stroke Rect give the Rectangle with stroke properties we defined above
	ctx2.strokeRect(45,5,135,135);//Top Left
	
	ctx2.fillRect(200,150,135,135);
	ctx2.strokeRect(200,150,135,135);//Bottom Right
	
	ctx2.fillStyle = "#666666";
	
	ctx2.fillRect(200,5,135,135);//Top Right
	
	ctx2.fillRect(45,150,135,135);//Bottom Left

	//CANVAS LINES
	var lines = document.getElementById('canvasLine');
	var ctx3 = lines.getContext('2d');
	ctx3.strokeStyle = '#666666';
	ctx3.fillStyle = '#FF0000';
	ctx3.lineWidth = 5;
	ctx3.beginPath();
	ctx3.moveTo(100,100);
	ctx3.lineTo(150,200);
	ctx3.lineTo(200,200);
	ctx3.lineTo(200,290);
	ctx3.lineTo(290,290);
	ctx3.lineTo(290,100);
	ctx3.lineTo(100,100);
	ctx3.stroke();
	ctx3.fill();
	ctx3.closePath();

	//Circles

	var circle = document.getElementById('canvasCirlces');
	var ctx4 = circle.getContext('2d');
	ctx4.fillStyle = "blue";
	ctx4.beginPath();
	/**
	1st 2 param are starting co-ordinate from left and top, 3rd is radius of arc, 4th is starting angle, 
	5th is ending angle 6th is optional which determines clockwise or anticlockwise. If we set Ending 
	angle as PI*1 then it's semicircle. By incrementing upto 2 we make it full circle and decrementing it we make it smaller part of circle 
	*/
	ctx4.arc(200,30,25,0,Math.PI*2);
	ctx4.fill();
	ctx4.closePath();

	ctx4.fillStyle = "red";
	ctx4.beginPath();
	ctx4.arc(200,100,45,0,pi);
	ctx4.fill();
	ctx4.closePath();

	ctx4.fillStyle = "black";
	ctx4.beginPath();
	ctx4.arc(200,220,75,0,pi);
	ctx4.fill();
	ctx4.closePath();

	//ANIMATION
	var anim = document.getElementById('canvasAnimation');
	var ctx5 = anim.getContext('2d');

	var posX = 25.0, posY = anim.height/2;
	var speedX = 1.0, speedY = 1.0;
	var goingPositive = true;
	var animationSpeed = 1;
	var circleRadius = 10;
	var directionX = true, directionY = true;
	var colided = 0.0;

	//Set Interval is a function which is called again and again 
	setInterval(function(){
		ctx5.fillStyle = "black";
		ctx5.fillRect(0,0,anim.width, anim.height);

		ctx5.fillStyle = "white";
		ctx5.beginPath();
		ctx5.arc(posX,posY,circleRadius,0,pi);
		ctx5.fill();
		ctx5.closePath();
		//Slow down the animation when near any of the walls

		// Checks the collision from the right wall. If yes then the ball should reverse the direction
		if( posX + circleRadius >= anim.width-150 || posX <= circleRadius){
			colided=colided+0.0000005;
			speedX=-(speedX+colided);
		}

		//Checks the collision from the bottom wall
		else if(posY + circleRadius >= anim.height || posY <= circleRadius ){
			speedY=-(speedY);}
		posX=posX+speedX;
		posY+=speedY;

		document.getElementById("info").innerHTML = "posX:" + posX + "\n posY:" + posY + "\n speedY:" + 
		speedY + "\n speedX:" + speedX+"\n colided:="+colided;
		animationSpeed++;

		
	},animationSpeed)
}