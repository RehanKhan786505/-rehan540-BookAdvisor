document.getElementById('book-preference-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const genre = document.getElementById('genre').value;
    const length = document.getElementById('length').value;
    const mood = document.getElementById('mood').value;

    const recommendations = getRecommendations(genre, length, mood);
    displayRecommendations(recommendations);
});

function getRecommendations(genre, length, mood) {
    // Sample recommendations — you can add more or pull from a database/API
    const books = {
        'fiction': [
            { title: "The Alchemist", mood: "uplifting", length: "short" },
            { title: "To Kill a Mockingbird", mood: "thought-provoking", length: "medium" }
        ],
        'mystery': [
            { title: "Gone Girl", mood: "dark", length: "long" },
            { title: "The Girl with the Dragon Tattoo", mood: "dark", length: "long" }
        ],
        'romance': [
            { title: "Me Before You", mood: "uplifting", length: "medium" },
            { title: "Pride and Prejudice", mood: "light", length: "medium" }
        ],
        'fantasy': [
            { title: "Harry Potter and the Philosopher's Stone", mood: "uplifting", length: "medium" },
            { title: "The Hobbit", mood: "light", length: "medium" }
        ],
        'thriller': [
            { title: "The Da Vinci Code", mood: "thought-provoking", length: "long" },
            { title: "The Silent Patient", mood: "dark", length: "medium" }
        ],
        'non-fiction': [
            { title: "Sapiens: A Brief History of Humankind", mood: "thought-provoking", length: "long" }
        ],
        'biography': [
            { title: "The Diary of a Young Girl", mood: "thought-provoking", length: "medium" }
        ]
    };

    return books[genre].filter(book => book.mood === mood && book.length === length);
}

function displayRecommendations(recs) {
    const list = document.getElementById('recommendation-list');
    list.innerHTML = '';

    if (recs.length === 0) {
        list.innerHTML = '<li>No books match your preferences. Try different options.</li>';
    } else {
        recs.forEach(book => {
            const li = document.createElement('li');
            li.textContent = book.title;
            list.appendChild(li);
        });
    }
}
