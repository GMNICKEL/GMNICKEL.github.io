function validateForm() {
    const requiredFields = [
        'name', 
        'mascot', 
        'image', 
        'image-caption', 
        'personal-background', 
        'professional-background', 
        'academic-background', 
        'web-development', 
        'computer-platform'
    ];
    
    for (const field of requiredFields) {
        const input = document.getElementById(field);
        if (!input.value) {
            return false;
        }
    }
    return true;
}

function addCourse() {
    const courseContainer = document.getElementById('course-container');
    const newCourseInput = document.createElement('input');
    newCourseInput.type = 'text';
    newCourseInput.className = 'course-entry';
    newCourseInput.placeholder = 'Enter a course';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = function() {
        courseContainer.removeChild(newCourseInput);
        courseContainer.removeChild(deleteButton);
    };

    courseContainer.appendChild(newCourseInput);
    courseContainer.appendChild(deleteButton);
}

function displayFormData() {
    const formDataContainer = document.createElement('div');
    formDataContainer.className = 'byo';
    const imageInput = document.getElementById('image');
    const imageUrl = URL.createObjectURL(imageInput.files[0]);

    formDataContainer.innerHTML = `
        <h2>Your Introduction Page</h2>
        <p><strong>Name:</strong> ${document.getElementById('name').value}</p>
        <p><strong>Mascot:</strong> ${document.getElementById('mascot').value}</p>
        <img src="${imageUrl}" alt="${document.getElementById('image-caption').value}">
        <p><strong>Image Caption:</strong> ${document.getElementById('image-caption').value}</p>
        <p><strong>Personal Background:</strong> ${document.getElementById('personal-background').value}</p>
        <p><strong>Professional Background:</strong> ${document.getElementById('professional-background').value}</p>
        <p><strong>Academic Background:</strong> ${document.getElementById('academic-background').value}</p>
        <p><strong>Background in Web Development:</strong> ${document.getElementById('web-development').value}</p>
        <p><strong>Primary Computer Platform:</strong> ${document.getElementById('computer-platform').value}</p>
        <p><strong>Courses Currently Taking:</strong></p>
        <ul>
            ${Array.from(document.querySelectorAll('.course-entry')).map((input) => `<li>${input.value}</li>`).join('')}
        </ul>
        <p><strong>Funny Thing About Yourself:</strong> ${document.getElementById('funny-thing').value}</p>
        <p><strong>Anything Else:</strong> ${document.getElementById('additional-info').value}</p>
    `;

    document.body.innerHTML = '';
    document.body.appendChild(formDataContainer);

    const resetLink = document.createElement('button');
    resetLink.textContent = 'Reset';
    resetLink.onclick = function() {
        location.reload();
    };
    document.body.appendChild(resetLink);
}

document.getElementById('intro-form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (!validateForm()) {
        alert('Please fill in all required fields.');
        return;
    }
    displayFormData();
    this.reset();
});

document.getElementById('add-course-btn').addEventListener('click', addCourse);
