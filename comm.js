const commentForm = document.getElementById('commentForm');
        const commentInput = document.getElementById('commentInput');
        const commentsList = document.getElementById('commentsList');

        commentForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form refresh

            // Create a new comment
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<p>${commentInput.value}</p>`;

            // Append the new comment to the comments list
            commentsList.appendChild(newComment);

            // Clear the textarea
            commentInput.value = '';
        });