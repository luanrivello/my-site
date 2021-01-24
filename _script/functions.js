function alerta(){
    window.alert('Alert!')
}

function setup(){
    //Events
    /*
    var nav1 = document.querySelector('#spaceship1')
    nav1.addEventListener('click', alerta)
    */
    /*
    document.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        let res =  Math.round(scrollY/2) + 'px'
        document.querySelector('body').style.backgroundPositionY = res

        res = 'translateY(-' + Math.round(scrollY/4) + 'px)'
        document.querySelectorAll('.z3').forEach(function(element){
            element.style.transform = res 
        })

        let transition = range(before, scrollY + 1)

        transition.forEach(function(pixels){

            let res =  Math.ceil(scrollY/2 + 1) + 'px'
            document.querySelector('body').style.backgroundPositionY = res

            res = 'translateY(' + Math.ceil(pixels/4 + 1) + 'px)'
            document.querySelectorAll('.z3').forEach(function(element){
                element.style.transform = res 
            })

        })

        before = scrollY

    })
    */
    /*
    //Footer spacer
    let blocks = document.querySelectorAll('.blocks')
    let heightvh = document.querySelector('.heightvh')
    let sum = 0
    for(let i = 0 ; i < blocks.length ; i++) {
        if(blocks[i] != heightvh){
            sum = sum + blocks[i].clientHeight
        }
    }

    heightvh.style.minHeight = (window.innerHeight - sum - 146) + 'px'
    */
}

function range(startAt = 0, endAt = 0) {

    let aux = new Array()
    for(let i = 0; i < Math.abs(startAt - endAt); i++){
        if(startAt < endAt){
            aux.push(startAt + i)
        }else{
            aux.push(startAt - i)
        } 
    }

    return aux

}

/*
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, (disp) => console.log(disp));
myCalculator(4, 4, () => {});

blocks = [5,22,31,44]
for(let aux in blocks){
    console.log(blocks[aux])
}
*/