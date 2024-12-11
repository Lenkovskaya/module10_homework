function oddOrEven(array2){
    let zero = array2.filter( x => x == 0)
    let even = array2.filter( x=> x % 2=== 0 && x !== 0);
    let odd = array2.filter( x => x % 2 !== 0);
    console.log(odd.length);
    console.log(even.length);
    console.log(zero.length)

}
oddOrEven([2,2,2,3,3,3,5,0,0,0])

/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее. */