(() => {
    let burger      = document.querySelector('.burger');
    let pageWrapper = document.querySelector('.page-wrapper');
    let persWrapp   = document.querySelector('.perspective-page-wrapper');
    let assideMenu = document.querySelector('.aside-menu');        

    burger.addEventListener('click', toggleMenu);
    // document.addEventListener('hide')
    
    function toggleMenu() {
        //if menu is already opened, hide it
        if (burger.dataset.active == 'true') {
            toggleAssideMenu();
            hideMenu();
            burger.dataset.active = 'false';
        }
        //if menu is closed, show it
        else { 
            toggleAssideMenu();            
            showMenu();
            burger.dataset.active = 'true';
            //set event listener, that will closed menu by clicked on page
            pageWrapper.addEventListener('click', toggleMenu, true);
        }

        
    }

    function showMenu() {
        pageWrapper.dataset.perspective = 'true';
        persWrapp.dataset.active = 'true';
    }

    function hideMenu(e) {
        pageWrapper.dataset.perspective = 'false';
        persWrapp.dataset.active = 'false';
        pageWrapper.removeEventListener('click', toggleMenu, true);        
    }

    function toggleAssideMenu() {
        let assideMenuStatus = assideMenu.dataset.active;

        if (assideMenuStatus == 'false') {
            showAssideMenu();
            assideMenu.dataset.active = 'true';
        }
        else {
            hideAssideMenu();
            assideMenu.dataset.active = 'false';
        }
    }

    function showAssideMenu() {
        let assideMenuItems = assideMenu.querySelectorAll('.aside-menu__item');

        TweenMax.staggerFromTo(assideMenuItems, 0.4, {
            x: 100,
            opacity: 0,
            scale: 0.1
        }, {
            x: 0,
            opacity: 1,
            scale: 1
        }, 0.1);
            
    }
    
    function hideAssideMenu() {
        let assideMenuItems = assideMenu.querySelectorAll('.aside-menu__item');

        TweenMax.staggerFromTo(assideMenuItems, 0.5, {
            x: 0,
            opacity: 1,
        }, {
            x: 100,
            opacity: 0
        }, 0.1);
    }
    
})();