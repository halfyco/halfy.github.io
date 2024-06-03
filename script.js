// script.js

document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the input date value
    const birthday = new Date(document.getElementById('birthday').value);
    
    if (!isNaN(birthday)) {
        // Calculate the half-birthday by adding 6 months
        const halfBirthday = new Date(birthday);
        halfBirthday.setMonth(halfBirthday.getMonth() + 6);
        
        // Format the date to a readable format
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const halfBirthdayFormatted = halfBirthday.toLocaleDateString(undefined, options);
        
        // Display the result
        document.getElementById('result').textContent = `Your half birthday is on ${halfBirthdayFormatted}.`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid date.';
    }
});
