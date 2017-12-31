/*
 * Programming Quiz: What's my Name? (2-9)
 */

// your code goes here
var fullName="abc xyz";


/*
 * Programming Quiz: Out to Dinner (2-10)
 */

// your code goes here
var bill=10.25 + 3.99 + 7.15 
var tip=bill*(15/100)  
var total=bill+tip
console.log(total);

/*
 * Programming Quiz: MadLibs (2-11)
 * 
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

// your code goes here
var madLib="The Intro to JavaScript course is " +adjective1+". James and Julia are so "+adjective2+". I cannot wait to work through the rest of this "+adjective3+ " content!"
console.log(madLib)


/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and, using string concatenation 
      and the variables above, create an awesome message.
 * 3. Print the awesomeMessage variable to the console.
 */
 
/*
 * Notes:
 * - Using the above as an example, firstName would have been assigned to
 *   "Julia", interest to "cats", and hobby to "play video games".
 * - Be sure to include spaces and periods where necessary!
 */

// Add your code here
var firstName="Julia";
var interest="cats";
var hobby="play video games";

var awesomeMessage="Hi, my name is "+firstName+". I love "+interest+". In my spare time, I like to "+hobby+"."
console.log(awesomeMessage);