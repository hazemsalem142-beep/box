if ('scrollRestoration' in history) {
         history.scrollRestoration = 'manual';
     }

    window.onload = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        
         alert('click on the box to delever it to the car')
         alert("if you clicked on more than one item don't be afried the point will not change but we will put your category in the box")
    };


let container = document.getElementById('container')
let point = document.getElementById('point')
let i1 = document.getElementById('i1')
let i2 = document.getElementById('i2')
let i3 = document.getElementById('i3')
let i4 = document.getElementById('i4')
let i5 = document.getElementById('i5')
let parent = document.getElementById('parent')

function fun(){
    point.style.display = 'block'
    container.onclick = () => {
setTimeout(() => {
parent.style.transition = '10s'
    point.style.transition = '10s'
    container.style.transition = '10s'
    parent.style.marginLeft = '9000px'
    setTimeout(() => {
       location.replace('hazemsalem142-beep.github.io/car/')
    },2000)
    },900)
    
    }
    
}

i1.onclick = () => {fun()}
i2.onclick = () => {fun()}
i3.onclick = () => {fun()}
i4.onclick = () => {fun()}
i5.onclick = () => {fun()}