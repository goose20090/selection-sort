function selectionSort(arr) {
  // type your code here
  let sortedArr = []
  let workingArr = [...arr]

  for (let i = 0; i< arr.length; i ++){
    // find minimum value
    let minVal = findMinimumValue(workingArr)
    // put at end of sortedArr
    sortedArr.push(minVal)
    // remove lowest value from workingArr
    workingArr.splice(workingArr.indexOf(minVal), 1)
  }
  return sortedArr


}

function findMinimumValue(arr){

  let minVal = arr[0]

  for (let i = 0; i < arr.length; i ++){

      let searchRes = arr.find((elem)=> elem < arr[i])

      if(searchRes && searchRes < minVal){
        minVal = searchRes
      }
    }

return minVal
}

if (require.main === module) {
  // add your own tests in here
  // console.log("Expecting: [-1, 2, 3, 5]");
  // console.log("=>", selectionSort([3, 2, 5, -1]));

  // console.log(" Expecting: -5")
  // console.log("=>", findMinimumValue([3, 2, 5, -1, - 5]))
  // 

  console.log("testing benchmark")
  console.log("=>", benchmark())

  // BENCHMARK HERE, and print the average runtime
  
  function benchmark(){
    const longInput = [];

    for (let i = 0; i < 100; ++i) {
      longInput.push(Math.random());
    }

    const startingTime = Date.now()
    for (let i = 0; i < 1000; i ++){
      selectionSort([1,3,2])
      selectionSort(longInput)
    }
    const averageRuntime = (Date.now()- startingTime) / 2000

    return averageRuntime
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
