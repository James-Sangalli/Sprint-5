//looping a triangle

var length = 8; //total length of all #

for (squares ='#'; squares.length < length ;squares += '#'){
  console.log(squares);
}

//end of triangle exercise

//FizzBuzz

var count = 1;

while(count <= 100)
{
  if (count % 5 == 0 && count % 3 ==0){ //if both
    console.log("FizzBuzz");
  }
  else if (count % 3==0){ //if divisible by 3
    console.log("Fizz");
  }
  else if (count % 5 == 0){ //if divisible by 5
    console.log("Buzz");
  }
  else{
    console.log(count); //else log the number
  }
  count++; //increment by one
}
//end of FizzBuzz Exercise

//chess board exercise

var size = 8;
var b = "";

for (i = 0; i < size; i++){
  for (j = 0; j < size; j++){
  if((i + j) % 2 == 0){
  b +=" "; //logs a space
  }
  else{
    b+="#"; //logs the hashtag
  }
  }
  b += "\n" //adds new line once exits inner loop
}
  console.log(b); //once finished displays the completed board

  

}

//end
