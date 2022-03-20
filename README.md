# Password Generator Starter Code

<img src = "./assets/images/start-screen.png" alt = "Password Generator start screen" width="100">

## What is the Password Generator?

The Password Generator is exactly as the name implies a password generator. This application uses HTML, CSS and JavaScript. The application will ask the user a series of prompts after the user clicks the "Generate Password" button on the homescreen. The application will ask the user how many characters they would like their secure password to be (from 8 to 125 characters) and if they would like the password to include lowercase letters, uppercase letters, numbers, and/or special characters. After the user makes their selections a password composed of randomly generated characters will appear in the "Your Secure Password". Please see screenshot below.

### Image of newly generated password

![alt text](https://github.com/jmarshall/password-generator/assets/images/alert-message.png "Password Generate complete")

### Screenshots of prompts

![alt text](https://github.com/jmarshall/password-generator/assets/images/character-length.png "Prompt character length")

![alt text](https://github.com/jmarshall/password-generator/assets/images/lowercase.png "Confirm lowercase letters")

![alt text](https://github.com/jmarshall/password-generator/assets/images/uppercase.png "Confirm uppercase letters")

![alt text](https://github.com/jmarshall/password-generator/assets/images/numbers.png "Confirm numbers")

![alt text](https://github.com/jmarshall/password-generator/assets/images/special.png "Confirm special characters")

----------------------------------------------------------------------------------------------------------------------------------------------------------

The application will not generate a password without the user confirming (by clicking "OK") at least one of the character type specification and will continue to prompt if the user until at least one character type is chosen. 

### Sceenshot of alert shown when no character types are chosen

![alt text](https://github.com/jmarshall/password-generator/assets/images/alert-message.png "Password Generate complete")


## Future Enhancements

Currently the passwords generated by this application are 'RANDOM' but there is still room for another level of randomness. Though each of the characters is randomly picking from the available characters in the array (i.e. Lowercase character will randomly select from array containing "abcdefghijklmnopqrstuvwxyz") the order in which the character types appear is uniform. 

For example if the user confirms they want an 8 character password with lowercase, uppercase, and numbers the sequence will be as follows: lower, upper, number, lower, upper, number, lower, upper. This order will persist no matter the length of the password. To rectify this I will be adding a loop that will shuffle where each character is concatenated in the final password output. 

## Try out the PASSWORD GENERATOR!

Give the Password Generator a try [HERE](placeholder for GitPages) and make your own secure password today!!!

Check the [gitHub repo](placeholder for gitHub)  to look at the code.


