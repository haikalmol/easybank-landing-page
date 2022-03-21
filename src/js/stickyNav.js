export default class StickyNav {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }

    vars() {
        this.selectors = {
            body: 'data-body',
            header: 'data-header',
            sectionKv: 'data-kv',
            activeClass: 'header-scroll-in',
            inActiveClass: 'header-scroll-out'
        }
        
        this.body = document.querySelector(`[${this.selectors.body}]`);
        this.header = document.querySelector(`[${this.selectors.header}]`);
        this.sectionKv = document.querySelector(`[${this.selectors.sectionKv}]`);
        if (!this.body || !this.header || !this.sectionKv) return false;
        
        this.isInitialized = false;
        this.animDuration = 300;
        return true;
    }
    
    setupEvents() {
        this.navObserver(this.sectionKv);
    }

    navObserver(element) {
        this.options = {
            rootMargin: '0px',
            threshold: 0.15
        }

        this.observer = new IntersectionObserver(entries => {
            if (this.isInitialized) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        this.header.classList.add(`${this.selectors.activeClass}`);
                        this.body.classList.add(`${this.selectors.activeClass}`);
                    } else {
                        this.header.classList.add(`${this.selectors.inActiveClass}`);
                        window.setTimeout(() => {
                            this.header.classList.remove(`${this.selectors.activeClass}`);
                            this.header.classList.remove(`${this.selectors.inActiveClass}`);
                            this.body.classList.remove(`${this.selectors.activeClass}`);
                        }, this.animDuration)
                    }
                })
            }
            this.isInitialized = true;
        }, this.options)
        this.observer.observe(element);
    }
}