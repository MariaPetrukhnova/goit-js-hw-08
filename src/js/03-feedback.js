import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = "feedback-form-state";

let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput (e) {
    formData[e.target.name] = e.target.value;
    // console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

savedFormData();

function onFormSubmit(e) {
    e.preventDefault();

    console.log(formData);

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
 }


function savedFormData() {
    const savedMsg = localStorage.getItem(STORAGE_KEY);
    formData = JSON.parse(savedMsg) || {};

    formData.email ? refs.input.value = formData.email : refs.input.value = "";
    formData.message ? refs.textarea.value = formData.message : refs.textarea.value = "";
}
