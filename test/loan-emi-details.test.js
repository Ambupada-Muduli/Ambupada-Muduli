import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

const el = await fixture(html`<loanemi-details></loanemi-details>`)

describe('Loan EMI details', () => {
  // Write test cases inside this block
  it('accessiblity check', async()=>{
    expect(el).to.be.accessible();
  });

  it('check for the heading', async()=>{
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.be.exist;
    expect(h2.textContent).to.equal('EMI Details');
  });

  it('for toBasicDetails', async()=>{
    const myFunctionStub = Sinon.stub(el, '_toBasicDetails');
    button[1].click();
    expect(myFunctionStub.calledOnce).to.be.true;
  });

  it('for toCustomer', async()=>{
    const myFunctionStub = Sinon.stub(el, '_toCustomer');
    button[1].click();
    expect(myFunctionStub.calledOnce).to.be.true;
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
