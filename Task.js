// const array1= [2,67, 87, 89, 0, 6]
//1. print in ascending order and descending order
const array1 = [2,67, 87, 89, 0, 6];
array1.sort();
console.log(array1);
array1.reverse();
console.log(array1);


//const list1= [1, 2, 2,2, 3, 4, 5, 5, 9, 9, 3, 6]

//3. remove the duplicates and print it ascending

const list1= [1, 2, 2,2, 3, 4, 5, 5, 9, 9, 3, 6];
 const uniqSort = (list1 = []) => {
    const map = {};
    const res = [];
    for (let i = 0; i < list1.length; i++) {
       if (!map[list1[i]]) {
          map[list1[i]] = true;
          res.push(list1[i]);
       };
    };
    return res.sort();
 };
 console.log(uniqSort(list1));