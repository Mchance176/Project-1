document.addEventListener('DOMContentLoaded', function () {
    const workoutForm = document.getElementById('workout-form');
    const workoutList = document.getElementById('workout-list');

    workoutForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const workoutType = document.getElementById('workout-type').value;
        const duration = document.getElementById('duration').value;
        const intensity = document.getElementById('intensity').value;
        const notes = document.getElementById('notes').value;

        // Validate inputs
        if (!workoutType || !duration || !intensity) {
            alert('Please fill in all required fields.');
            return;
        }

        // Create new workout item
        const workoutItem = document.createElement('li');
        workoutItem.className = 'workout-item';

        if (workoutType === 'strength') {
            workoutItem.classList.add('strength-training');
            workoutItem.innerHTML = `
                <h3>${workoutType} Workout</h3>
                <p><strong>Type:</strong> ${workoutType}</p>
                <p><strong>Weight:</strong> ${notes.split(' ')[0]} lbs</p>
                <p><strong>Reps:</strong> ${notes.split(' ')[1]}</p>
                <p class="date">Date: ${new Date().toLocaleDateString()}</p>
            `;
        } else {
            workoutItem.innerHTML = `
                <h3>${workoutType} Workout</h3>
                <p><strong>Type:</strong> ${workoutType}</p>
                <p><strong>Duration:</strong> ${duration} minutes</p>
                <p><strong>Intensity:</strong> ${intensity}</p>
                ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
                <p class="date">Date: ${new Date().toLocaleDateString()}</p>
            `;
        }

        // Add new workout to the list
        workoutList.prepend(workoutItem);

        // Clear form
        workoutForm.reset();

        // Optionally, you can log the workout data
        console.log('Workout Logged:', { workoutType, duration, intensity, notes });

        alert('Workout logged successfully!');
    });

    workoutList.addEventListener('click', function (event) {
        if (event.target.classList.contains('workout-item')) {
            event.target.classList.toggle('show-notes');
        }
    });
});
