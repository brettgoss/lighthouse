
var userInput = process.argv.splice(2).join('');


function countPosition(input) {

  var charCount = {};
  var stringPos = 0;
  for (var key in input) {

    if (!charCount[key]) {
      charCount[key] = (newObj = {});
      newObj["Instance 1"] = "Position " + stringPos;

    } else {
      var prevObj = charCount[key];
      var size = Object.keys(prevObj).length;
      prevObj[("Instance "+ (size+1))] = "Position " + stringPos;

    }
    stringPos++;
  }
  console.log(charCount);
}


countPosition(userInput);
