(() => {
    let navBar      = document.querySelector('.navigation');            //get a navigation block, that consist navigation item
    let navItems    = document.querySelectorAll('.navigation__item');   //get navigations items
    
    let sections    = document.querySelectorAll('.section');            //get all secitons, such as: about, work(slider) and others

    let assideMenu = document.querySelector('.aside-menu');    
    assideMenu.addEventListener('click', assideMenuhandler);

    //Later we will get the slide fadeIn/Out direction
    let oldSection;
    let newSection;

    //if state == 0, we cannot start the animation, if == 1, can start one
    let animationState = 1;
    
    //get the section number from local storage, whrer the user was at the last moment, if it == undefined, it's first section
    setFirstTime();
    
    //use an event delegation, we set listetener on entire navigation bar
    navBar.addEventListener('click', navigationHandler);
    //change section using mouse scroll
    window.addEventListener('mousewheel', mousewheelhandler);

    function navigationHandler (e) {
        let target = e.target;
        //#region get selected navigation item
            if (target.classList.contains('navigation')) return;
            else if (target.classList.contains('navigation__item')) target = e.target;        
            else target = target.parentElement;
        //#endregion

        //convert it from the string to number
        let dataNum = +target.dataset.number;

        setNewActive(dataNum)
        moveToSection(dataNum);
    }

    function mousewheelhandler (e) {
        let delta = e.wheelDelta;
        let num = (newSection !== undefined) ? newSection : oldSection;
        if (delta > 0 && num - 1 > 0) {
            setNewActive(num - 1);
            moveToSection(num - 1);
        } else if (delta < 0 && num + 1 <= sections.length) {
            setNewActive(num + 1);
            moveToSection(num + 1);
        } else {
            return;
        }

        

    }
    
    function clearActives () {
        navItems.forEach(item => item.dataset.active = 'false');
    }

    function setNewActive (num) {
        if (animationState !== 1) return;
        clearActives();
        let aimItem = navBar.querySelector(`*[data-number="${num}"]`)
            aimItem.dataset.active = 'true';
            oldSection = (oldSection == undefined) ? +localStorage.getItem('section-num') : (oldSection !== undefined && newSection !== undefined) ? newSection : oldSection;

        newSection = +num;


        writeNumToStorage(num);
    }

    function setFirstTime () {
        let num = localStorage.getItem('section-num');
        if (num == undefined || null || NaN) num = 1;
        sections[num - 1].style.cssText = "opacity: 1; z-index: 1;";
        oldSection = +num;
        
        setNewActive(num);
        setActiveMenuItem(num);
    }
    
    function writeNumToStorage (num) {
        localStorage.setItem('section-num', num)
    }

    function moveToSection (num) {
        let moveToSection   = sections[num - 1];
        let currentSection  = sections[oldSection - 1];
        let currentNum      = oldSection;
        let moveNum         = num;

        //animation params
        let speed   = 0.5;
        let offset  = 70;
        
        let movesDirection = {
            'moveUp': () => {
                TweenMax.set(moveToSection, {
                    opacity: 0,
                    y: offset
                });

                let tl = new TimelineMax({onComplete: movesDirection['onComplete']});
                    tl.to(currentSection, speed, {
                        opacity: 0,
                        y: -offset,
                        'z-index': 0
                    })
                    tl.to(moveToSection, speed, {
                        opacity: 1,
                        y: 0,
                        'z-index': 1
                    })
                return tl;
            },
            'moveDown': () => {
                TweenMax.set(moveToSection, {
                    opacity: 0,
                    y: -offset
                });

                let tl = new TimelineMax({onComplete: movesDirection['onComplete']});
                    tl.to(currentSection, speed, {
                        opacity: 0,
                        y: offset,
                        'z-index': 0
                    })
                    tl.to(moveToSection, speed, {
                        opacity: 1,
                        y: 0,
                        'z-index': 1
                    })
                return tl;
            },
            'onComplete': () => {
                animationState = 1;
            }
        }

        let tl = new TimelineMax();
        if (currentNum > moveNum && animationState == 1) {
            animationState = 0;
            movesDirection['moveDown']();
        } else if (currentNum < moveNum && animationState == 1) {
            animationState = 0;
            movesDirection['moveUp']();
        } else {
            return;
        }


        clearMenuItemsActives();
        setActiveMenuItem(num);
        
    }

    function assideMenuhandler(e) {
        e.preventDefault();
        let item = e.target;
        let itemClassList = item.classList;
        

        if (itemClassList.contains('aside-menu')) return;
        else if (itemClassList.contains('aside-menu__item')) item = e.target.children[0];
        else if (itemClassList.contains('aside-menu__link')) item = e.target;
        else return;

        let sectionNumber = item.getAttribute('href');
        if (animationState > 0) {
            setNewActive(sectionNumber);
            moveToSection(sectionNumber);
    
            clearMenuItemsActives();
            setActiveMenuItem(sectionNumber);
        } else {
            return;
        }
    }

    function getMenuItemElementByNumber(number) {
        let items = document.querySelectorAll('.aside-menu__link');
        return items[number -1];
    }

    function setActiveMenuItem(number) {
        let item = getMenuItemElementByNumber(number);
            item.dataset.active = 'true';
    }

    function clearMenuItemsActives() {
        let items = document.querySelectorAll('.aside-menu__link').forEach(item => item.dataset.active = 'false');        
    }
    
})();
