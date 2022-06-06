export function validatePasswordSignIn (password) {
  const originalPassword = localStorage.getItem('password')
  return password === originalPassword
}