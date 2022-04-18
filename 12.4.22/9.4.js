


function func(number){
   for(let i=1 ; i<=number; i++){
        let string = "#".repeat(i);
        for(let j = i ; j<number;j++){
            string = string +" ";
        }
        console.log(`'${string}'`);

   }

}

func(7);