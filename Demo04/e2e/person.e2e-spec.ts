import * as fs from 'fs';
import { Person } from '../app/person-detail/person';
import { browser, by, element } from 'protractor/built';

describe("Person update", () => {
    beforeEach(() => {
        browser.get("/");
    });

    it("should show three person when we first load the app", () => {
        let persons = element.all(by.css(".person-table .person"));
        expect(persons.count()).toBe(3);
    });

    it("should show the first persons detail page", () => {
        let person = element.all(by.css(".person-table .person")).first();
        person.click();
        expect(browser.getCurrentUrl()).toContain("/person/1");

        let inputFieldText = element(by.id("inputFirstname")).getAttribute("value");

        expect(inputFieldText).toBe("Thomas");
    });

    it("should update the first persons firstname", () => {
        let person = element.all(by.css(".person-table .person")).first();
        person.click();

        let inputField = element(by.id("inputFirstname"));
        let btnSubmit = element(by.css("button[type=submit]"));

        inputField.clear();

        browser.takeScreenshot().then((png) => {
            let stream = fs.createWriteStream("screenshot-1.png");
            stream.write(new Buffer(png, "base64"));
            stream.end();
        });

        inputField.sendKeys("Hans");

        browser.takeScreenshot().then((png) => {
            let stream = fs.createWriteStream("screenshot-2.png");
            stream.write(new Buffer(png, "base64"));
            stream.end();
        });
        btnSubmit.click();

        let personFirstname = element.all(by.css(".person-table .person td")).first();
        expect(personFirstname.getText()).toBe("Hans");
    });

});