// Form validation and handling (basic example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
  
    if (name && email && message) {
      alert("Thank you for your message, we'll get back to you soon!");
    } else {
      alert("Please fill all fields.");
    }
  });
  
 