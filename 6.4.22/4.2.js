const numberScore = number =>{
if(number>=0 && number<64){
    return 'F';
}
else if(number>=65 && number<=69){
    return 'D';
}
else if(number>=70 && number<=79){
    return 'C';
}
else if(number>=80 && number<=89){
    return 'B'
}
else if(number>=90 && number<=100){
    return 'A';
}

}

console.log(numberScore(78));