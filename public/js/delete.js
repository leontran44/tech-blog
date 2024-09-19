document.querySelectorAll('.delete-post-btn').forEach(button => {
    button.addEventListener('click', async (event) => {
        event.preventDefault();
        
        // Get the post ID from the button's data attribute
        const postId = event.target.getAttribute('data-id');

        if (postId) {
            try {
                const response = await fetch(`/api/posts/${postId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    document.location.reload();
                } else {
                    alert('Failed to delete the post.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while deleting the post.');
            }
        }
    });
});