const operator = document.querySelector('.operators')
const number = document.querySelector('.numbers')
const remove = document.querySelector('.delete')
const clear = document.querySelector('.clear')
const inputScreen = document.querySelector('.input')
const leftPerentheses = document.querySelector('.left-perentheses')
const rightPerentheses = document.querySelector('.right-perentheses')
const equals = document.querySelector('.equals')

const equation = []
console.log(equation)

number.addEventListener('click', numberInputOrRemove)
operator.addEventListener('click', operatorInput)

function numberInputOrRemove(e){
    if(e.target.value!=='arrow'){
        const num = e.target.value
        equation.push(num)
        // console.log(equation)
        inputScreen.value = equation.join('')
    }
    if(e.target.value==='arrow'){
        equation.pop()
        // console.log(equation)
        inputScreen.value=equation.join('')
    }
}
function operatorInput(e){
    const op = e.target.value
    if(op===equals.value){
        evaluate(equation)
    }
    else if(op===clear.value){
        equation.splice(0,equation.length)
        // console.log(equation)
        inputScreen.value = equation
    }
    else{
        equation.push(op)
        inputScreen.value = equation.join('')
    }
}
function evaluate(equation){
    equation.forEach(i=>{
        const index = equation.indexOf(i)
        const before = equation[index-1]
        const after = equation[index+1]
        if(i==='(')
            if(before!==undefined)
                if(before!=='+'&&before!=='/'&&before!=='-')
                    equation.splice(index,1,['*','('])
        if(i===')')
            if(after!==undefined)
                if(after!=='+'&&after!=='/'&&after!=='-')
                    equation.splice(index,1,[')','*'])
    })
    console.log(equation)
    const total = eval(equation.flat().join(''))
    inputScreen.value = total
    equation.splice(0,equation.length)
    equation.push(total)
}