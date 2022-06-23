# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Based on the "Refactoring" assignment, in order to make the code cleaner and more readable, the following steps were committed to:

1. I changed the require into import, and also used ES6 module. 
2. I also created a constant called  hash512 because it is used in multiple ways; this way we can have one occurrence. 
3. I removed the else, by a negation of if, as well as the if else sequence returning the value 0.
4. When necessary, I validated if the candidate is a string by doing checktype. 
5. I did unit tests but didn't add more random values.