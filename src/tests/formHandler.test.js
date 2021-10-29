import formHandler from "../client/js/formHandler";
import "babel-polyfill";

describe('Test,  "formHandler"' , () => {
    test('It should exist and not null', async () => {
        expect(formHandler).toBeDefined()
        expect(formHandler).not.toBeNull();
    });
});