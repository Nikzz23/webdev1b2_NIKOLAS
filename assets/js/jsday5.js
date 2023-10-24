var phoneBook = [];

function addContact(userName, userNumber) {
    var contactObject = {
        contactName: userName,
        contactNumber: userNumber
    };
    phoneBook.push(contactObject);
}

function submitContact() {
    var userName = document.getElementById("userName").value;
    var userNumber = document.getElementById("userNumber").value;

    if (userName === "" || userNumber === "") {
        alert("both fields are required");
    } else {
        addContact(userName, userNumber);
        document.getElementById("userName").value = "";
        document.getElementById("userNumber").value = "";
        alert("Contact added, phonebook updated");
    }
}

function viewContacts() {

    console.log(phoneBook);
    //BONUS: Display the phonebook in the html instead of console.log
    let phonebookDisplay = "";
    for (let i = 0; i < phoneBook.length; i++) {
        phonebookDisplay += "<p>" + phoneBook[i].contactName + " - " + phoneBook[i].contactNumber + "</p>";
    }
    document.getElementById("phonebook").innerHTML = phonebookDisplay;
}

//