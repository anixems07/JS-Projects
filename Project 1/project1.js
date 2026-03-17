const buttons=document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(button) {
    console.log(button)
    button.addEventListener('click',function(event){
        console.log(event)
        console.log(event.target)
        // switch case is not required as he colorname itself is the id name of the button
        const color=event.target.id
        body.style.backgroundColor=color})
})
