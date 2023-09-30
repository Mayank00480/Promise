
// Using Promise
console.log('Person 1 : Show Ticket');
console.log('Person 2: Show Ticket');

const WifeGettingTickets = () =>{
    return new Promise((resolve , reject) =>{
        console.log('My wife is getting tickets')
        resolve('ticket');
    })
}
const getPopCorn = WifeGettingTickets().then((t) =>{
    return new Promise((res , rej) =>{
  console.log('Persor : Lets go for the movie');
  console.log('wife : I am hungry');
  res(`${t} popcorn`);
    })
}) 
const getButter = getPopCorn.then((t)=>{
    return new Promise((res,rej) =>{
        console.log('Persor : Lets go for the movie');
        console.log('wife : I need butter');
        res(`${t} butter`);
    })
} ) 
const getColdDrink = getButter.then((t) =>{
    return new Promise((res,rej) =>{
        console.log('Person:lets go for the movie')
        console.log('wife : i need butter');
        res(`${t} colddrinks`)
    })
})
getColdDrink.then((t) =>{
console.log(`${t}`);
})
console.log('Person 3 : Show Ticket');
console.log('Person 4: Show Ticket');

//Using Async await 
/*console.log('Person 1 : ShowTickets');
console.log('Person 2 : Show Tickets');
const Tickets = async() =>{
    const wifeGettingTickets =  new Promise((res,rej) =>{
      res('tickets');
    })
    const getPopCorn = new Promise((res,rej) =>{
        res('popcorn');
    })
    const getButter = new Promise((res,rej)=>{
       
            res(`butter`);
        })
    const getColdDrinks = new Promise((res,rej) =>{
          res('ColdDrinks');
        })
     
    let ticket = await wifeGettingTickets;
    console.log(`Women : i have the ${ticket}`);
    console.log('Person : lets go for the movie');
    console.log('wife: I am hungry');
    
    let popcorn = await getPopCorn;
    console.log(`Person : i have the ${popcorn}`);
    console.log('Person : lets go for the movie');
    console.log('wife: I need butter');
     
    let butter = await getButter;
    console.log(`Person : i have the ${butter}`);
    console.log('Person : lets go for the movie');
    console.log('wife: I need Cold Drink');
    
    let ColdDrinks = await getColdDrinks;
    console.log(`Person : i have the ${ColdDrinks}`);
    console.log('Person : lets go for the movie');
    console.log('wife: OK');
    
    
    return wifeGettingTickets;
    
}
Tickets().then((t) =>{
console.log(t)
})

console.log('Person 3 : SHow Ticket');
console.log('Person 4 : Show Ticket');



*/











