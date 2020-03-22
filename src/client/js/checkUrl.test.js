import { is_url } from "./checkUrl";

test('Invalid URL', () => {
    expect(is_url('Not a valid url')).toBeFalsy();
}) 

test('Valid URL', () => {
    expect(is_url('https://www.google.com/')).toBeTruthy();
}) 