import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import '../src/header/Header.js';
import { Header } from '../src/header/Header';

const el = await fixture(html`<loan-header></loan-header>`)
const button = el.shadowRoot.querySelectorAll('button');

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

  it('check for the form class basic',async()=>{
    const el = await fixture(html`<loan-header></loan-header>`)
    const div = el.shadowRoot.querySelector('div');
    expect(div).to.exist;
    expect(div).to.have.class('container');
  });

  it('check for the color change of button',async()=>{
    button[0].click();
    expect(button[0]).to.have.class('bg-btn-color');
  });

  it('check for the color change of button',async()=>{
    
    button[0].click();
    expect(button[1]).to.have.class('btn-cursor');
  });

  it('check for the color change of button',async()=>{
    button[1].click();
    expect(button[1]).to.have.class('bg-btn-color');
  });
});
