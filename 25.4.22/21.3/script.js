const text = document.querySelector('textarea');
const btn = document.querySelector('button');

btn.addEventListener('click',function (){
    const value = text.value;
    if(value.length<100)
        alert('you must enter atleast 100 character');
})