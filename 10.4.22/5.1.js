function countryToLivein(language,isisland,population,country){
if(language === 'english' && isisland === false && population<50){
    console.log(`you should live in ${country} `);
}
else{
    console.log(`${country} does not meet your criteria`)
}
}



countryToLivein('english',false,70,'USA');