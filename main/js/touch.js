document.querySelector('body').addEventListener('click', function(e) {
    let clickedElement = e.target;
    if (clickedElement.classList.contains('specialLink')) {
        let menu = clickedElement.parentElement;
        menu.style.display = 'none';
        menu.classList.remove('touched');
        // then remove the style after giving it a chance to close so hovering will reopen the menu
        setTimeout(function() {
            menu.style = '';
        }, 200);
    }
    if (clickedElement.classList.contains('bottoms')){
        let menu = clickedElement.nextSibling.nextSibling;
        if(!menu.classList.contains('touched'))
            menu.classList.add('touched');
        else
            menu.classList.remove('touched');
    }
});