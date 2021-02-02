import {TodoList} from '../todo-list.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('todo-list', () => {
  test('is defined', () => {
    const el = document.createElement('todo-list');
    assert.instanceOf(el, TodoList);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<todo-list></todo-list>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<todo-list name="Test"></todo-list>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<todo-list></todo-list>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
