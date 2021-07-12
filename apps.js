window.addEventListener('load',()=>{
    const sound = document.querySelectorAll('.sound');
    const pads =document.querySelectorAll('.pads div');
    const visual=document.querySelector('.visual')
    const colors=[
        "#60d394",
        "#d36060",
"#c060d3",
"#d3d160",
"#1e57c8",
"#93a32d",
"#3a687a",

    ]


// console.log(sound)

pads.forEach((pad,i)=>{
pad.addEventListener("click",()=>{
sound[i].play()

createBubble(i)

})
})


function createBubble(i){
    const bubble = document.createElement('div')
    visual.appendChild(bubble)
    bubble.style.backgroundColor=colors[i]
    bubble.style.animation = "jump 1s ease";

bubble.addEventListener('animationend',()=>{
    visual.removeChild(this);
})


}



})