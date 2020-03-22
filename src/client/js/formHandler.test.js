import { checkStringLen } from './formHandler';

test('Error Not a string', () => {
    expect(checkStringLen(25)).toBe("Not a string");
}); 

test('Valid URL', () => {
    expect(checkStringLen("Test")).toBe(4);
});