document.querySelector('#logout').addEventListener('click', async () => {
    try {
        // Send a POST request to log out
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // Redirect to the homepage on successful logout
            document.location.replace('/');
        } else {
            alert('Failed to log out.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging out.');
    }
});