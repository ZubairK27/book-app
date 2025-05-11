const mongoose = require('mongoose');
const Book = require('./models/Book');
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Define an array of 10 books
const books = [
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    genre: "Science Fiction",
    coverImage: "/api/placeholder/200/300",
    description: "A science fiction saga set on the desert planet Arrakis.",
    rating: 4.6,
    reviews: [
      { user: "SciFiFan", comment: "Epic story and worldbuilding!", rating: 5 },
      { user: "DesertReader", comment: "A little dense, but worth it.", rating: 4 }
    ]
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
    coverImage: "/api/placeholder/200/300",
    description: "A young man's journey through New York and his own emotions.",
    rating: 4.2,
    reviews: [
      { user: "ClassicLover", comment: "Timeless.", rating: 4 },
      { user: "HoldenFan", comment: "Relatable and raw.", rating: 4.5 }
    ]
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    coverImage: "/api/placeholder/200/300",
    description: "A totalitarian regime manipulates truth and rewrites history.",
    rating: 4.8,
    reviews: [
      { user: "BigBrother", comment: "Terrifyingly relevant.", rating: 5 },
      { user: "Reader42", comment: "A gripping and unsettling read.", rating: 4.5 }
    ]
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    coverImage: "/api/placeholder/200/300",
    description: "A young girl learns about race and justice in the American South.",
    rating: 4.9,
    reviews: [
      { user: "Bookworm", comment: "A masterpiece of literature.", rating: 5 },
      { user: "Historian", comment: "A poignant look at racial inequality.", rating: 5 }
    ]
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    coverImage: "/api/placeholder/200/300",
    description: "A hobbit embarks on an unexpected adventure to reclaim a treasure.",
    rating: 4.7,
    reviews: [
      { user: "MiddleEarthFan", comment: "A delightful and magical story.", rating: 5 },
      { user: "EpicReader", comment: "Great introduction to Tolkien's world.", rating: 4.5 }
    ]
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    coverImage: "/api/placeholder/200/300",
    description: "A mysterious millionaire’s obsession with the love of his life.",
    rating: 4.4,
    reviews: [
      { user: "JazzAgeFan", comment: "A tragic and timeless American story.", rating: 4.5 },
      { user: "LiteraryCritic", comment: "Beautifully written but heartbreaking.", rating: 4 }
    ]
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    genre: "Dystopian",
    coverImage: "/api/placeholder/200/300",
    description: "A dystopian society where happiness is engineered by technology.",
    rating: 4.6,
    reviews: [
      { user: "Philosopher123", comment: "An eye-opening exploration of control.", rating: 5 },
      { user: "Futurist", comment: "A chilling glimpse of a possible future.", rating: 4.5 }
    ]
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure",
    coverImage: "/api/placeholder/200/300",
    description: "A sea captain’s obsessive quest to capture a white whale.",
    rating: 4.1,
    reviews: [
      { user: "SeaCaptain", comment: "A thrilling tale of obsession and adventure.", rating: 4 },
      { user: "ClassicLiterature", comment: "A dense but rewarding read.", rating: 4.2 }
    ]
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    coverImage: "/api/placeholder/200/300",
    description: "A sharp commentary on marriage, class, and manners in 19th-century England.",
    rating: 4.8,
    reviews: [
      { user: "RomanticReader", comment: "A timeless love story.", rating: 5 },
      { user: "HistoryBuff", comment: "A fascinating social commentary.", rating: 4.7 }
    ]
  }
];

// Only insert if the database is empty
Book.countDocuments({})
  .then((count) => {
    if (count === 0) {
      return Book.insertMany(books).then(() => {
        console.log('Books added successfully!');
      });
    } else {
      console.log('Database already populated.');
    }
  })
  .catch((err) => {
    console.error('Error during database check or insertion:', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });
