// var object = { 'a': [{ 'b': { 'c': 3 } }] };

//_.get(object, 'a.b.c', 'default');

function get(obj, str, _default) {
  const _arr = str.split(".");
  let newObj = obj;
  _arr.forEach((key) => {
    newObj = newObj[key] || _default;
    if (newObj === _default) {
      return newObj;
    }
  });
  return newObj;
}

var _object = { a: { b: { c: "pass" } } };

const element = document.getElementById("buttonElement");

element.addEventListener("click", () => {
  const value = get(_object, "a.b.c", "default");
  console.log(value);
});
