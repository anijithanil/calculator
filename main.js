// display content function

function displayContent(content){
    result.value +=content
}

//clear function
function clearCalcFunction(){
    result.value=""
}
//backspace
function backSpace(){
    result.value = result.value.slice(0,-1)
}
//evaluation
function Evaluation(){
    result.value = eval(result.value)
}