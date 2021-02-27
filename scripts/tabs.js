const uiTabs = document.getElementById('ui-tabs')
const menus = Array.from(uiTabs.firstElementChild.children)
const panels = Array.from(uiTabs.lastElementChild.children)
const sections = document.querySelectorAll('.section')

menus.forEach((element, index) => {
  element.addEventListener("click", function() {
    // remove all active class
    menus.forEach(el => {
      el.classList.remove('active')
    })

    // add active class to clicked menu element
    menus[index].classList.add("active")

    changePanel(index)
    changeSection(index)
  });
});

const changePanel = (index) => {
  // remove all active class
  panels.forEach(panel => {
    panel.classList.remove('active')
  })

  // add active class to panel element
  panels[index].classList.add('active')
}

const changeSection = (index) => {
  // hide all divs content
  sections.forEach(element => {
    element.style.display = 'none'
  })

  // show div content selected
  sections[index].style.display = 'grid'
} 

// default show first content
changeSection(0)