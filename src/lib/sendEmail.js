export async function sendMail(formData) {
    try {
        const response = await fetch('https://sourcecodetesting.com/brand/hassan/sendMail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            // window.location.href = '/thank-you';
            const data = await response.text();
            console.log('Form submitted successfully', data);
        } else {
            const errorData = await response.json();
            console.error('Server error:', errorData);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}