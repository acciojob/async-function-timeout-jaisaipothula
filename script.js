document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Retrieve values from inputs
    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    // Validate delay input
    if (isNaN(delay) || delay <= 0) {
      alert('Please enter a valid positive number for delay.');
      return;
    }

    // Clear previous output
    outputDiv.textContent = '';

    try {
      // Simulate delay using async/await
      await new Promise(resolve => setTimeout(resolve, delay));

      // Display text after delay
      outputDiv.textContent = text;
    } catch (error) {
      console.error('Error occurred:', error);
      outputDiv.textContent = 'Error occurred while displaying text.';
    }
  });
});
