function calculateAge() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const presentDate = new Date(document.getElementById('presentDate').value);

    if (!birthDate || !presentDate || isNaN(birthDate) || isNaN(presentDate)) {
      document.getElementById('result').innerText = 'Please select valid dates.';
      return;
    }

    let years = presentDate.getFullYear() - birthDate.getFullYear();
    let months = presentDate.getMonth() - birthDate.getMonth();
    let days = presentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(presentDate.getFullYear(), presentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    document.getElementById('result').innerText = `Age: ${years} years, ${months} months, and ${days} days.`;
  }