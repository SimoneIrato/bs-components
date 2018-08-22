import { TestWindow } from '@stencil/core/testing';
import { BsTooltip } from './bs-tooltip';

// abandoned because I could not get custom events working in the test
// and can not use stenciljs events because I need preventDefault

// similar to: https://github.com/twbs/bootstrap/blob/master/js/tests/unit/tooltip.js

describe('my-component', () => {
  it('should build', () => {
    expect(new BsTooltip()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLBsTooltipElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();

    });

    it('should return the element', async () => {
      element = await testWindow.load({
        components: [BsTooltip],
        html: '<bs-tooltip class="btn btn-secondary" data-placement="top" title="Tooltip on top">Tooltip on top</bs-tooltip>'
      });
      // console.log('testWindow.document.body.innerHTML: ', testWindow.document.body.innerHTML);
      const myElement = testWindow.document.body.querySelector('bs-tooltip');
      // console.log('myElement: ', myElement);
      await testWindow.flush();
      expect(element.tooltip()).toStrictEqual(myElement);
    });


    it('should expose default settings', async () => {
      element = await testWindow.load({
        components: [BsTooltip],
        html: '<bs-tooltip class="btn btn-secondary" data-placement="top" title="Tooltip on top">Tooltip on top</bs-tooltip>'
      });
      // console.log('element: ', element.parentElement.innerHTML);
      // console.log("element.getAttribute('title'): ", element.getAttribute('title'));
      // console.log('element: ', element.parentElement.parentElement.innerHTML);
      await testWindow.flush(); // waits for
      expect(element.defaults).toBeInstanceOf(Object);
    });


    it('should empty title attribute', async () => {
      element = await testWindow.load({
        components: [BsTooltip],
        html: '<bs-tooltip class="btn btn-secondary" data-placement="top" title="Tooltip on top">Tooltip on top</bs-tooltip>'
      });
      // console.log('element: ', element.parentElement.innerHTML);
      // console.log("element.getAttribute('title'): ", element.getAttribute('title'));
      // console.log('element: ', element.parentElement.parentElement.innerHTML);
      await testWindow.flush(); // waits for
      expect(element.getAttribute('title')).toBe('');
    });


    it('should add data attribute for referencing original title', async () => {
      element = await testWindow.load({
        components: [BsTooltip],
        html: '<bs-tooltip title="Another tooltip" />'
      });

      await testWindow.flush(); // waits for
      expect(element.getAttribute('data-original-title')).toBe('Another tooltip');
    });

    // it('should add aria-describedby to the trigger on show', async () => {
    //   element = await testWindow.load({
    //     components: [BsTooltip],
    //     html: '<bs-tooltip title="Another tooltip" />'
    //   });

    //   // let eventSpy = jest.fn();

    //   element.tooltip('show');
    //   await testWindow.flush();

    //   console.log('testWindow.document.body.innerHTML: ', testWindow.document.body.innerHTML);

    //   console.log('element.parentElement.parentElement.innerHTML: ', element.parentElement.parentElement.innerHTML);

    //   // const id = testWindow.document.body.querySelector('.tooltip').getAttribute('id');
    //   // console.log('id: ', id);



    //   expect(element.getAttribute('data-original-title')).toBe('Another tooltip');
    // });


    // it('should work without parameters', () => {
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    // });

    // it('should work with a first name', async () => {
    //   element.first = 'Peter';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    // });


    // it('has name in it', async () => {
    //   element.first = 'Jason';
    //   await testWindow.flush();
    //   // console.log('element: ', element.parentElement.innerHTML);
    //   // console.log('element: ', element.parentElement.parentElement.innerHTML);
    //   // console.log('document.body: ', document.body.innerHTML);
    //   console.log('TestWindow: ', testWindow.)

    //   expect(element.textContent.trim()).toContain('Jason');
    // });

    // it('should work with a last name', async () => {
    //   element.last = 'Parker';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    // });

    // it('should work with both a first and a last name', async () => {
    //   element.first = 'Peter';
    //   element.last = 'Parker';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    // });
  });
});