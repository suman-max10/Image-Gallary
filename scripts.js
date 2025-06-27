document.addEventListener('DOMContentLoaded', function() {
    const uploadBtn = document.getElementById('uploadBtn');
    const fileInput = document.getElementById('fileInput');
    const gallery = document.querySelector('.gallery');

    // Function to update all image numbers
    function updateImageNumbers() {
        const cards = document.querySelectorAll('.gallery .card');
        cards.forEach((card, index) => {
            const figcaption = card.querySelector('figcaption');
            figcaption.textContent = `Image ${index + 1}`;
        });
    }

    // Initialize numbering for existing images
    updateImageNumbers();

    uploadBtn.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                const imgUrl = event.target.result;
                
                // Create new gallery item
                const figure = document.createElement('figure');
                figure.className = 'card';
                
                const img = document.createElement('img');
                img.src = imgUrl;
                img.alt = 'Uploaded image';
                
                const figcaption = document.createElement('figcaption');
                // Temporary text, will be updated by updateImageNumbers()
                figcaption.textContent = 'New Image';
                
                figure.appendChild(img);
                figure.appendChild(figcaption);
                gallery.appendChild(figure);
                
                // Update all image numbers including the new one
                updateImageNumbers();
                
                // Reset the file input
                fileInput.value = '';
            };
            
            reader.readAsDataURL(file);
        }
    });
});