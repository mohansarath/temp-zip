

const data = [
    {
        name: "Anoop",
        age: 30
    },
    {
        name: 'Sarath',
        age: 13
    }
];

const newData = data.map( item => {item.age += 1; return item });

console.log(newData);