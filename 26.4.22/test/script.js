const listBtn = document.querySelector('.listBtn');

listBtn.addEventListener('click',()=>{
    listBtn.style.backgroundColor = 'gray';
    for(let i =0 ;i <8;i++){
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.style.color = 'white';
        h3.style.textAlign = 'center';
        
        const h4 = document.createElement('h4');
        h4.style.color = 'white';
        h4.style.backgroundColor = 'red';

        this.appendChild(div);
        div.appendChild(h3);
        div.appendChild(h4);

    }

})