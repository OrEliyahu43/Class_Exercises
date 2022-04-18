function colorCheck(color){
    let color1 = color.toLowerCase();
    switch(color1){
    case 'yellow':
    case 'pink':
    case 'orange':
        return "light color";
        break;
    case 'blue':
    case 'purple':
    case 'brown':
        return "dark color";
        break;
    default:
        return "Unknown color";
    }

}


console.log(colorCheck("PURPle"));