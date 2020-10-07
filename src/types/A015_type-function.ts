type MapStringsCallback = (args: string) => string;

function mapStrings(arr: string[], fn: MapStringsCallback): string[] {
  const newArr: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, function (item) {
  return item.toUpperCase();
});
