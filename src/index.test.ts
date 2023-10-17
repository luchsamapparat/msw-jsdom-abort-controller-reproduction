import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, expect, test } from 'vitest';
import { example } from './index';

const server = setupServer(
    http.get('http://example.org', () => {
        return HttpResponse.text('Hello!');
    })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('example', async () => {
    const hello = await example();
    expect(hello).toBe('Hello!')
})