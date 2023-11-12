
ScrollReveal().reveal('.profile-picture', { delay: 500 });
ScrollReveal().reveal('.short-introduction-container', { delay: 1000 });
ScrollReveal().reveal('.download', { delay: 1300 });

function downloadResume() {
    // Change the file name and path accordingly
    var resumePath = 'assets/pdf/RESUME-1.pdf';
    
    // Create a virtual link element
    var link = document.createElement('a');
    
    // Set the href attribute with the file path
    link.href = resumePath;
    
    // Set the download attribute with the desired file name
    link.download = 'NikolasResume.pdf';
    
    // Append the link to the document
    document.body.appendChild(link);
    
    // Trigger a click event on the link
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
}

ScrollReveal().reveal('.about-title', { delay: 800 });
ScrollReveal().reveal('.card', { delay: 1300 });
ScrollReveal().reveal('.carda', { delay: 1500 });
ScrollReveal().reveal('.cardb', { delay: 1700 });
ScrollReveal().reveal('.links', { delay: 1700 });

ScrollReveal().reveal('.project-title', { delay: 800 });
ScrollReveal().reveal('.project1', { delay: 1300 });


function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Check if any required field is empty
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all required fields.");
        return; // Stop the function if any field is empty
}

    // For simplicity, just logging the values to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Subject: " + subject);
    console.log("Message: " + message);

    // You can also send the data to a server using AJAX or fetch
    // For now, we'll just show an alert
    alert("Form submitted successfully!");

    // Clear the form after submission
    document.getElementById("contactForm").reset();
}

ScrollReveal().reveal('.contactmetitle', { delay: 500 });
ScrollReveal().reveal('.contactme', { delay: 1000 });
ScrollReveal().reveal('.goodbye', { delay: 1000 });
ScrollReveal().reveal('.email', { delay: 1000 });