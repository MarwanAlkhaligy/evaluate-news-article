import resetUI from "../client/js/resetUI"

test('Test to check if reset UI is defined and not Null', () => {
    expect(resetUI).toBeDefined()
    expect(resetUI).not.toBeNull();
})