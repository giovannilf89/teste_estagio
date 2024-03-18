

function Fibonacci(){
   const inputNumber = parseInt(document.getElementById('number').value)
   let a = 0 
   let b = 1

    while( b <= inputNumber){
        if(b === inputNumber){
            alert`O número pertence a sequência Fibonacci`
            return
        }
        const temp = b
        b = a + b
        a = temp
    }
    alert`O número não pertence a sequência Fibonacci`
}
