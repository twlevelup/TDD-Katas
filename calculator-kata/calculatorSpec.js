describe("A calculator", function() {
    
    it("can add 1 and 1 together", function() {
        expect(add(1,1)).toEqual(2);
    });

    it("can add 2 and 2 together", function() {
        expect(add(2,2)).toEqual(4);
    });

    it("can multiply 2 and 2 together", function() {
        expect(multiply(2,2)).toEqual(4);
    });
});
