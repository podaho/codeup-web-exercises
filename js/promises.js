{
    const wait = (time) => {
        "use strict";
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        });
    }

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

    const githubPromise = fetch('https://api.github.com', { headers: {'Authorization': 'token 26728742024d0b3e9bba11690e616623a7b1daa0'} });
    githubPromise
        .then(response => {
            return response.json();
        })
        .then(data => {
            "use strict";
            console.log(data);
        })
        .catch(error => console.log(error));
}