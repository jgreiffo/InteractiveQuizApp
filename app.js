console.log('AJAX Lesson');

/////////////////////////////
// The XMLHttpRequest Object
////////////////////////////

// const request = new XMLHttpRequest();

// CRUD
// Create - POST
// Read - GET
// Update - PUT/PATCH
// Delete - DELETE

let request;

document.getElementById('fetchBtn').addEventListener('click', testRequest);

function testRequest() {
  try {
    request = new XMLHttpRequest();

    if (!request) {
      alert('Failed to create an XMLHttpRequest Object.');
      return false;
    }

    request.onreadystatechange = alertResponse;
    request.open('GET', 'test.xml');
    request.send();

    function alertResponse() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          const xmlDoc = request.responseXML;
          const doc_library = xmlDoc.querySelector('library');

          // console.log(doc_library.children[1].firstElementChild.textContent);

          for (let i = 0; i < doc_library.children.length; i++) {
            alert(doc_library.children[i].firstElementChild.textContent);
          }
        } else {
          alert(
            'The request returned a status other than 200 OK: ' + request.status
          );
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}

///////////////////////////////
// The Fetch API
///////////////////////////////

async function logJSONData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    // method: "POST"
    headers: {
      'Content-Type': 'application/json',
    },
    // body: 'this will contain any data you need to send to the server. MUST BE STRING'
  });
  const data = await response.json();

  console.log(data);
}

// logJSONData();

// Fetching random dog image
const dog = document.getElementById('dog');
dog.addEventListener('click', getNewDog);

async function getNewDog() {
  try {
    dog.style.cursor = 'wait';
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const url = data.message;

    dog.src = url;
    dog.style.cursor = 'pointer';
  } catch (err) {
    console.log(err);
  }
}

getNewDog();


// Posting Data with Fetch
const post = {
    userId: 5,
    id: 2,
    title: "AJAX and Data Fetching",
    body: "It's pretty cool."
}


async function createPost() {
    try{
        const OPTIONS ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(post),
        };

        const response = await fetch ('https://jsonplaceholder.typicode.com/posts',
            OPTIONS
        );
        {
            method: "POST",
            headers: {
                'Content Type': 'application/json'
            },
            body: JSON.stringify(post),
        });
        const data = await response.json();
        console.log (data);
    }   catch(err){
        console.log (err);
    }
    
}
createPost();

// ////////////////
// Axios
// //////////////

axios('https://jsonplaceholder.typicode.com/posts').then((res) =>
console.log(res.data)
);

axios
.post('https://jsonplaceholder.typicode.com/posts',{
    userId:5,
    id: 1,
    title: 'blah',
    body: 'blahblah'
})
.then((res)) => console.log(res.data));

async function axiosExample() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data = res.data;
    console.log(data);
}

axiosExample();
