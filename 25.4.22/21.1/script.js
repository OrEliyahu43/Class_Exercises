const button = document.querySelector('button');
const input = document.querySelector('input');
function func1(event) {
    console.log('somethins')
    console.log(input.value);
    
    const value = input.value;
    console.log(input.value);

    if (value>18) {
        input.value = 'you can drink appear';
    }
    else input.value = "you're too young";

}

button.addEventListener('click', func1)