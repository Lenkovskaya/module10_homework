let arrayMap = new Map();
arrayMap.set('1', 'one');
arrayMap.set('2', 'two');
arrayMap.set('3','three');

for( let key of arrayMap.keys());
for(let value of arrayMap.values());
console.log( `ключ-${key} значение-${arrayMap.get(key)}`);

/*Создайте произвольный массив Map.
 Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

 */