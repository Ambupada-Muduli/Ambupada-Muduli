import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block

  it('check for accesibility',async ()=>{
    const el = await fixture(html`<loanemi-details></loanemi-details>`)
    expect(el).to.be.accessible();
  });

  it('Check for title type', async()=>{
    const el = await fixture(html`<div class="emi-details"></div>`);
    expect(el).to.have.class('emi-details');
  });

  // it('toDashBoard click button', async()=>{
  //   const el = await fixture(html`<loanemi-details></loanemi-details>`);
  //   const myFunctionStub = Sinon.stub(el, '_toBasicDetails');
  //   el.requestUpdate();
  //   await el.updateComplete;
  //   el.shadowRoot.querySelector('lion-button').click();
  //   expect(myFunctionStub).to.have.callCount(1);
  // });
});
