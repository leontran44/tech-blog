// Event listener for submitting a comment
document.querySelector('.add-comment-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the comment text and post ID from the form
    const comment_text = document.querySelector('#comment_text').value.trim();
    const post_id = document.querySelector('input[name="post_id"]').value;

    if (comment_text && post_id) {
        // Send a POST request to create a new comment
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If the comment was added successfully, reload the page to show the new comment
            document.location.reload();
        } else {
            alert('Failed to add comment. Please try again.');
        }
    }
});
