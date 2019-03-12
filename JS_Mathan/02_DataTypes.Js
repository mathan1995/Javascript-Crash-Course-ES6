//PRIMITITIVE DATA TYPES

    //String
    const name="Mathan";
    console.log(typeof name);

    //Number
    const age= 45;
    console.log(typeof age);

    //Boolean 
    const hashKids= true;
    console.log(typeof hashKids);
    //Null
    const cars = null;
    console.log(typeof cars);

    //Undefined
    let test;
    console.log(test);

    //Symbol
    const sym= Symbol('%');
    console.log(sym);

//REFERENCE DATA TYPES

    //Arrays
    const hobbies = ['Movies','Music'];
    console.log(hobbies);

    //objects Literal
    const address = {

    city: 'Jaffna',
    state : 'Jaffna district',
    provience : 'Nothern'
    }
    console.table(address);
    console.warn('data type of the address is :'+typeof address );

    //Display Date 
    const today = new Date();
    console.log(today);
    console.warn('data type of the date  is :'+typeof today );
