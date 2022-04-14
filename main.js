function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lXi4X0vCk/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;
var alligator = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+ 'Detected Cow - '+cow+'Detected Lion'+lion+'Detected Alligator'+alligator;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Dog") {
      img.src = 'bark.gif';
      dog = dog+1;
    } else if (results[0].label == "Cat") {
      img.src = 'meow.gif';
      cat = cat + 1;
    } else if (results[0].label == "Cow") {
      img.src = 'moo.gif';
      cow = cow + 1;
    } else if (results[0].label == "Lion") {
      img.src = 'roar.gif';
      lion = lion + 1;
    } else if (results[0].label == "Alligator"){
      img.src = 'bellow.gif';
      alligator = alligator + 1;
    } else{
      img.src = 'listen.gif';
    }
  }
}