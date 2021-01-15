import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInput";
import showMoreStyles from "./modules/showMoreStyles";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    mask('[name="phone"]');
    modals();
    forms();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
});
