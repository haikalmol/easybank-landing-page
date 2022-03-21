export default class ArticlesHover {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }

    vars() {
        this.selectors = {
            cards: 'data-card',
            activeClass: 'hover'
        }

        this.cards = document.querySelectorAll(`[${this.selectors.cards}]`);
        if (!this.cards) return false;

        return true;
    }

    /* Cards event listeners */
    setupEvents() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', (event) => this.fade(event));
            card.addEventListener('mouseleave', () => this.clear());
        })
    }

    /* Add activeClass to cards that are not hovered */
    fade(event) {
        this.hoveredCard = event.target;
        this.cards.forEach(card => {
            this.hoveredCard != card ?
                card.classList.add(`${this.selectors.activeClass}`) :
                null;
        });
    }

    /* Remove activeClass from every card */
    clear() {
        this.cards.forEach(card => {
            card.classList.remove(`${this.selectors.activeClass}`)
        });
    }
}