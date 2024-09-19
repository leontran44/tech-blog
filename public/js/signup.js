document.querySelector('#signup-form').addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && email && password) {
      try {
          // Send a POST request to the signup route
          const response = await fetch('/api/users', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, email, password }),
          });

          if (response.ok) {
              document.location.replace('/dashboard');
          } else {
              const result = await response.json();
              alert(result.message || 'Failed to sign up.');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while signing up.');
      }
  }
});