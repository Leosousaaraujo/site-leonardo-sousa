
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')


function btn1(){
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')

    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn1.classList.add('active')
}
function btn2(){
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')

    btn2.classList.add('active')
    btn3.classList.remove('active')
    btn1.classList.remove('active')
}
function btn3(){
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')

    btn2.classList.remove('active')
    btn3.classList.add('active')
    btn1.classList.remove('active')
}




tabs.forEach(tab => {
    tab.addEventListener('click', function(){

        const target = document.querySelector(tab.dataset.tabTarget)

        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')


    })
});
