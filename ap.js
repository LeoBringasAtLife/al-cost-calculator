document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const teamSizeInput = document.getElementById('team-size');
  const monthlySavingsDisplay = document.getElementById('monthly-savings');
  const annualSavingsDisplay = document.getElementById('annual-savings');

  function calculateSavings() {
    let totalMonthlyCostPerUser = 0;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        totalMonthlyCostPerUser += parseFloat(checkbox.dataset.cost);
      }
    });

    const teamSize = parseInt(teamSizeInput.value) || 0;
    const totalMonthlySavings = totalMonthlyCostPerUser * teamSize;
    const totalAnnualSavings = totalMonthlySavings * 12;

    // Format currency
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });

    monthlySavingsDisplay.textContent = formatter.format(totalMonthlySavings);
    annualSavingsDisplay.textContent = formatter.format(totalAnnualSavings);
  }

  // Add event listeners
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', calculateSavings);
  });

  teamSizeInput.addEventListener('input', calculateSavings);

  // Initial calculation
  calculateSavings();
});
