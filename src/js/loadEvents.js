export default class LoadEvents {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }

    vars() {
        this.selectors = {
            body: 'data-body',
            activeClass: 'loading'
        }

        this.body = document.querySelector(`[${this.selectors.body}]`);
        if (!this.body) return false;

        return true;
    }

    setupEvents() {
        window.addEventListener('load', () => this.show());
    }

    show() {
        this.body.classList.remove(`${this.selectors.activeClass}`);
    }
}