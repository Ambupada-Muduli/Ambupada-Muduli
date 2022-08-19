import { html, fixture, expect, defineCE } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';


import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('Renders the function',async ()=>{
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el).to.be.accessible;
  });
  it('Checking for amount',async ()=>{
    const el =await fixture(html`<basic-details></basic-details>`);
    expect(el.amount).to.be.equal(10000);
  });
  it('Checking for range',async ()=>{
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el.range).to.be.equal(2);
  });
  it('Checking for type',async()=>{
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el.type).to.be.a('null');
  });
  it('Checking for emiCalc',async()=>{
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el.emiCalc).to.be.equal(0);
  });
  it('Checking the type for amount',async ()=>{
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el.amount).to.be.a('number');
  });
  it('can instantiate an element', async () => {
    const el = await fixture(html`<lion-input .value="text"></lion-input>`);
    expect(el.getAttribute(".value")).to.be.equal("text");
  });

  // it.skip('Should enter amount greater than 2000', async()=>{
  //   const el = await fixture(html`<basic-details></basic-details>`);
  //   expect(el.min).to.be.equal(10000);
  // });

  it('dom check', async ()=>{
    const el = await fixture(`<basic-details><div id="word"></div></basic-details>`);
    expect(el).dom.to.equal('<basic-details><div id="word"></div></basic-details>');
  });

  it('light-dom check', async ()=>{
    const el = await fixture(`<basic-details><div id="word"></div></basic-details>`);
    expect(el).lightDom.to.equal('<div id="word"></div>');
  });

  it('check for id', async()=>{
    const el = await fixture(`<div id="word"></div>`);
    expect(el.id).to.equal('word');
  });

  it('capturedetails click button', async()=>{
    const el = await fixture(html`<basic-details></basic-details>`);
    const myFunctionStub = Sinon.stub(el, '_captureDetails');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionStub).to.have.callCount(0);

  });

  it('toDashBoard click button', async()=>{
    const el = await fixture(html`<basic-details></basic-details>`);
    const myFunctionStub = Sinon.stub(el, '_toDashboard');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionStub).to.have.callCount(1);
  });

  it('numToWord keyup event', async()=>{
    const el = await fixture(html`<basic-details></basic-details>`);
    const myFunctionStub = Sinon.stub(el, '_numToWord');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionStub).to.have.callCount(0);
  });

  // it('dispatches a custom event on connectedCallback', async () => {
  //   class BasicDetails extends LocalizeMixin(class {}) {};
  //   const el = new Foo();
  //   setTimeout(() => el.connectedCallback());
  //   const ev = await fixture(html`<basic-details></basic-details>`);
  //   expect(ev).to.exist;
  // });

  it('called _captureDetails', async() => {
     setTimeout( async() => {
      const el = await fixture(html`<basic-details></basic-details>`);      
      const spy = sinon.spy(el._captureDetails);
      el.requestUpdate();
      await el.updateComplete;
    
      el.shadowRoot.getElementById('lion-btn').click();      
      expect(spy.called).to.be.true;
     }, 2000);
  });

});
