//problem1
// Define the input string
var input = "Hello, World!";

// Function to reverse the string and print it
function reverseAndPrint() {
  var reversed = input.split('').reverse().join('');
  console.log(reversed);
}

// Use setTimeout to delay the execution of the function by 2 seconds (2000 milliseconds)
setTimeout(reverseAndPrint, 2000);

//problem2
// Function to generate a random number between 1 and 10
function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
  }
  
  // Function to display a message with the time remaining
  function displayTimeRemaining(seconds) {
    console.log(`Time remaining: ${seconds} seconds`);
  }
  
  // Function to start the countdown and generate the random number
  function startCountdownAndGenerateNumber() {
    var countdown = 5; // Adjust this value to set the countdown time in seconds
  
    // Display a message every second until the countdown reaches 0
    var countdownInterval = setInterval(function () {
      displayTimeRemaining(countdown);
      countdown--;
  
      if (countdown < 0) {
        clearInterval(countdownInterval);
        var randomNum = generateRandomNumber();
        console.log(`Random number generated: ${randomNum}`);
      }
    }, 1000);
  }
  
  // Start the countdown and generate the random number
  startCountdownAndGenerateNumber();

  //problem3

  // Define the object with items and their prices in USD
const itemsInUSD = {
    item1: 20,
    item2: 35,
    item3: 10,
    item4: 50,
  };
  
  // Define the exchange rate
  const exchangeRateUSDToINR = 80;
  
  // Create a new object with prices converted to INR using the map function
  const itemsInINR = Object.keys(itemsInUSD).reduce((result, item) => {
    result[item] = itemsInUSD[item] * exchangeRateUSDToINR;
    return result;
  }, {});
  
  console.log("Items in INR:", itemsInINR);

  
  //problem4
  // Input list of books
const books = [
    { title: "Book 1", author: "author 1", publicationYear: 2005 },
    { title: "Book 2", author: "author 2", publicationYear: 2012 },
    { title: "Book 3", author: "author 3", publicationYear: 2008 },
    { title: "Book 4", author: "author 4", publicationYear: 2015 },
  ];
  
  // Filter out books published before 2010 and capitalize author names
  const filteredBooks = books
    .filter(book => book.publicationYear >= 2010)
    .map(book => {
      return {
        title: book.title,
        author: book.author.toUpperCase(),
        publicationYear: book.publicationYear,
      };
    });
  
  console.log("Filtered and capitalized books:", filteredBooks);

  
  //problem5

  // Regular expression pattern to match valid URLs
const urlPattern = /^(https?:\/\/)([\w.-]+)\.([a-zA-Z]+)$/;

// Function to check if a URL matches the pattern
function isValidURL(url) {
  return urlPattern.test(url);
}

// Test the function with example URLs
const testURLs = [
  "http://www.example.com",
  "https://sub.example123.com",
  "ftp://invalid-url.com",
  "https://",
  "http://example",
];

testURLs.forEach(url => {
  if (isValidURL(url)) {
    console.log(`"${url}" is a valid URL.`);
  } else {
    console.log(`"${url}" is not a valid URL.`);
  }
});

//problem6
// Regular expression pattern to match valid LinkedIn profile URLs
const linkedinURLPattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Function to check if a URL is a valid LinkedIn profile URL
function isValidLinkedInURL(url) {
  return linkedinURLPattern.test(url);
}



