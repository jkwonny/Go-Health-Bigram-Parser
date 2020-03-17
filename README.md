## Hello GoHealth!

This fullstack application (a little overboard I know) is a basic implementation of a bigram parser that takes a text file as an input and outputs a histogram of the frequencies of each bigram onto the page. If the text file contains too many strings and doesn't show all of the bigrams on the webpage, it is also listed in the terminal.

##### To run this project:
```
npm install -> npm run build (just to be safe) -> npm run dev -> add text file to testtext folder
```

At http://localhost:8080/, you will see the user interface show up - select any text file (.txt, .doc, .docx) to test for bigrams.

Since this application is so small, I decided to skip routes in the backend to cut a bit of time - I understand it's best practice, but probably not for this situation.

I chose to only limit the number of bigrams to 40 to display on the page.

I wrote Enzyme tests for the React components and utilized Jest to test the middleware functions (the actual logic of the bigram parser).
