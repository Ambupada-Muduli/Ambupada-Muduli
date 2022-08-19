import { html, fixture, expect } from '@open-wc/testing';
import Sinon ,{ stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('for render of function',async()=>{
    const el = await fixture(html`<loan-success></loan-success>`);
    expect(el).to.be.accessible;
  });

  it('capturedetails toHome button', async()=>{
    const el = await fixture(html`<loan-error></loan-error>`);
    const myFunctionStub = Sinon.stub(el, '_toHome');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionStub).to.have.callCount(1);

  });
  
});

describe('error screen', () => {
  // Write test cases inside this block

  it('for render of function',async()=>{
    const el = await fixture(html`<loan-error></loan-error>`);
    expect(el).to.be.accessible;
  });

  it('capturedetails toHome button', async()=>{
    const el = await fixture(html`<loan-error></loan-error>`);
    const myFunctionStub = Sinon.stub(el, '_toHome');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionStub).to.have.callCount(1);

  });
});
