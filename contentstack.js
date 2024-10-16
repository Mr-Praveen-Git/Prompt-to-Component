const contentstack = require('contentstack');

// Initialize Contentstack
const Stack = contentstack.Stack('Enter_Your_Stack_API', 'Enter_Your_delevery_token', 'Environments');

// Fetch content based on content type
async function fetchContent(contentType) {
    try {
        const response = await Stack.ContentType(contentType).Query().toJSON().find();
        return response[0]; // Return the first entry
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}

// Example function to load Home Page content
async function loadHomePage() {
    const homePageContent = await fetchContent('home_page');
    document.getElementById('main-content').innerHTML = `
        <h2>${homePageContent.title}</h2>
        <p>${homePageContent.description}</p>
    `;
}
