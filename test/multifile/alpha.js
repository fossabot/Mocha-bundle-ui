


bundle({ multi: "across files" }, function() {
    let bundleSuite = this;

    describe("Tests from file `alpha.js`", function() {
        it("should be a part of a bundle with multiple tests", function() {
            expect(bundleSuite.suites.length).to.be.above(1);
        });
    });
});