//"ln -s /usr/bin/nodejs /usr/bin/node"
//$ npm install -g mocha
//Next, we’ll create a project directory named test. In our test folder we’ll create a file named test.js. Finally, we’ll initialize our project by running npm init.
//If you’re not familiar, 'npm init' is a simple way to interactively create a package.json file. Answer the questions and hit enter. The question that is most important here is ‘test command:’ — respond with ‘mocha’.
//This way we can run mocha by simply typing npm test.
//When finished, you should have a file structure that looks like this:
//test
//|-- test.js
//|-- package.json

var assert = require('assert');
var myFunction = require('./cash.js');

// describe('Math', function()
// {
//   describe('#1', function()
//   {
//     it('should test if 3*3= 9', function(){
//       assert.equal(9, 3*3);
//     });
//   });
//
//   describe('#2', function()
//   {
//     it('should test if 3*-3= -9', function(){
//       assert.equal(-9, 3*3);
//     });
//   });
// });

describe('Cash', function()
{
  describe('#1 Good case- $30', function()
  {
    it('should test if $30 = $20 $10', function(){
      console.log(myFunction(30));
      assert.equal(' $20.00 $10.00 ', myFunction(30));
    });
  });

  describe('#2 Bad case- a', function()
  {
    it('should test if Not a number returns the Enter number only message', function(){
      console.log(myFunction('a'));
      assert.equal('Enter number only', myFunction('a'));
    });
  });

  describe('#3 Bad case- 125', function()
  {
    it('should test if 125 returns Notes Unavailable, try again!', function(){
      console.log(myFunction(125));
      assert.equal('Notes Unavailable, try again!', myFunction(125));

    });
  });

  describe('#4 Bad case- -1', function()
  {
    it('should test if -1 returns Invalid number, try again!', function(){
      console.log(myFunction(-1));
      assert.equal('Invalid number, try again!', myFunction(-1));

    });
  });

  describe('#5 Good case- 590', function()
  {
    it('should return the correct change', function(){
      console.log(myFunction(590));
      //assert.equal('Invalid number, try again!', myFunction(-125));

    });
  });

});
