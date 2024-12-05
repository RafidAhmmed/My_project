const data =[2,4,6,10,15,20];
data.map((datum) =>{
    console.log(datum = datum*datum);
})
const filteredData = data.filter((datum) => {
    if (datum % 5 === 0) return console.log(datum);
    return false;
});
// console.log(filteredData);

const newdata =data.find((datum) => {
    if (datum % 3 === 0) return true;
    return false;
});
console.log(newdata);