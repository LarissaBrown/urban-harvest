import React, { useState } from 'react'
import emailjs from 'emailjs'



export default function Contact (props){
    

const {farmer, onClick} = props
//when you click on image a contact form will show up that is connected to js email and the farmer will be contacted. 
//idea: have a verbal recording that can be done to attach to the contact email for the user to leave a voice message. 
const [values, setValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
});
const handleChange = ()=> (e) => {
    
    setValues({ ...values, [e.target.id]: e.target.value });
};
console.log(values)

window.onload = function() {
  document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('user_oQB8bFJjV5Vpe', 'contact_form', this)
      .then(function() {
        console.log('SUCCESS!');
        
      }, function(error) {
        console.log('FAILED...', error);
      });
  });
}




    return (
        
            <>
                    <form id="contact_form">
								<input onChange={handleChange} type="hidden" id="contact_number" name="contact_number"/>
								<label>Name</label>
                                <br/>
								<input onChange={handleChange} id="user_name" type="text" name="user_name"/>
                                <br/>
								<label>Email</label>
                                <br/>
								<input onChange={handleChange} id='user_email' type="email" name="user_email"/>
                                <br/>
								<label>Message</label>
                                <br/>
								<textarea onChange={handleChange} id="message" name="message"></textarea>
                                <br/>
								<input type="submit" value="Send"/>
                            <button style={{margin: 0}} onClick={onClick}>X</button> 
                        <p >Contact: {farmer}</p>
					</form>
			</>
               
        
    )
}











