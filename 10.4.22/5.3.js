function passwordValid(password_string){
    if(password_string.length>7){
        return "strong";
    }
    else{
        return "Weak";
    }

}

function passwordValid2(password){

    const answer = password.length>7 ? "strong" : "Weak";
    return answer;
}


console.log(passwordValid2('787842378432'));


function passwordValid3(password){

const str = password.length>7 && password.toLowerCase() !== password ? "Strong" : "Weak";
return str;

}       


console.log(passwordValid3('dsadsssag'));