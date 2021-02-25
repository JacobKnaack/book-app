'use strict';

const { I } = inject();

let bookId = null;

Given('the user is on the book detail page and would like to update the information stored for the book', async () => {
  I.amOnPage('/');
  const links = await I.grabAttributeFrom({ xpath: '//a' }, 'href');
  const bookLink = links.filter(href => href.includes('/books/'))[0];
  bookId = bookLink.match(/[^/]+(?=\/$|$)/)[0];
  I.click({ xpath: `//a[@href='/books/${bookId}']` });
});

When('the user clicks on the {string} button', (buttonText) => {
  I.click(buttonText);
});

Then('the form containing the details should be revealed', () => {
  I.seeElement({ xpath: '//form' });
});

const newTitle = 'Something New';

Given('the user clicks {string} and updates book details in the form', (buttonText) => {
  I.amOnPage(`/books/${bookId}`);
  I.click(buttonText);
  I.fillField('title', newTitle);
});

When('the user click on the {string} button', (buttonText) => {
  I.click(buttonText);
});

Then('the user-provided details for that book should be saved', () => {
  I.seeInCurrentUrl(`/books/${bookId}`);
  I.see(newTitle);
});

Given('the User on the book detail page would like to remove a book from the collection', () => {
  I.amOnPage(`/books/${bookId}`);
});

When('the User clicks on the {string} button', (buttonText) => {
  I.click(buttonText);
});

Then('the book should be removed from the collection', () => {
  I.dontSeeInCurrentUrl(bookId);
});
