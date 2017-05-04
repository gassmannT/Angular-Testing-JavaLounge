import { browser, element, by } from 'protractor';

describe("QuickStart E2E Tests", () => {

    beforeEach(() => {
        browser.get("/");
    });

    it("should display title", () => {
        expect(element(by.css("h1")).getText()).toBe("Hallo JavaLounge");
    });

});