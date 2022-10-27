const bcrypt = require('bcrypt');

// your code here

async function comparePassword (password, hashPassword) {
    let salt =  await bcrypt.genSalt(7);
    let result = await bcrypt.hash(password, salt);
  

    let  isMatched = await bcrypt.compare(hashPassword, result);
   

    console.log(isMatched);
    return isMatched;
    }
    
    module.exports = {
        comparePassword
    }
    
