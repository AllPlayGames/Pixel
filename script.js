// Show loader when page starts loading
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    
    // Hide loader when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 1000); // Show for at least 1 second for better UX
    });
    
    // Also hide loader if there's an error
    window.addEventListener('error', function() {
        loader.classList.add('hidden');
    });
    
    // Hide loader when clicking on internal links
    document.querySelectorAll('a[href^="#"], a[href^="index.html"]').forEach(link => {
        link.addEventListener('click', function() {
            loader.classList.remove('hidden');
        });
    });
});
