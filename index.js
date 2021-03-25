document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  console.log("i'm here!");

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const contactData = new FormData(contactForm);

    const name = contactData.get('name');
    const email = contactData.get('email');
    const message = contactData.get('message');
    const date = new Date();
    const readableDate = date.toLocaleString('en-us', {
      timeZone: 'America/Denver',
    });
    // const date = new Date().toLocaleString('en-us', {
    //   timeZone: 'America/Denver',
    // });
    const data = {
      name: name,
      email: email,
      message: message,
      sent: readableDate,
    };

    console.log(data);

    await fetch(
      'https://sheet.best/api/sheets/7b93a3e8-49c3-4b58-a004-936482aafc82',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );

    window.location = 'https://zduvall.github.io/';
  });
});
