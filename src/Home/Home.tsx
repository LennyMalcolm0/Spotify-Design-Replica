
const HomePage = ({designers}: {designers: any}) => {
    const name = designers[0].last;

    return ( 
        <div>{name}</div>
     );
}
 
export default HomePage;


// var uniqueInOrder=function(iterable){
//     let charArrray,
//     charRoom = {},
//     output = [];

//     if (Array.isArray(iterable)) {
//         charArrray = iterable;
//     } else {
//         charArrray = Array.from(iterable);
//     };

//     charArrray.forEach(value => {
//         charRoom[value] ? charRoom[value]++ : charRoom[value] = 1;
//     });

//     for (let item in charRoom) {
//         output.push(item);
//     }

//     return output;
// }