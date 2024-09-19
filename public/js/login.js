document.querySelector('#login-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
      try {
          // Send a POST request to the login route
          const response = await fetch('/api/users/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });

          if (response.ok) {
              // Redirect to the dashboard on successful login
              document.location.replace('/dashboard');
          } else {
              // Handle errors, display feedback
              const result = await response.json();
              alert(result.message || 'Failed to log in.');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while logging in.');
      }
  }
});