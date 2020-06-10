import md5 from 'md5'

export default function (s) {
  const salt = '1a2b3c4d'
  let arr = md5(`${salt.charAt(0)}${salt.charAt(2)}${s}${salt.charAt(5)}${salt.charAt(4)}`)
  // let arr = md5(s).split('').reverse()
  // arr.push([arr[0], arr[5], arr[10], arr[15], arr[20], arr[25], arr[30]])
  // return arr.toString().replace(/,/g, '')
  return arr
}
