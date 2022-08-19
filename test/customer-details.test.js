import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block

  it('Renders the function',async ()=>{
    const el = await fixture(html`<customer-details></customer-details>`);
    expect(el).to.be.accessible();
  });

  it('_toEmidetails click button', async()=>{
    const el = await fixture(html`<customer-details></customer-details>`);
    const myFunctionStub = Sinon.stub(el, '_toEmidetails');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionStub).to.have.callCount(1);
  });
  
  
  
});
