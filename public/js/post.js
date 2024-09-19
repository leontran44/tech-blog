document.querySelector('#comment-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the comment text and post ID
    const comment_text = document.querySelector('#comment_text').value.trim();
    const post_id = document.querySelector('#post_id').value;

    if (comment_text) {
        try {
            // Send a POST request to add a new comment
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment_text, post_id }),
            });

            if (response.ok) {
                // Reload the page to show the new comment
                document.location.reload();
            } else {
                alert('Failed to add comment.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the comment.');
        }
    }
});