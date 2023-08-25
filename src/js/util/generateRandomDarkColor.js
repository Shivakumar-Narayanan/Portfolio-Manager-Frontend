// Helper function to generate random dark color classes
export const  getRandomDarkColor = () => {
    const colors = ['blue', 'purple', 'pink', 'indigo', 'green', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return `${colors[randomIndex]}-800`;
}