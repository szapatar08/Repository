function hide_show(button_id,elements_class){
    const button = document.getElementById(button_id)
    const hide_elements = document.getElementsByClassName(elements_class)

    if (button.textContent === "See more ..."){
        for (let i = 0; i < hide_elements.length; i++){
            hide_elements[i].style.display = "block"
        }
    }
}