let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);
    
    if (!userInput.value) {
        result.innerHTML = "Please enter a valid birthdate.";
        return;
    }

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3 = y2 - y1;
    let m3 = m2 - m1;
    let d3 = d2 - d1;

    if (d3 < 0) {
        m3--; 
        let prevMonth = m2 - 1 === 0 ? 12 : m2 - 1;  
        let prevYear = m2 - 1 === 0 ? y2 - 1 : y2;
        d3 += getDaysInMo(prevYear, prevMonth);
    }

    if (m3 < 0) {
        m3 += 12;
        y3--;
    }

    result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old.`;
}

function getDaysInMo(year, month) {
    return new Date(year, month, 0).getDate();
}
