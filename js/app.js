/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
// build the nav
function buildNav(){
    const sectionsOut = document.querySelectorAll('section');
    const unoL = document.querySelector('#navbar__list');
    const fragment = document.createDocumentFragment();
    for(let i = 0 ; i < sectionsOut.length ; i++)
    {
        let section = sectionsOut[i].getAttribute('data-nav');
        let list = document.createElement('li');
        list.innerHTML = `<a href="">${section}</a>`;
        fragment.appendChild(list);
        list.addEventListener('click', function(e){
            e.preventDefault();
            sectionsOut[i].scrollIntoView({'behavior':'smooth'});
        });
    }
    unoL.appendChild(fragment);
}
// function 'active' to section when near top of viewport
function makeActive(){
    const sectionsOut = document.querySelectorAll('section');
    const links = document.querySelectorAll('a');
    console.log(links);
    for(let i = 0; i < sectionsOut.length; i++){
        if(sectionsOut[i].getBoundingClientRect().top <= 150 && sectionsOut[i].getBoundingClientRect().top >= -100)
        {
            sectionsOut[i].classList.add('your-active-class');
            let section = sectionsOut[i].getAttribute('data-nav');
            links.forEach(element => {
                element.style.color = 'white';
                if(element.textContent === section)
                {
                    element.style.color = 'yellow';
                }
            });
        }
        else{
            sectionsOut[i].classList.remove('your-active-class');
        }
    }
}
// Set sections as active
document.addEventListener('scroll',makeActive);
// Build menu 
buildNav();