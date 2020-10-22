const operator = document.querySelector('.operators')
const number = document.querySelector('.numbers')
const remove = document.querySelector('.delete')
const clear = document.querySelector('.clear')
const inputScreen = document.querySelector('.input')
const equals = document.querySelector('.equals')
console.log(equals)

const equation =[]

number.addEventListener('click', numberInputOrRemove)
operator.addEventListener('click', operatorInput)

function numberInputOrRemove(e){
    if(e.target.value!=='arrow'){
        const num = e.target.value
        equation.push(num)
        console.log(equation)
        console.log(inputScreen.value = equation.join(''))
    }
    if(e.target.value==='arrow'){
        equation.pop()
        console.log(equation)
        console.log(inputScreen.value=equation.join(''))
    }
}
function operatorInput(e){
    const op = e.target.value
    if(op===equals.value){
        evaluate()
    }
    else if(op===clear.value){
        equation.splice(0,equation.length)
        inputScreen.value = equation
    }
    else{
        equation.push(op)
        console.log(equation)
        console.log(inputScreen.value = equation.join(''))
    }
}
function evaluate(){
    const total = eval(equation.join(''))
    inputScreen.value = total
    equation.splice(0,equation.length)
    equation.push(total)
}