export default class ToggleMenu {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }

    vars() {
        this.selectors = {
            body: 'data-body',
            header: 'data-header',
            nav: 'data-nav',
            menu: 'data-menu',
            overlay: 'data-overlay',
            menuOpenClass: 'menu-open',
            navOpenClass: 'nav-open',
            navCloseClass: 'nav-close',
            activeClass: 'active',
            overflowClass: 'overflow',
            headerClass: 'header-scroll-in'
        }

        this.body = document.querySelector(`[${this.selectors.body}]`);
        this.header = document.querySelector(`[${this.selectors.header}]`);
        this.nav = document.querySelector(`[${this.selectors.nav}]`);
        this.menu = document.querySelector(`[${this.selectors.menu}]`);
        this.overlay = document.querySelector(`[${this.selectors.overlay}]`);

        if (!this.body || !this.header || !this.nav || !this.menu || !this.overlay) return false;

        this.expanded = this.menu.getAttribute('aria-expanded') === false ? false : true;
        this.open = false;
        this.duration = 1000;
        this.touchDuration = 1300;
        this.timer;
        this.touchEnabled = true;

        return true;
    }

    // Hamburger menu event listener
    setupEvents() {
        this.menu.addEventListener('click', () => this.toggle());
        this.overlay.addEventListener('click', () => this.hide());
        window.addEventListener('resize', () => this.disableOnDesktop());
        window.addEventListener('touchstart', (event) => {
            this.startPosition = Math.floor(event.touches[0].clientX);
        })
        window.addEventListener('touchmove', (event) => {
            this.endPosition = Math.floor(event.touches[0].clientX);
        })

        window.addEventListener('touchend', () => {
            this.onTouchEnd();
        })
    }

    // Toggle menu
    toggle() {
        !this.open ? this.show() : this.hide();
    }
    
    // Show animation when menu is open
    show() {
        this.menu.style.pointerEvents = 'none';
        
        this.nav.classList.add(`${this.selectors.menuOpenClass}`);
        this.nav.classList.add(`${this.selectors.navOpenClass}`);
        this.overlay.classList.add(`${this.selectors.activeClass}`);
        this.body.classList.add(`${this.selectors.overflowClass}`);
        this.body.classList.add(`${this.selectors.headerClass}`);
        this.header.classList.add(`${this.selectors.headerClass}`);
        
        this.expanded = true;
        this.menu.setAttribute('aria-expanded', this.expanded);
        this.open = true;
        
        this.timer = window.setTimeout(() => {
            this.menu.style.pointerEvents = 'all';
            this.timer = false;
        }, this.duration);
    }
    
    // Show animation when menu is close
    hide() {
        this.menu.style.pointerEvents = 'none';
        
        this.nav.classList.add(`${this.selectors.navCloseClass}`);
        this.nav.classList.remove(`${this.selectors.menuOpenClass}`);
        this.overlay.classList.remove(`${this.selectors.activeClass}`);
        
        this.expanded = false;
        this.menu.setAttribute('aria-expanded', this.expanded);
        
        this.timer = window.setTimeout(() => {
            this.nav.classList.remove(`${this.selectors.navOpenClass}`);
            this.nav.classList.remove(`${this.selectors.navCloseClass}`);
            this.body.classList.remove(`${this.selectors.overflowClass}`);
            this.timer = false
            this.menu.style.pointerEvents = 'all';
        }, this.duration)
        this.open = false;
    }
    
    // Disable mobile menu on desktop
    disableOnDesktop() {
        this.windowWidth = window.innerWidth;
        this.tabletBreakpoint = 769;

        if (this.windowWidth >= this.tabletBreakpoint) {
            this.nav.classList.remove(`${this.selectors.menuOpenClass}`);
            this.nav.classList.remove(`${this.selectors.navOpenClass}`);
            this.nav.classList.remove(`${this.selectors.navCloseClass}`);
            this.overlay.classList.remove(`${this.selectors.activeClass}`);
            this.body.classList.remove(`${this.selectors.overflowClass}`);
            this.expanded = false;
            this.menu.setAttribute('aria-expanded', this.expanded);
            this.open = false;
        }
    }
    // Function to display mobile nav on mobile touch slide
    onTouchEnd() {
        if (!this.touchEnabled) return false;

        this.positionChange = this.endPosition - this.startPosition;
        this.changeThreshold = 100;

        if (this.positionChange > this.changeThreshold) {
            this.toggle();
        }
        
        this.touchEnabled = false

        window.setTimeout(() => {
            this.touchEnabled = true;
        }, this.touchDuration)
    }
}