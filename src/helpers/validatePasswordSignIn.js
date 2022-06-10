const hash = require('hash-converter');

export function validatePasswordSignIn (password) {
  const originalPassword = localStorage.getItem('password')

  const digest = hash.SHA256(password)

  return digest === originalPassword
}
