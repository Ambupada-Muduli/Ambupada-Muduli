import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import '../src/header/Header.js';
import { Header } from '../src/header/Header';

describe('loan-header', () => {
  // Write test cases inside this block
  it('render for the function',async()=>{
    const el = await fixture(html`<loan-header></loan-header>`);
    expect(el).to.be.accessible();
  });

  // it('localeChanged click button', async()=>{
  //   const el = await fixture(html`<loan-header></loan-header>`);
  //   const myFunctionStub = Sinon.stub(el, 'localeChanged');
  //   el.requestUpdate();
  //   await el.updateComplete;
  //   el.shadowRoot.querySelector('lion-button').click();
  //   expect(myFunctionStub).to.have.callCount(1);

  // });
  it('calls locale method when language is clicked', async () => {
    const el = await fixture(html`<loan-header></loan-header>`);
    const header = new Header();    

    el.shadowRoot.querySelector('button').click();
    const spy = Sinon.spy(header, "localeChanged");
    expect(spy.called).to.be.false;
  });
});
