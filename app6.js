function arrayElem(array){
    for(let i=0; i<array.length-1; i++){
        if(array[i]!==array[i+1]){
            console.log(false)
            return;
        } }
         console.log(true)
        }
    
arrayElem([2,2,2,2]);

/*Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые.

*/