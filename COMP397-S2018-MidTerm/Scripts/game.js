//Michael Madrigal 300850521.
//June 25 2018

let app;
(function(app) {
  "use strict";

  // Game Variables
  let stage;
  let canvas;
  let helloLabel;
  let assetManager;
  let startButton;
  //die definer
  let dieA;
  let dieB;
  //number definer
  let intA;
  let intB;
  //seperator
  let dieSeperator;
    
  let manifest = [
      { id: "one", src: "/Assets/images/1.png" }, 
      { id: "two", src: "/Assets/images/2.png" }, 
      { id: "three", src: "/Assets/images/3.png" }, 
      { id: "four", src: "/Assets/images/4.png" },
      { id: "five", src: "/Assets/images/5.png" },
      { id: "six", src: "/Assets/images/6.png" },
      { id: "blank", src: "/Assets/images/blank.png" },
      { id: "StartButton", src: "/Assets/images/StartButton.png" }
    ];

  function Init() {
      console.log("App Initializing...");
      assetManager = new createjs.LoadQueue();
      assetManager.installPlugin(createjs.Sound);
      assetManager.on("complete", Start);
      assetManager.loadManifest(manifest);
  }


  /**
   * The Start function initializes the createjs Stage object,
   * sets the framerate and sets up the Main Game Loop to
   * trigger every frame
   *
   */
  function Start() {
    console.log("App Started...");
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);

    Main();
  }

  /**
   * This is the Main Game Loop it runs at 60 fps
   *
   */
  function Update() {
    stage.update();
  }

  /**
   *  This is the main function - place all your code here
   *
   */
  function Main() {
    console.log("Main Function...");

    // hello label
    helloLabel = new createjs.Text("Hello, World!", "60px Consolas", "#000000");
    helloLabel.regX = helloLabel.getBounds().width * 0.5;
    helloLabel.regY = helloLabel.getBounds().height * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 200;
    stage.addChild(helloLabel);

    // start button
    startButton = new createjs.Bitmap(assetManager.getResult("StartButton"));
    startButton.regX = startButton.getBounds().width * 0.5;
    startButton.regY = startButton.getBounds().height * 0.5;
    startButton.x = 320;
    startButton.y = 350;
    stage.addChild(startButton);

    // start button listeners
    startButton.addEventListener("click", function() {
        console.log("Start Button Clicked");
        //Remove the hello label
        stage.removeChild(helloLabel);
        stage.removeChild(dieA);
        stage.removeChild(dieB);
        stage.removeChild(intA);
        stage.removeChild(intB);
        //calls the diceRoller function to set the dieA and its Label.
        dieSeperator = diceRoller();
        dieA = dieSeperator[0];
        dieA.regX = dieA.getBounds().width * 0.5;
        dieA.regX = dieA.getBounds().height * 0.5;
        dieA.x = 180;
        dieA.y = 25;
        stage.addChild(dieA);
        //adds the label for dieA;
        intA = dieSeperator[1];
        intA.regX = intA.getBounds().width * 0.5;
        intA.regY = intA.getBounds().height * 0.5;
        intA.x = 180;
        intA.y = 300;
        stage.addChild(intA);
        //call the diceRoller function to set the dieB
        dieSeperator = diceRoller();
        dieB = dieSeperator[0];
        dieB.regX = dieB.getBounds().width * 0.5;
        dieB.regX = dieB.getBounds().height * 0.5;
        dieB.x = 460;
        dieB.y = 25;
		    stage.addChild(dieB);
        //adds label for dieB;
        intB = dieSeperator[1];
        intB.regX = intB.getBounds().width * 0.5;
        intB.regY = intB.getBounds().height * 0.5;
        intB.x = 460;
        intB.y = 300;
        stage.addChild(intB);
        
    });

    startButton.addEventListener("mouseover", function(event) {
        event.currentTarget.alpha = 0.7;
    });

    startButton.addEventListener("mouseout", function(event) {
        event.currentTarget.alpha = 1.0;
    });

    
  }
  //Function to roll the dice
  function diceRoller(){
    //selects a random number from 1-6
    var dice = Math.floor((Math.random()*6)+1);
    switch (dice) {
        case 1:
        var dieDefiner = new createjs.Bitmap(assetManager.getResult("one"));
        var numberDefiner = new createjs.Text("1", "20px Consolas", "#000000");
        break;
        case 2:
        var dieDefiner = new createjs.Bitmap(assetManager.getResult("two"));
        var numberDefiner = new createjs.Text("2", "20px Consolas", "#000000");
        break;
        case 3:
        var dieDefiner = new createjs.Bitmap(assetManager.getResult("three"));
        var numberDefiner = new createjs.Text("3", "20px Consolas", "#000000");
        break;
        case 4:
        var dieDefiner = new createjs.Bitmap(assetManager.getResult("four"));
        var numberDefiner = new createjs.Text("4", "20px Consolas", "#000000");
        break;
        case 5:
        var dieDefiner = new createjs.Bitmap(assetManager.getResult("five"));
        var numberDefiner = new createjs.Text("5", "20px Consolas", "#000000");
        break;
        case 6:
        var dieDefiner = new createjs.Bitmap(assetManager.getResult("six"));
        var numberDefiner = new createjs.Text("6", "20px Consolas", "#000000");
        break;
    }
    return [dieDefiner, numberDefiner];

  }
  

  

  window.addEventListener("load", Init);
})(app | (app = {}));
