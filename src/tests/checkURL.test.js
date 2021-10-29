import checkURL from "../client/js/checkURL"

test('Test url checker', () => {
    expect(checkURL).toBeDefined()
    expect(checkURL).not.toBeNull();
    expect(checkURL('https://www.npmjs.com/package/regenerator-runtime')).toBeTruthy()
    expect(checkURL('google')).toBeFalsy()
})