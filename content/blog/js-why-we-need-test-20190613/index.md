---
title: 'Why do we need tests'
date: '2019-06-13'
author: 'Amrit Pandey'
author_website: 'https://amritpandey.dev'
---

> Running a program without tests is like using a mathematical formula without proof. We “hope” program will work as expected for every input.

The process of converting pseudo code to a working program usually takes one special step at the end called testing. When we write a function we imagine parameters and expected return type. We check whether the function works by running it, if the results produced are as expected, we move on to next function. If something goes wrong we study the results, fix the problem and re-run the function until it yields a correct result.

But this process of manual re-run to check for errors often lead us to miss some cases. For example, function `foo(a)` gives the expected result but `foo(b)` does not. We will then fix the code to make `foo(b)` work but forget to re-run and check `foo(a)`.

When we run functions we want expected results every time, and thus functions are designed that way, but it is impossible even for programmers to assure the correct output from a function on every execution. To tackle this issue, we use [automated testing](https://en.wikipedia.org/wiki/Test_automation).

An automated testing is a procedure where the tests are written separately in addition to the code. These tests are executed to check the expected output of the programs. The outputs of various specs and their test cases are validated with assertions. This way, whenever programmers change the code, they can run automated testing programs to validate results.

In this article we will see how to setup testing in nodejs. I will be using `Mocha` which is a testing framework for both front-end and back-end javascript. And we will discuss basics of testing by writing some specs and test cases for [lodash](https://lodash.com/) library.

## Setup

I have prepared a [github repo](https://github.com/ap4gh/testing_with_mocha) containing all the code and test files which are used in this tutorial. You should begin by cloning and installing the dependencies.

```
git clone https://github.com/ap4gh/testing_with_mocha.git
mv testing_with_mocha
npm install
```

Run the tests in terminal with following command.

```
npm run test
```

![Screenshot 2019-06-12 at 5.43.37 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1560341742640/osFyMlS6m.png)

The final version of testing code is in the `master` branch, however there is a `start` branch which contains boilerplate setup for you to practice. `npm run test` script hot reload mocha as you create new tests.

##  Specification

A specification or spec is an entity that describe what a functionality is expected to do in various cases. Example, Let us say we want to test `Math.max()` function,  we can write a spec in the following manner.

```js
describe('Math.max', function() {
    it('finds maximum of two numbers', function(done) {
        assert(Math.max(1, 10) === 10);
        done();
    });
});
```

This snippet is entirely one spec and contain three blocks.

**`describe`** As the name suggests, it describe what functionality we are testing. It takes a `String` description like 'Math.max' and an anonymous function as parameters.

**`it`** This block execute the testing code and assert the output. It also takes a `String` description of the test case and a `done` callback as parameters. The description of `it` blocks explains what the test case it about.

**`assert`** The output of any functionality is validated by comparing it with an expected value. Assert block compares the output and returns a boolean value.

**`done`** is special callback that tells mocha to conclude a test case. We will discuss more about that later in this tutorial.

## A Simple Test

All the test files are contained in a directory named `test` in root of the project directory. Testing frameworks look for this directory and execute every test file in it. In the cloned repo, open `test/test1.js` file which has following code.

```js
const assert = require('assert');
const _ = require('lodash');

describe('Loadash Array Test 1', () => {
    let testArray = [1, 2, 3, 4, 5];

    it('finds head of the array', (done) => {
        assert.equal(_.head(testArray), 1);
        done();
    });

    it('slice first 2 elements', (done) => {
        const slicedArray = _.take(testArray, 2);
        assert.equal(slicedArray.length, 2);
        assert(slicedArray.includes(1) && slicedArray.includes(2));
        done();
    });

});
```

This is a very simple test spec, it has one describe block and two test cases. The describe block explains what the spec is about. Describe block also have a variable `testArray` on which tests are performed.

The first case is about testing `_.head` method. As intended, this method should return first element in an array. This return value is then compared with the expected value of `1` in `testArray` variable. 

An assertion is done with `assert.equal` method. We could also have passed an expression instead of using `.equal` in assertion block.

```js
assert(_.head(testArray) === 1);
```

This is the basis of writing tests. We create a `describe` block to check a functionality and create multiple test cases with `it` blocks. We can also implement multiple assertions inside `it` blocks if required.

## Hooks

Hooks are user defined block of code that run outside the scope of tests. So if we want to execute a block of code that support tests but has nothing to do with the test cases directly we use hooks.

For example, `it` blocks after performing tests can change the original value of test variable `testArray`. This will lead to poor testing and incorrect assertions by other cases.

We can use a `beforeEach` hook that will reset the value of `testArray` variable before cases are executed. The hooks must be defined in the scope where they are needed. In our case we have defined a hook inside of `describe` block that will run before each `it` block.

```js
describe('Lodash String Test 1', () => {
    let testStr = '';

    beforeEach(() => {
        testStr = 'hello    ';
    });

    it('finds last character', (done) => {
        assert(!_.endsWith(testStr, 'd'));
        done();
    });

    it('finds last character to a position', (done) => {
        assert(_.endsWith(testStr, 'l', 3));
        done();
    });

    it('trims the extra space in the end', (done) => {
        assert.equal(_.trim(testStr), 'hello');
        done();
    });
});
```

Hooks take an anonymous function as a parameter. In the above code a simple `beforeEach` is defined inside `describe` that will reset the value of `testStr` to `hello   ` before `it` blocks are executed.

Mocha offers three more hooks, `afterEach`, `after` and `before`. After and before hooks runs only one time in the defined scope. If you want to define a hook that will run before or after entire test procedure, you can put them inside a `helper` file. In the cloned repo you will find a `helper.js` file containing `after` and `before`  hooks.

## Nested Describe

If a functionality have sub-functionality that could utilize their own spec, you can nest them in parent spec.

```js
describe('Objects Test Specs', () => {
    let testObj = {};

    beforeEach(() => {
        testObj['a'] = {
            key: 'a',
            value: 'A'
        }
        testObj['b'] = {
            key: 'b',
            value: 'B'
        }
    });

    describe('Lodash Object Test 1', () => {
        it('finds associated key for a value', (done) => {
            const key = _.findKey(testObj, { key: 'a', value: 'A' });
            assert.equal(key, 'a');
            done();
        });

        it('checks if key exist', (done) => {
            assert(!_.has(testObj, 'c'));
            done();
        });
    });
}
```

In the above code, spec *Lodash Object Test 1* is nested inside of *Objects Test Specs*. The `beforeEach` hook applies to each **spec** before execution.

## Working with Promises

Mocha execute tests asynchronously, meaning it will not wait for a case to finish before executing the next. While working with promises the program might need to wait for sometime.

To work with promises, you can utilize `done` callback. Lets see it with an example.

```
const assert = require('assert');
const wait = require('../src/wait');

describe('wait Promise', () => {
    it('returns \'completed\' after 1 sec', (done) => {
        wait.then(value => {
            assert(value === 'completed');
            done(); // testing finish here
        });
    });
});
```

![Screenshot 2019-06-12 at 5.43.37 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1560342577480/1JeydfXHC.png)

In above code `wait` promise takes 1 second to return a value. Done is called inside of `.then` block to tell mocha to conclude the test. `done` is an important callback that must be passed after each test case is asserted.

## Conclusion

Something that I did not explained fully is `assert` module, it is available directly via `node`. You can read more about it [here](https://nodejs.org/dist/latest-v10.x/docs/api/assert.html). If you followed this article you have attained the minimum requirement of knowing how to setup and run test in javascript. Setting up tests in a javascript/node project is easy but your tests are only as good as your assertion logic. If you have any suggestion/query please comment down below or DM me on [twitter](https://twitter.com/DiaryOfDev).

Further reading:
- [Mocha](https://mochajs.org/)
- [Testing on front-end](https://javascript.info/testing-mocha) 