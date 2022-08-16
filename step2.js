"use strict";


const fsP = require('fs/promises');
const axios = require('axios');
const argv = process.argv;

/**Accepts file name and console logs file content */

async function cat(file) {
  try {
    const contents = await fsP.readFile(`./${file}`, 'utf8');
    console.log('file contents:', contents);
  } catch (err){
    console.log(err);
    process.exit(1);
  }
}

/** Accepts arg and tries to run webcat, if fail, run cat function */
function runFile(arg){
  try{
    const url = new URL(`${arg}`);
    webCat(arg);

  }catch (err){
    console.info(err); //verbose q
    cat(arg);
  }

}

/**Accepts URL and console logs resp data */
async function webCat(URL){
  try{
    const resp = await axios.get(`${URL}`);
    console.log(resp.data);
  } catch(err){
    console.log(err.code);
    // how to access first error line
    process.exit(1);
  }
}

runFile(argv[2]); //way to make less rigid?