var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

    const statusBooks =(array) =>{
        const objectTarget = array.filter(Element =>{
            return (Element['readingStatus']);
        })

        for(let value of objectTarget){
            let object1 = value;
            for(let value2 in object1){
                console.log(object1[value2]);
            }
        }
    }


    console.log(statusBooks(library));