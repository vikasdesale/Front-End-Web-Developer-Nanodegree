if ("") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
Returns: "the value is falsy"

Here’s the list of all of the falsy values:
the Boolean value false
the null type
the undefined type
the number 0
the empty string ""
the odd value NaN (stands for "not a number", check out the NaN MDN article)
That's right, there are only six falsy values in all of JavaScript!

Truthy values
A value is truthy if it converts to true when evaluated in a boolean context. For example, the number 1 is truthy because, 1 evaluates to true. Let's use an if...else statement again to test this out:

if (1) {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
Returns: "the value is truthy"

Here are some other examples of truthy values:

true
42
"pizza"
"0"
"null"
"undefined"
{}
[]