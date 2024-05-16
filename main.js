const darkMode = document.querySelector('.dark')
const darkModes = document.querySelector('body')
const selectTheme = document.querySelector('.theme')
const select = document.querySelector('.theme')
const select2 = document.querySelector('.theme2')
const fine = document.querySelector(".ability")
const linkTags = document.querySelectorAll(".link-tag")

selectTheme.addEventListener('click', function(event) {
    darkMode.classList.toggle('black')
    select.classList.toggle('witch')
})

select2.addEventListener('click', function(event) {
    darkMode.classList.toggle('black')
    select2.classList.toggle('witch')
})

const menu = document.querySelector('.hamburger')
const menuOne = document.querySelector('.overlay')

menu.addEventListener('click', function(){
    menuOne.classList.toggle('vincent')
    menu.classList.toggle('active-lines')
})

darkModes.addEventListener('click', function(){
    darkModes.classList.add('white')
})




linkTags.forEach((tag)=>{
    // console.log("here",tag)


    
    tag.addEventListener('click', ()=>{
        menuOne.classList.toggle('vincent')
        menu.classList.toggle('active-lines')
    })
})