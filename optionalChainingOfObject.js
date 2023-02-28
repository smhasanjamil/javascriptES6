const petOwner = {
    name: 'Jolonto Kholil',
    contact: {
        phone: '01700000000',
        email: 'contact@hasanjamil.com'
    },
    pet: {
        name: 'Nobab',
        info: {
            color: 'Fair',
            weight: 53
        }
    }
};

//Optional chaining
console.log(petOwner?.dog?.name); //Jodi oi property thake tahole dekhao, nahole na