class OverlayManuDialog {
    selectors = {
        root: "[data-js-overlay-menu]",
        dialog: "[data-js-overlay-menu-dialog]",
        burgerButton: "[data-js-overlay-menu-burger-button]",
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        this.bindEvents()
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick)
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.selectors.burgerButton),
        this.dialogElement.open = !this.dialogElement.open,
        document.documentElement.classList.toggle("is-lock")
    }
}