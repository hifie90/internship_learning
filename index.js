const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
}

function handleSubmit(event) {
    event.preventDefault();

    uploadFiles();
}

function uploadFiles() {
    const url = 'https://httpbin.org/post';
    const method = 'post';
  
    const xhr = new XMLHttpRequest();
  
    const data = new FormData(form);
  
    xhr.open(method, url);
    xhr.send(data);
}

