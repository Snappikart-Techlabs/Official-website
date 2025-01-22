function goToPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    const currentPage = document.getElementById(`page-${pageNumber}`);
    currentPage.classList.add('active');

    // Update progress bar
    const progressBar = document.querySelector('.progress-bar .progress');
    const progressWidth = (pageNumber / pages.length) * 100;
    progressBar.style.width = `${progressWidth}%`;
}