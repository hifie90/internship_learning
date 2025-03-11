document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("vacancy-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const company = document.getElementById("company").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const vacancy = document.getElementById("vacancy").value.trim();
        const salary = document.getElementById("salary").value.trim();

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
        if (company === "" || vacancy === "" || salary === "") {
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
