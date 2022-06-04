import { origin } from '../configs'

export const validateLogin = async (login) => {
  const { error } = await (await fetch(`${origin}/user/${login}`)).json()
  return !error
}