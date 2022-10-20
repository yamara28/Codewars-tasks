//https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript
function createSecretHolder(inSecret) {
  let value = inSecret;
  return {
    setSecret: function (secret) {
      value = secret
    },
    getSecret: function () {
      return value
    }
  }
}


