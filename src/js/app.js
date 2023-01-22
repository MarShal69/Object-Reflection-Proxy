export default function orderByProps(obj, [key1, key2]) {
  const array1 = [];
  const array2 = [];
  for (const key in obj) {
    if (key === key1 || key === key2) {
      array1.push({ key, value: obj[key] });
    } else {
      array2.push({ key, value: obj[key] });
      array2.sort((a, b) => {
        if (a.key < b.key) {
          return -1;
        }
        return 1;
      });
    }
  }
  const array = [...array1, ...array2];
  // console.log(array);
  return array;
}

// const obj = {
//   name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
// };
// orderByProps(obj, ['name', 'level']);
// orderByProps(obj, ['attack', 'defence']);
// orderByProps(obj, ["name", "defence"]);
// orderByProps(obj, ["name", "health"]);
