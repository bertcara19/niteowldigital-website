document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', showThankYouMessage);
});

function showThankYouMessage(event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(responseText => {
        console.log('Form submission successful:', responseText);
        document.getElementById('thank-you-modal').style.display = 'block';
        document.getElementById('thank-you-modal').querySelector('p').innerText = responseText;
    })
    .catch(error => {
        console.error('There was a problem with your form submission:', error);
    });

    return false;
}

function closeThankYouMessage() {
    document.getElementById('thank-you-modal').style.display = 'none';
}
