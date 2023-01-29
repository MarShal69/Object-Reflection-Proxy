export default function orderByProps(data, firstKeys) {
  const restKeys = Object.keys(data)
    .filter((key) => !firstKeys.includes(key))
    .sort();

  const keys = firstKeys.concat(restKeys);

  return keys.map((key) => ({
    key,
    value: data[key],
  }));
}


// const obj = {
//   name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
// };

// const result = orderByProps(obj, ['name', 'level', 'defence', 'health', 'attack' ]);
// const result = orderByProps(obj, ['name', 'level', 'defence', 'health']);
// const result = orderByProps(obj, []);
// const result = orderByProps(obj, ['health', 'attack', 'level']);
// orderByProps(obj, ['attack', 'defence']);
// orderByProps(obj, ["name", "defence"]);
// const result = orderByProps(obj, ["name", "health"]);


// console.log(result );
