const form = document.querySelector('form');
const formChildrens = form.children;

console.log(formChildrens);
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let data = "";
    for(input of formChildrens){
        if(input.localName==='input'){
        let name = input.name;
        data += `${name}: ${input.value}`;
        }

    }
    if(confirm(`${data}`)===true){
        alert('congratulations you successfully sent this form');
    }
    })

