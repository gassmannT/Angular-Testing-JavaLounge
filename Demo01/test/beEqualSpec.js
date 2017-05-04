describe("Example to show the difference between toBe() and toEqual()", function () {

    beforeEach(function () {
        this.a = { bar: "baz" };
        this.b = { foo: this.a };
        this.c = { foo: this.a };
    });

    it('Using a strict comparison (===), some things are "the same"', function () {
        expect(this.b.foo.bar === this.c.foo.bar).toEqual(true);
        expect(this.b.foo.bar === this.a.bar).toEqual(true);
        expect(this.c.foo === this.b.foo).toEqual(true);
    })

    it('"equal", are not "the same"', function () {
        expect(this.b === this.c).toEqual(false);
    });

    it('wrapper', function () {
        expect(this.b.foo).toBe(this.c.foo);
        expect(this.b.foo === this.c.foo).toEqual(true);
    });

    it('differences', function () {
        expect(this.b).not.toBe(this.c);
        expect(this.b).toEqual(this.c);
    });
});