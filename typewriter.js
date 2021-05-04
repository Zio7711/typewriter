const sentence = "hello there from lighthouse labs";
let totalTime = sentence.length * 50;
for (const char in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
  }, char * 50);
};
setTimeout(() => console.log(''), totalTime)



