// 1. Write a loop that outputs
//10
//9
//8
//...
//2
//1
//BlAST OFF!

function countDown(){
    let count = 10
    for (let i = 0; i < 10; i++) {
        console.log(count--)
    }
    console.log("BLAST OFF!")
}

countDown()

