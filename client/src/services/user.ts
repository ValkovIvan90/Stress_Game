

export function reg_user(name: string) {

    return fetch('http://localhost:5000/users/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ name })
    }).then();
}