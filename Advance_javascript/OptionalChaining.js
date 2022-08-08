const people = [
    {
        name: "Bobby",
        location: {
            street: "123 lane",
            TimeZone: { offset: '+7:00' }
        },
    },
    {
        name: "Peter",
        location: { street: "123Pine Street" }
    },
    {
        name: "Susan",
        location: {
            street: '123 Apple Street',
            TimeZone: { offset: '+8:00' }
        }
    }
]
people.forEach((person) => {
    // console.log(person.name);
    // console.log(person.location.TimeZone.offset)
    // console.log(
    //     person.location &&
    //     person.location.TimeZone &&
    //     person.location.TimeZone.offset
    // );

    console.log(person?.location?.TimeZone?.offset);
})
// console.log(people);







