let counterValue = document.querySelector('.value').innerHTML
let nums = Number(counterValue) // converting string to number
function decreaseValue() {
  nums -= 1
  document.querySelector('.value').innerHTML = nums
  changingColor(nums)
}
function resetValue() {
  nums = 0
  document.querySelector('.value').innerHTML = nums
  changingColor(nums)
}
function increaseValue() {
  nums += 1
  document.querySelector('.value').innerHTML = nums
  changingColor(nums)
}
function changingColor(nums) {
  let valEle = document.querySelector('.value')
  if (nums < 0) {
    valEle.style.color = 'red'
  } else if (nums == 0) {
    valEle.style.color = 'black'
  } else {
    valEle.style.color = 'green'
  }
}
let decreaseButton = document.querySelector('.decrease')
decreaseButton.addEventListener('click', decreaseValue)
let resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', resetValue)
let increaseButton = document.querySelector('.increase')
increaseButton.addEventListener('click', increaseValue)
