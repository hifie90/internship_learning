document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        let isValid = true;

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("number").value.trim();
        const address = document.getElementById("address").value.trim();
        const nationality = document.getElementById("nationality").value.trim();
        const trainStation = document.getElementById("trainstation").value.trim();
        const workLocation = document.getElementById("work").value.trim();
        const noticePeriod = document.getElementById("notice").value.trim();
        const position = document.getElementById("position").value.trim();
        const workType = document.getElementById("work").value.trim();
        const salary = document.getElementById("salary").value.trim();
        const preference = document.getElementById("preference").value.trim();

        // Validate Name
        if (name === "") {
            alert("Name is required");
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(email)) {
            alert("Enter a valid email address");
            isValid = false;
        }

        // Validate Phone Number (10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Enter a valid 10-digit phone number");
            isValid = false;
        }

        // Ensure required fields are filled
        if (address === "" || nationality === "" || workLocation === "" || position === "" || salary === "") {
            alert("Please fill in all required fields");
            isValid = false;
        }

        // If valid, submit form
        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });
});
