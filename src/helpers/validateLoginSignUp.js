import { origin } from "../configs"

export const validateLoginSignUp = async (login) => {
  const { error } = await (await fetch(`${origin}/user/${login}`)).json()
  return !error
}