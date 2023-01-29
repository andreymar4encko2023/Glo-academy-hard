const num =266219;
const numArray= Array.from('' + num);
const multiple = numArray.reduce( (res,item)=>item*res );

let constructions =  multiple**3;


constructions=String(constructions).slice(0,2);
console.log(constructions);
