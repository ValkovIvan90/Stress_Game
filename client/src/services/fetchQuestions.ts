export function fetchQuastions() {

    return fetch('http://localhost:5000/questions', {
    }).then((res) => res.json);
}