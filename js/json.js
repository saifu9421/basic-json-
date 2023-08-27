const user ={
    id:1,
    name:"saifur rahaman saif",
    job:"actor"

};
const stringify = JSON.stringify(user);

// console.log(stringify);

// // javascript object Notation (Json)
// console.log(user);

const shop ={
       owner:"alia",
       address:{
          street:'voot er goli',
            city:"ranbir",
            country:"Bangladesh",
       },
       products:['laptop','mac','monitor','Keyboard'],
       revenue:45000,
       isOpen:true,
       isNew:false,
};
  console.log(shop);

  const shopJason = JSON.stringify(shop);
  console.log(shopJason);

  const shopObject = JSON.parse(shopJason);
 console.log(shopObject);
 