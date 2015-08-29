<<<<<<< HEAD
describe( "Factorial Test", function () {

	it ( "For a non-number", function() {

		expect( factorial(" ") ).toBe(false);

	});

	it ( "Factorial of 1", function() {

		expect( factorial(1) ).toBe(1);
		
	});

	it ( "Factorial of 0", function() {

		expect( factorial(0) ).toBe(1);

	});

	it ( "Factorial of negative number", function() {

		expect( factorial(-10) ).toBe(false);

	});

	it ( "Factorial of five ", function() {

		expect( factorial(5) ).toBe(120);

	});

	it ( "toBe or not toBe ", function() {
		expect( 3 ).toBe(3.0);

	});

}) ;
=======
describe("Factorial Test", function () {
  it("For a non-Number", function (){
    expect(factorial("")).toBe(false);
  });

  it("Negative Number", function () {
    expect(factorial(-10)).toBe(false);
  });

  it("Factorial of 1", function() {
    expect(factorial(1)).toBe(1);
  });

  it("Factorial of 0", function () {
    expect(factorial(0)).toBe(1);
  });

  it("Factorial of 5", function () {
    expect(factorial(5)).toBe(120);
    expect([1]).toBe([1]);
  });
});
>>>>>>> 94383d958cb313e89b1518c5a9f48d310a1f4324
