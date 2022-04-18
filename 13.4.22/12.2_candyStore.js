const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }
//question 1
    const getCandy = (candyStore,id) =>{
        const candy = candyStore['candies'];
        let targetCandy;
        targetCandy = candy.find(Element =>{
            return (Element['id']===id)
        })
        return targetCandy;
    }

    console.log(getCandy(candyStore,"as12f"));
///question 2

    const getPrice = (candyStore,id) =>{
        let targetCandy = getCandy(candyStore,"as12f");
        return targetCandy['price'];
    }

    console.log(getPrice(candyStore,'as12f'));

    //question 3

    const addCandy = (candyStore,id,name,price) =>{
        const candy = candyStore['candies'];
        candy.push({
            "name" : name,
            "id" : id,
            "price" : price,
            "amount" : '1'
        });

    }

    addCandy(candyStore,'dsdsd',"yakov",6);

    console.log(candyStore);

    ///question 4
    
    const buy = (candyStore, id) => {
        let candy = getCandy(candyStore,id);
        candy['amount'] -=1;
        let price = candy['price'];
        candyStore['cashRegister'] -= price;
    };

    buy(candyStore,"5hd7y");
    // console.log(candyStore);
    console.log(candyStore);
