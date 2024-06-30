const mainContent = document.querySelector('#main_content')
const activateMenuButton = document.querySelector("#menu_button")
const mobileHeader = document.querySelector("#mobile_header")
const closeMenuButton = document.querySelector('#close_header_btn')
const closeAddContainerButton = document.querySelector('#close_add_container_button')
const addItemContainer = document.querySelector('#add_item_acontainer')
const openAddItemButton = document.querySelector('#open_add_item_button')

activateMenuButton.addEventListener("click", (e) => {
    console.log("Clicked")
    mobileHeader.style.display = "flex"
    mobileHeader.classList.add("open")
})


closeMenuButton.addEventListener("click", (e) => {
    console.log("Closing")
    mobileHeader.classList.remove("open")
    setTimeout(() => {
        mobileHeader.style.display = "none";
    }, 500);
})

openAddItemButton.addEventListener('click', (e) => {
    mainContent.style.opacity = "10%"
    addItemContainer.style.display = 'flex'
})

closeAddContainerButton.addEventListener("click", (e) => {
    mainContent.style.opacity = "100%"
    addItemContainer.style.display = 'none'
})