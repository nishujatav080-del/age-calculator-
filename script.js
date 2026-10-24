function calculateAge() {
    let birthdateInput = document.getElementById("birthdate").value;
    let resultDiv = document.getElementById("result");

    if (!birthdateInput) {
        resultDiv.innerHTML = "<span style='color: red;'>कृपया अपनी जन्मतिथि चुनें!</span>";
        return;
    }

    let birthDate = new Date(birthdateInput);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // अगर दिन माइनस में हैं, तो पिछले महीने के दिन एडजस्ट करें
    if (days < 0) {
        months--;
        let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    // अगर महीने माइनस में हैं, तो साल एडजस्ट करें
    if (months < 0) {
        years--;
        months += 12;
    }

    resultDiv.innerHTML = `आपकी उम्र है:<br> 
    <span style="color: #667eea; font-size: 24px;">${years} साल, ${months} महीने, और ${days} दिन</span>`;
}
