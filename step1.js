"use strict";


const fsP = require('fs/promises');

async function cat(path) {
  try {
    const contents = await fsP.readFile(`./${path}`, 'utf8');
    console.log('file contents:', contents);
  } catch (err){
    console.log(err);
    process.exit(1);
  }
}

const argv = process.argv;
cat(argv[2]);

// for(let i = 0; i < argv.length; i++){
  // console.log(i, argv[i]);
  // if(argv[i] === 'one.txt'){
  //   cat(argv[i]);
  // }
// }
