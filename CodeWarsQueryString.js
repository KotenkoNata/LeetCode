// TAsk - https://www.codewars.com/kata/595249fc10b69f4f7a000003/train/javascript

function toQueryString(obj) {

  let result = [];

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].map(item => {
        result.push(`${key}=${item}`)
      })
    } else {
      result.push(`${key}=${obj[key]}`)
    }

  }

  return result.join("&");
}

console.log(toQueryString({foo: 1, bar: 2})) //'foo=1&bar=2'

console.log(toQueryString({foo: [1, 3], bar: [2, 4]}))