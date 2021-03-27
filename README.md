# password-generator

## An Overview

In this assignment, we were given preexisting code where the html and css were already created. It structured a website where users can generate a random password upon user input. What I managed to accomplish through JavaScript was being able to prompt the user to input a value to choose how long they wanted their password to be and to choose what kind of characters they wanted to include as well. This was accomplished through various arrays and strings, if and if else statements, a for loop, creating functions, and finally calling those functions. I tried my best to comment on what or why certain code was included.

## Here is a link to my GitHub Pages



## Screenshots!
Here is a snippet of the completed password generator and a prompt once the "Generate Password" button has been clicked:

![This is the password generator with its initial prompt once the button is clicked](./assets/images/completed-password-generator-with-prompt.png)

Here are the different confirms that the user has to choose from (at least one option is needed) once the length of the password has been chosen (between 8 to 128 characters):

![The uppercase prompt](./assets/images/uppercase-letters-confirm.png)
![The lowercase prompt](./assets/images/lowercase-letters-confirm.png)
![The numbers prompt](./assets/images/numbers-confirm.png)
![The special characters prompt](./assets/images/special-characters-confirm.png)

Here are the different error messages that the user can recieve if inputs are invalid:

![There must be an input (number) of the length of the password](./assets/images/error-length-is-required.png)
![The input must be a valid value (an actual integer)](./assets/images/error-valid-number-is-required.png)
![The length of the input does not fall between the required range](./assets/images/error-range-of-length-is-wrong.png)
![At least one option must be picked in order for the password to be generated](./assets/images/error-must-choose-an-option.png)

Here are some examples of randomly genereated passwords with different character lengths:

![Example 1](./assets/images/random-9-character-password.png)
![Example 2](./assets/images/random-75-character-password.png)