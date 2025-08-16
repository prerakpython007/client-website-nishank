const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    // Launch a headless browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set the path to your HTML file
    const htmlPath = path.join('file://', __dirname, 'index.html');
    await page.goto(htmlPath, { waitUntil: 'networkidle0' });

    // Define the path for the output PDF
    const pdfPath = path.join(__dirname, 'intex.pdf');



//     const emailMessage = `
//       Congratulations!

//       You have successfully registered for our on-ground 10-day intensive retreat, Navajeevan Nirmaan 24th May 2024 to 2nd June 2024.

//       Participant Name(s) - Hema Valera
//       Plan - Plan B
//       No. of people - 1
//       Amount Received - Rs 15000

//       We are grateful for your contribution to the event. All contributions will be donated to Pyramid Valley International.

//       Here is the link to the 'Participant Form 1': https://forms.gle/MiY9pMscFKgtoXeR6. Request you to please fill and submit it at the earliest.

//       With Much Gratitude,
//       Shreans Daga Foundation
//     `;
//     console.log(emailMessage);

    // Generate the PDF
    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true
    });



    console.log(`PDF has been created at: ${pdfPath}`);

    await browser.close();
})();