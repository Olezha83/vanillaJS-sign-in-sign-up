import { origin } from '../configs'

export const getUserDetails = async (login) => {
  const { error, password, avatar } =
    await (await fetch(`${origin}/user/${login}`)).json()
  
  return error ? null : { password, avatar }
}