export function transformDate( dateString:string ) {
  const date = new Date(dateString)
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}　`
}
