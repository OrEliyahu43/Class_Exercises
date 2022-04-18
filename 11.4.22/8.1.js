const book ={
    "name" : "or's book",
    "author": "or",
    "pages" : 356,
    "chapters" : 20,
    "publishing year" : 1997
}

function func1(book){
    console.log(`The book ${book.name} was written by ${book.author} in the year ${book['publishing year']}`)
}

console.log(typeof book);
func1(book);