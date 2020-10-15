// class selectors - buttons
const linkBtns = document.querySelectorAll('.link-item')
const content = document.querySelectorAll('.content')
const delhi = document.getElementById('newdelhi')
const hamBtn = document.querySelector('.hamburger')
const links = document.querySelector('.links')

// function default content as page loads
const onLoad = () =>  delhi.classList.add('show-item');
onLoad();

// Event Listner
linkBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const btnTarget = e.target.dataset.id        
        content.forEach(c => {
           if(c.id === btnTarget){
                c.classList.add('show-item')
            }
            else{
                c.classList.remove('show-item')
            }
        })
    
    })
})

hamBtn.addEventListener('click', () => {
    links.classList.toggle('show-grid')
})


