export default function substring(str){
    const lowString = str.toLowerCase().trim()
    let subStr = []
    let uniqueSubStr = []
    let countSubStr = []
    let auxCount = 1
    let output = 0
    for (let i = 0; i < lowString.length; i++) {
        let auxiliar = ""
        for (let j = i; j < lowString.length; j++) {
            auxiliar += lowString.charAt(j)
            subStr.push(auxiliar)
        }
    }
    subStr = mergeSort(subStr)

    for (let i = 0; i < subStr.length; i++) {
        if(subStr[i]===subStr[i+1]){
            auxCount++
        } else{
            uniqueSubStr.push(subStr[i])
            countSubStr.push(auxCount)
            auxCount = 1
        }
    }
    for (let i = 0; i < uniqueSubStr.length; i++) {
        let aux = (uniqueSubStr[i].length)*countSubStr[i]
        //console.log(aux)
        if(aux > output){
            output = aux
        }     
    }
    return (output)
}

function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }

function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }


