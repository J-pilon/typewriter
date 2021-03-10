const sentence = "hello there from lighthouse labs";

newSentence = sentence + '\n';
let time = 50;
for (let i = 0; i <= newSentence.length; i++) {
  setTimeout(() => {
    if (i < newSentence.length) {
      process.stdout.write(newSentence[i]);
    } 
  }, time+=50);
};


// it creates a one second timeout for every iteration. 
// the letters appear all at once