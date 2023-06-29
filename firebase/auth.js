	// THE REFERENCES
	const submit = document.getElementById("submit");

	// VALIDATION (Using regular expressions)

	function isEmptyOrSpaces(str) {
		return str == null || str.match(/^ *$/) !== null;
	}

	function Validation() {
		let nameregex = /^[a-zA-Z\s]+$/;
		let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let userregex = /^[a-zA-Z0-9]{5,}$/;

		if (isEmptyOrSpaces(first_name.value) || !nameregex.test(first_name.value)) {
			alert("The first name should only contain alphabets and cannot be empty");
			return true;
		}
		if (isEmptyOrSpaces(last_name.value) || !nameregex.test(last_name.value)) {
			alert("The last name should only contain alphabets and cannot be empty");
			return true;
		}
		if (isEmptyOrSpaces(email.value) || !emailregex.test(email.value)) {
			alert("Enter a valid email ID and cannot be empty");
			return true;
		}
		if (isEmptyOrSpaces(username.value) || !userregex.test(username.value)) {
			alert("Username can only be alphanumeric, must be at least 5 characters, and cannot contain spaces or be empty");
			return true;
		}
		return false;
	}

async function RegisterUser(){
    event.preventDefault();
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    try{
        const result = await app.auth().createUserWithEmailAndPassword(email.value, password.value)
        alert("logged in sucessfully")
        console.log(result)
    }catch(error){
        			const errorCode = error.code;
        			const errorMessage = error.message;
        			alert("The email address is already in use"+error);
    }
        

}

submit.addEventListener("click", RegisterUser);