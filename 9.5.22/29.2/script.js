const btn = document.querySelector('button');
const body = document.querySelector('body');
const p = document.createElement('p');


btn.addEventListener('click',jokeOfToday)


// function jokeOfToday (){
// fetch("https://api.jokes.one/jod").then((response)=>{
//     response.json().then((data) =>{
//         const title = data.contents.jokes[0].joke.title;
//         const joke =data.contents.jokes[0].joke.text;
//         body.appendChild(p);
//         p.append(title,joke);
        
//     });
// })

// }



async function jokeOfToday(){
    const response = await fetch("https://api.jokes.one/jod");
    const data = await response.json();
    const title = data.contents.jokes[0].joke.title;
    const joke = data.contents.jokes[0].joke.text;
    body.appendChild(p);
    p.append(title, joke);

}
