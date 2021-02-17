export default function sortedArray(array) {
  array.sort((obj, obj2) => obj2.health - obj.health);
  return array;
}
