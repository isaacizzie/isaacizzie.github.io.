function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Basic validation to check if inputs are numbers
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter valid numbers for day, month, and year.");
        return;
    }

    // Check if the date is valid
    const birthDate = new Date(year, month - 1, day);

    // Check if the date components match the entered values (this handles invalid dates like 30th February)
    if (
        birthDate.getDate() !== day ||
        birthDate.getMonth() + 1 !== month ||
        birthDate.getFullYear() !== year
    ) {
        alert("Please enter a valid date.");
        return;
    }

    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('years').textContent = ageYears;
    document.getElementById('months').textContent = ageMonths;
    document.getElementById('days').textContent = ageDays;
}
