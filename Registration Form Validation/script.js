
     const form = document.getElementById('box');
      const username = document.getElementById('iname');
      const email = document.getElementById('inmail');
      const password = document.getElementById('inpswd');
      const password2 = document.getElementById('inpswd1');
const contact = document.getElementById('inum');
const dob = document.getElementById('indate');
      form.addEventListener('submit', e => {
        e.preventDefault();
        InputValid();
      });

      function InputValid(){
        const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim(); 
        const contactValue = contact.value.trim(); 
        const dobValue = dob.value.trim(); 
        
        if(usernameValue === '') {
          setErrorFor(username, 'Username cannot be blank');
        } else {
          setSuccessFor(username);
        }

        if(emailValue === '') {
          setErrorFor(email, 'Email cannot be blank');
        } else {
          setSuccessFor(email);
        }

        if(passwordValue === '') {
          setErrorFor(password, 'Password cannot be blank');
        } else {
          setSuccessFor(password);
        }

        if(password2Value === '') {
          setErrorFor(password2, 'Confirm Password cannot be blank');
        } else if(passwordValue !== password2Value) {
          setErrorFor(password2, 'Passwords does not match');
        } else{
          setSuccessFor(password2);
        }
      if(contactValue === '') {
          setErrorFor(contact, 'Contact cannot be blank');
        } else {
          setSuccessFor(contact);
        }
if(dobValue === '') {
          setErrorFor(dob, 'Date cannot be blank');
        } else {
          setSuccessFor(dob);
        }
      }

      function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
      }

      function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
      }

