
        //variables
            //arrays of content for passwords
        var lowercase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            specialCharacter = ["!","@","#","$","%","^","&","*","(",")","?","~","`","/","<",">",","];
            //display 
            button = document.getElementById("generate");
            textArea = document.getElementById("password");
            
            
        //starts password generation
        function startNewPassword(){
            //empty paassword
            var passwordLength = 0;

            //retrieve valid passwordlength
            function isPasswordLengthCorrect(passwordLength){

                //validate repsonse is between 8 and 128
                return passwordLength >= 8 && passwordLength <= 128;
            }

            //continue to prompt user for a valid password length until one is entered
            while( ! isPasswordLengthCorrect( passwordLength)){
            
                passwordLength =  parseInt(prompt("Provide a password length between 8 and 128"));
            }
            
            //ask user which properties they would like password to contain
            var options = {
                "passwordLength" : passwordLength,
                "lowercase" : confirm("Would you like lowercase letters in your password?"),
                "uppercase" : confirm("Would you like uppercase letters in your password?"),
                "numeric" : confirm("Would you like numbers in your password?"),
                "specialCharacters" : confirm("Would you like special characters in your password?")
            };

            //call function to generate password using obtained options
            textArea.value = generatePassword( options );
        
        }

        function generatePassword( options){
            var password = "";
                possibleCharacters = [];
                requiredCharacters = [];
                
            //for each password option add to possible password characters if confirmed by user
            //add one character from each chosen option to required chracters to ensure password using each options
                //at least once
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

            //prompts user to restart if no options are selected
            if(possibleCharacters.length === 0 || requiredCharacters.length === 0){
                alert("At least one option must be selected, press generate to refresh");
            }
           
            //randomly place characters from options into password until length is met
            for( var i = 0; i < options.passwordLength; i++){
                //first using required characters
                if (requiredCharacters[i]){
                    password += requiredCharacters[i];

                }else{
                
                    password += possibleCharacters[ Math.floor( Math.random() * possibleCharacters.length)];
                }
            }
            console.log(password);
            return password;
        }
        //button to start generator
        button.addEventListener("click", startNewPassword);
