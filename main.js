const fs = require('fs');

function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  if(fs.existsSync(filePath)){
    fs.readFile(filePath,"utf-8",(err, data)=>{
      if(err){
        console.log(err);
      }
      console.log(data);
    })
  } else{
    console.log( "Column '${columnName}' not found in the CSV.");
  }
}

// TODO: Call printFileContents with the command-line argument
printFileContents("./output.txt");
