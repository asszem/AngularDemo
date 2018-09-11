// Source: https://jasmine.github.io/tutorials/your_first_suite
describe('A suite', function() {
  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});

describe('A suite is just a function', function() {
  let a;

  it('and so is a spec', function() {
    a = true;

    expect(a).toBe(true);
  });
});

describe('A spec', function() {
  let foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it('is just a function, so it can contain any code', function() {
    expect(foo).toEqual(1);
  });

  it('can have more than one expectation', function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });

  describe('nested inside a second describe', function() {
    let bar;

    beforeEach(function() {
      bar = 1;
    });

    it('can reference both scopes as needed', function() {
      expect(foo).toEqual(bar);
    });
  });
});

describe('Pending specs', function() {

  xit('can be declared xit in a non-disabled suite, so it will be PENDING', function() {
    expect(true).not.toBe(false);
  });

  it('can be declared with \'it\' but without a function');

  // Not working properly, pending() will result a failure
  // it('can be declared by calling \'pending\' in the spec body', function() {
  //   expect(true).toBe(false);
  //   pending('this is why it is pending');
  // });
});

describe('The \'toBe\' matcher compares with ===', function() {
  it('and has a positive case', function() {
    expect(true).toBe(true);
  });

  it('and can have a negative case', function() {
    expect(false).not.toBe(true);
  });
});

// Disabled suites and any specs inside them are skipped when run and thus their results will show as pending.
xdescribe('This suite is DISABLED', function() {
  it('is an enabled spec in a disabled suit, so it will be SKIPPED', function() {
    expect(true).toBe(true);
  });

  it('is an enabled spec in a disabled suit, so it will be SKIPPED', function() {
    expect(true).toBe(true);
  });

  // disabled spec
  xit('is a disabled SPEC, it will be SKIPPED', function() {
    expect(true).not.toBe(false);
  });

  // disabled spec
  xit('is a disabled SPEC, it will be SKIPPED', function() {
    expect(true).not.toBe(false);
  });
});

describe('A suite with some shared setup', function() {
  let foo = 0;
  let eachCounter = 0;
  let allCounter = 0;

  beforeEach(function() {
    foo += 1;
    eachCounter++;
  });

  afterEach(function() {
    foo = 0;
  });

  // Called only once
  beforeAll(function() {
    foo = 1;
    allCounter++;
  });

  // Called only once
  afterAll(function() {
    foo = 0;
  });
});

describe('A spec', function() {
  let counter = 0;

  beforeEach(function() {
    this.foo = 0;
    counter++;
  });

  it('can use the `this` to share state', function() {
    expect(this.foo).toEqual(0);
    this.bar = 'test pollution?'; // scope is inside of this it only
  });

  it('prevents test pollution by having an empty `this` created for the next spec', function() {
    expect(this.foo).toEqual(0);
    expect(this.bar).toBe(undefined);
    console.log(`counter=${counter}`);
  });
});
