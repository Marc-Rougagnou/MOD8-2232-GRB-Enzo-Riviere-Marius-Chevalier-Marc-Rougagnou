function validateAccount(username,email,password,gender,accounts){
    if(email.trim()==='' || password.trim()==='' || username.trim()===''||gender.trim()===''){
        return new Error("Please fill all the fields");
    }
    console.log("2")
    console.log(accounts.length)
    for(let i=0;i<accounts.length;i++){
        console.log(accounts[i].email,email,"emialllll")
        if(accounts[i].email===email){
            return new Error("Email already used");
        }
        if(accounts[i].username===username){
            return new Error("Username already used");
        }
    }
    return null;
}

function validateLogIn(username, password) {
    if (!username) {
      return new Error('Enter a username.')
    }
  
    if (!password) {
      return new Error('Enter a password.')
    }
  
    return null
  }

export default{
    validateAccount,
    validateLogIn
}