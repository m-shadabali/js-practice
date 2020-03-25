// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})
  
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  })
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);





Atta
Using JavaScript Fetch API to Get and Post Data
#JavaScript • August 21, 2019

JavaScript Fetch API provides a simple interface for fetching resources. It is the newest standard for handling network requests in the browser.

The biggest advantage of Fetch over XMLHttpRequest(XHR) is that the former uses promises that make working with requests and responses far easier. You do not need to worry about callbacks hell and boilerplate code that comes with XHR.

Since the ES7, Fetch is now fully implemented in Chrome. You can even use the async-await and completely get rid of promises.

How to use Fetch API?
The fetch() method is available in the global window scope, with the first parameter being the URL you want to call. By default, the Fetch API makes a GET request. A very simple HTTP request with fetch() would look below:

// `url` - the URL you want to call
fetch(url)
    .then(res => {
        // code to handle the response data
    }).catch(err => {
        // code to handle request errors
    });
Look clean and simple? Let's use the Fetch API to get and post data.

Using Fetch to Get Data
To demonstrate how Fetch GET request works, we are going to call the GitHub API to retrieve a list of users. We will then use vanilla JavaScript to display the users on the web page.

Let's start with the HTML. We only need a heading and an unordered list:

<h1>GitHub Users</h1>
<ul id="users"></ul>
Before we actually call fetch() method, let us first get the list element from DOM where we are going to put the users information:

// List Element
const ul = document.querySelector('#users'); 

// GitHub API URL
const url = 'https://api.github.com/users';
Now let's do the actual work — calling the Fetch API to get a list of users:

fetch(url)
    .then(res => {
        // code to handle the response
    }).catch(err => {
        // code to handle errors
    });
The fetch() method returns a promise that calls the then() method with response object when fulfilled. The response object has several methods to handle the response the way we want to do. Here are few of these methods:

json() — Resolves the promise with a JSON object
text() — Resolves the promise with plain text
blob() — Resolves the promise with a Blob object
formData() — Resolves the promises with a FormData object
Calling any of the above methods returns a new promise. Since our API response is a JSON string, the one we want to use is the json():

fetch(url)
    .then(res => res.json())
    .then(data => {
        // code to handle the response
    }).catch(err => {
        console.error('Error: ', err);
    });
Great! We are done with the Fetch API request part. Now is the time to write some vanilla JavaScript code. Let's create two helper functions to append and create new elements:

// create an element
const createNode = (elem) => {
    return document.createElement(elem);
};

// append an element to parent
const appendNode = (parent, elem) => {
    parent.appendChild(elem);
}
Now we can move on to parse the JSON object, create and append list items to our unordered list:

// ...
.then(data => {
    // iterate over users
    data.map((user) => {
        // create the elements
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
        img.src = user.avatar_url;
        span.innerText = user.login;
        // append all elements
        appendNode(li, img);
        appendNode(li, span);
        appendNode(ul, li);
    });
})
// ...
The above code is self-explanatory. We iterate over all the users and for each user, we create a list item, an image, and a span. We update the image source, set the span text to the user's display name, and then append them to their parent. That's it.

Here is how it looks like in the browser (after I added some CSS from Bootstrap):

GitHub Users

And the full code of our Fetch request is the following:

// create an element
const createNode = (elem) => {
    return document.createElement(elem);
};

// append an element to parent
const appendNode = (parent, elem) => {
    parent.appendChild(elem);
}

// List Element
const ul = document.querySelector('#users');

// GitHub API URL
const url = 'https://api.github.com/users';

// make the API call
fetch(url)
    .then(res => res.json())
    .then(data => {
        // iterate over users
        data.map((user) => {
            // create the elements
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = user.avatar_url;
            span.innerText = user.login;
            // append all elements
            appendNode(li, img);
            appendNode(li, span);
            appendNode(ul, li);
        });
    }).catch(err => {
        console.error('Error: ', err);
    });
Using Fetch to Post Data
The Fetch API is not limited to GET requests only. You can make all other types of requests (POST, PUT, DELETE, etc.) with custom request headers and post data. Here is an example of a POST request:

const url = 'https://reqres.in/api/users';

// post body data 
const user = {
    first_name: 'John',
    last_name: 'Doe',
    job_title: 'Blogger'
};

// request options
const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
}

// send POST request
fetch(url, options)
    .then(res => res.json())
    .then(res => console.log(res));
Instead of object literal, we can also create a request object with all the options and pass it to fetch() method:

const url = 'https://reqres.in/api/users';

// post body data 
const user = {
    first_name: 'John',
    last_name: 'Doe',
    job_title: 'Blogger'
};

// create request object
const request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
});

// pass request object to `fetch()`
fetch(request)
    .then(res => res.json())
    .then(res => console.log(res));
Read Next: Introduction to JavaScript Fetch API that explains the Fetch API in depth.

✌️ Like this article? Follow @attacomsian on Twitter. You can also follow me on LinkedIn and DEV. Subscribe to RSS Feed.

👋 If you enjoy reading my articles and want to support me to continue creating free tutorials, ☕ Buy me a coffee (cost $3) .

Need help to launch a new product? I am available for contract work. Hire me to accomplish your business goals with engineering and design.

Share Article
Share this article with your friends & followers!

Recent Articles
How to remove an element from the DOM in JavaScript
Insert an element after another DOM element with JavaScript
Insert an element before another DOM element with JavaScript
How to insert an element to the DOM in JavaScript
Update the text content of a DOM element in JavaScript
Update the HTML markup of a DOM element with JavaScript
#1 CLOUD HOSTING
DigitalOcean
DigitalOcean
The simplest cloud platform for developers & teams. Start with a $100 free credit. Try now

Become a Better Web Developer ✌️
Join the weekly newsletter to improve your coding skills quickly, with easy to follow tutorials and protips every week.

Enter your email address
No spam, ever. You can unsubscribe anytime.

© 2020 Atta 🤟

Me
Blog
Resources
Newsletter
 
 
 
 


