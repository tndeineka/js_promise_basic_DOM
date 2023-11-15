'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const printMessage = (className, text) => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message ${className}">${text}</div>
  `);
};

function getFirstPromise() {
  return new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  });
}

function getSecondPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });
}

const promise1 = getFirstPromise();
const promise2 = getSecondPromise();

promise1
  .then((message) => printMessage('success', message))
  .catch((error) => printMessage('error-message', error));

promise2
  .then((message) => printMessage('success', message))
  .catch((error) => printMessage('error-message', error));
