const buttons = document.querySelectorAll('button');
const h1Heading = document.getElementsByTagName('h1');
const btn1 = buttons[0];
const btn2 = buttons[1];
const h1Computed = getComputedStyle(h1Heading[0]);
console.log(btn1);
console.log(btn2);


btn1.addEventListener('click' , function(){
    const currentSize = h1Computed.getPropertyValue('font-size');
    let newFontSize = parseInt(currentSize);
    newFontSize += 10;
    if(newFontSize>100) newFontSize = 100;
    if(newFontSize<6) newFontSize = 6;
    
    h1Heading[0].style.fontSize = newFontSize+'px';
    
    // h1Heading.style.fontSize = 'currentSize';
})
btn2.addEventListener('click' , function(){
    const currentSize = h1Computed.getPropertyValue('font-size');
    let newFontSize = parseInt(currentSize);
    newFontSize -= 10;
    if(newFontSize>100) newFontSize = 100;
    if(newFontSize<6) newFontSize = 6;
    
    h1Heading[0].style.fontSize = newFontSize+'px';
    
    // h1Heading.style.fontSize = 'currentSize';
})
