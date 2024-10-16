const contentstack = require('contentstack');

// Initialize Contentstack
const Stack = contentstack.Stack('blt6a5262ff4e5b4e55', 'csf4bcbc8078bbc0449b1b55c4', 'development');

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
