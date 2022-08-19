import { html, fixture, expect } from '@open-wc/testing';

import sinon from 'sinon';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('Render the properties the function', async()=>{
    const el = await fixture(html`<dash-board></dash-board>`);
    expect(el).to.be.accessible();
  });

  it('Check for title type', async()=>{
    const el = await fixture(html`<dash-board></dash-board>`);
    expect(el.title).to.be.a('string');
  });

  it('Check for counter type', ()=>{
    setTimeout(async ()=>{
    const el = await fixture(html`<dash-board></dash-board>`);
    expect(el.counter).to.be.a('Number');
    },2000);
  });

  it('Check for counter value', ()=>{
    setTimeout(async ()=>{
    const el = await fixture(html`<dash-board></dash-board>`);
    expect(el.counter).toBe(5);
    },2000);
  });

  it('Check for title value', ()=>{
    setTimeout(async ()=>{
    const el = await fixture(html`<dash-board></dash-board>`);
    expect(el.title).toBe('Hey there');
    },2000);
  });

  it('has a static shadowDom', async () => {
    const el = (await fixture(html` <dash-board></dash-board> `));
    expect(el).shadowDom.to.equal(`
    <loan-header></loan-header>
    <div id="outlet"></div>
    `);

    expect(el).lightDom.to.equal(`
    `)
  });


  it('Render increment function',async ()=>{
    const el = await fixture(html`<dash-board></dash-board>`);
    expect(el).to.be.accessible();

  });

  it('Counter value will be',async ()=>{
    const el = await fixture(html`<dash-board></dash-board>`);
    expect(el).to.have.property('title').is.a("string");
  })

  it('dom check', async ()=>{
    const el = await fixture(html`<div><dash-board></dash-board></div>`);
    expect(el).dom.to.equal('<div><dash-board></dash-board></div>');
    expect(el).lightDom.to.equal('<dash-board></dash-board>');
  });


  it('spy check for increment function', ()=>{
    setTimeout(async()=>{
      const el = await fixture(html`<dash-board></dash-board>`);
      const logSpy = sinon.spy(el , counter);
      //el.counter = 6;
      expect(logSpy.callCount).to.equal();
    },3000);

 });

 it('passes the a11y audit', async () => {
  const el = await fixture(html`
  <dash-board></dash-board>
  `);

  expect(el).shadowDom.to.be.accessible();
});

  
});


// describe('MyElement', () => {
//   it('has a default title "Hey there" and counter 5', () => {
//     setTimeout(async()=>{
//       const el = await fixture(html`<dash-board></dash-board>`);

//     //expect(el.title).to.equal('Hey there');
//     expect(el.counter).to.equal(5);
//     });
//   });

//   it('increases the counter on button click', async () => {
//     const el = await fixture(html`
//       <dash-board></dash-board>
//     `);
//     el.shadowRoot.querySelector('button').button();

//     expect(el.counter).to.equal(6);
//   });
// });
