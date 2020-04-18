
//series of prompts
        //prompt user for length of password
        

        
        var lowercase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            specialCharacter = ["!","@","#","$","%","^","&","*","(",")","?","~","`","/","<",">",","];
            button = document.getElementById("generate");
            textArea = document.getElementById("password");
            
        function startNewPassword(){
        
            var passwordLength = 0;

        function isPasswordLengthCorrect(passwordLength){
            
            return passwordLength >= 8 && passwordLength <= 128;
        }

        while( ! isPasswordLengthCorrect( passwordLength)){
            
            passwordLength =  parseInt(prompt("Provide a password length between 8 and 128"));
            
        }

    
      
        
        //validate repsonse is between 8 and 128

       
    
        //reprompt if necessary for a correct value

        //prompt user for series of configuration options, lowercase, uppercase
            //numeric and/or special characters

            
            var options = {
                "passwordLength" : passwordLength,
                "lowercase" : confirm("Would you like lowercase letters in your password?"),
                "uppercase" : confirm("Would you like uppercase letters in your password?"),
                "numeric" : confirm("Would you like numbers in your password?"),
                "specialCharacters" : confirm("Would you like special characters in your password?")
            };
       
        textArea.value = generatePassword( options );
        
    }
        
        
        
        //validate configuration
        //generate password

        function generatePassword( options){
            var password = "";
                possibleCharacters = [];
                requiredCharacters = [];
                

            if(options.lowercase){

                possibleCharacters = possibleCharacters.concat( lowercase);
                
                requiredCharacters.push( lowercase[Math.floor( Math.random() * lowercase.length)]);

            }
            
            if(options.uppercase){

                possibleCharacters = possibleCharacters.concat( uppercase);
                requiredCharacters.push( uppercase[Math.floor( Math.random() * uppercase.length)]);
            }

            if(options.numeric){

                possibleCharacters = possibleCharacters.concat( numbers);
                requiredCharacters.push( numbers[Math.floor( Math.random() * numbers.length)]);
            }

            if(options.specialCharacters){

                possibleCharacters = possibleCharacters.concat( specialCharacter);
                requiredCharacters.push( specialCharacter[Math.floor( Math.random() * specialCharacter.length)]);
            
            }

           

            for( var i = 0; i < options.passwordLength; i++){
                
                if (requiredCharacters[i]){
                    password += requiredCharacters[i];

                }else{
                
                    password += possibleCharacters[ Math.floor( Math.random() * possibleCharacters.length)];
                }
                




            }
            console.log( possibleCharacters);
            console.log(password);
            return password;
        }

     
        
        button.addEventListener("click", startNewPassword);
