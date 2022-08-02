// TASK - https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript

function createSecretHolder(secret = 5) {
  let _s = secret
  return {
    getSecret: function () {
      return _s;
    },
    setSecret: function (secret) {
      _s = secret;
    }
  }
}

let secHolder = createSecretHolder(7);
console.log(secHolder.getSecret());
console.log(secHolder.setSecret(6));
console.log(secHolder.getSecret());



