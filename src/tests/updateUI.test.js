import updateUI from "../client/js/updateUI"

test('Test to check if updated UI is defined and not Null', () => {
    expect(updateUI).toBeDefined()
    expect(updateUI).not.toBeNull();
})