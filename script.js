"use strict"

function getDogImage(numInput){
  if (numInput < 3){
    fetch("https://dog.ceo/api/breeds/image/random/3")
    .then(response => response.json())
    .then(responseJson => displayImage(responseJson));
  }else if (numInput > 50){
    return alert("Choose number 50 of less.");
  }else {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
    .then (response => response.json())
    .then (responseJson => displayImage(responseJson))
    
  }
}

function watchForInput(){
  $("#num-dog-img").submit(e => {
    e.preventDefault();
    let userInput = $("#num-input").val();
    getDogImage(userInput);
  });
}

function displayImage(responseJson){
    console.log(responseJson);
    $(".results").html("");
    responseJson.message.forEach( function (img) {
      $(".results").append(`<img src="${img}" class="results">`);
    });
    
    $(".results").removeClass("hidden");
  }





$(function(){
  console.log("App loaded! Waiting for Submit!");
  watchForInput();
});