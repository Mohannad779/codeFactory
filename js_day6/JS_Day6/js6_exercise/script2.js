// Fetch books from external JSON file
fetch('data2.json')
    .then(response => response.json())
    .then(books => {
        const booksContainer = document.getElementById('books');

        // Iterate through the books and create elements
        books.forEach(book => {
            // Create a div element for each book
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');

            // Apply a class based on whether the book is read or not
            if (book.read) {
                bookDiv.classList.add('read');
            } else {
                bookDiv.classList.add('unread');
            }

            // Create an image element for the book cover
            const bookImg = document.createElement('img');
            bookImg.src = book.image;
            bookImg.alt = `${book.title} cover`;

            // Create a paragraph element for the title and author
            const bookInfo = document.createElement('p');
            bookInfo.innerHTML = `<strong>${book.title}</strong><br>by ${book.author}`;

            // Append the image and info to the book div
            bookDiv.appendChild(bookImg);
            bookDiv.appendChild(bookInfo);

            // Append the book div to the books container
            booksContainer.appendChild(bookDiv);
        });
    })
    .catch(error => console.log('Error fetching books:', error));

