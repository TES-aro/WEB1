const DataURL = "https://secure.runescape.com/m=adventurers-log/api/v1/playerData"
export const getPlayerData = async (username: string) => {
  const resp = await fetch(`${DataURL}/${username}/?includeQuests=true?includeSkills=true`)
  if (!resp.ok){
    throw new Error(`${resp.status}: ${resp.statusText}`)
  }
  return resp.body;
}

export const getPlayerEvents = async (username: string) => {
  const resp = await fetch(`${EventURL}/${username}`)
  if (!resp.ok){
    throw new Error(`${resp.status}: ${resp.statusText}`)
  }
  return resp.body
}
