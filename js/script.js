function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    const isVisible = content.style.display === "block";

    content.style.display = isVisible ? "none" : "block";
}

document.getElementById('open-all').addEventListener('click', function() {
    const allAdditionalContent = document.querySelectorAll('.additional-content');
    allAdditionalContent.forEach(function(content) {
        content.style.display = 'block';
    });
    document.getElementById('open-all').style.display = 'none';
    document.getElementById('close-all').style.display = 'inline-block';
});

document.getElementById('close-all').addEventListener('click', function() {
    const allAdditionalContent = document.querySelectorAll('.additional-content');
    allAdditionalContent.forEach(function(content) {
        content.style.display = 'none';
    });
    document.getElementById('close-all').style.display = 'none';
    document.getElementById('open-all').style.display = 'inline-block';
});

document.getElementById('searchbar').addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();
    const articles = document.querySelectorAll('#file-types article');

    articles.forEach(function(article) {
        const fileType = article.getAttribute('data-type') ? article.getAttribute('data-type').toLowerCase() : '';
        const title = article.querySelector('h2') ? article.querySelector('h2').textContent.toLowerCase() : '';
        const category = article.querySelector('p') ? article.querySelector('p').textContent.toLowerCase() : '';

        if (fileType.includes(searchQuery) || title.includes(searchQuery) || category.includes(searchQuery)) {
            article.style.display = 'flex';
        } else {
            article.style.display = 'none';
        }
    });
});