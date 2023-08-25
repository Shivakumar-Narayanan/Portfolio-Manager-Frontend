const tabLinks = document.querySelectorAll('.tab-link');

// Add a click event listener to each tab link
tabLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // Prevent the default link behavior (prevents page from scrolling)
        e.preventDefault();

        // Remove 'active' class from all tab links
        tabLinks.forEach((tab) => {
            tab.classList.remove('active-tab', 'text-blue-600', 'border-blue-600', 'dark:text-blue-500', 'dark:border-blue-500');
            tab.classList.add('hover:text-gray-600', 'hover:border-gray-300', 'dark:hover:text-gray-300', 'border-transparent');
        });

        // Add 'active' class and selected tab styles to the clicked tab
        link.classList.add('active', 'text-blue-600', 'border-blue-600', 'dark:text-blue-500', 'dark:border-blue-500');
        link.classList.remove('hover:text-gray-600', 'hover:border-gray-300', 'dark:hover:text-gray-300', 'border-transparent');

        // Here, you can implement your logic to handle tab switching
        // For example, you can update the content based on the selected tab

        // For demonstration, we'll just display the selected tab's ID in the console
        console.log('Selected Tab:', link.id);
    });
});

// Time notif under portfolio ka paisa
export const updateLiveTime = () => {
    const liveTimeElement = document.getElementById('live-portfolio-time');
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        timeZoneOffsetName: 'short'
    };
    const liveTime = new Date().toLocaleString('en-US', options);
    liveTimeElement.textContent = liveTime;
}

// Initial call to set the live time
updateLiveTime();