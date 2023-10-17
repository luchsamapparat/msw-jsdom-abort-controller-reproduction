import { JSDOM } from 'jsdom';
import { beforeAll, expect } from 'vitest';

const jsdom = new JSDOM('');

const GlobalAbortController = globalThis.AbortController;

beforeAll(() => {
    // the AbortController on global remains the same throught the setupFile
    expect(GlobalAbortController).toBe(globalThis.AbortController);

    // the JSDOM AbortController implementation is the same as the one on global
    expect(jsdom.window.AbortController.toString()).toBe(globalThis.AbortController.toString());
});