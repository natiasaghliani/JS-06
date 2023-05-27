function axios(url = 'https://reqres.in/api/users?page=2') {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(finalData => {
                if (finalData.page === 2) {
                    resolve(finalData);
                } else {
                    throw 'Invalid response';
                }
            })
            .catch(err => reject(err))
    })
}

axios()
    .then(value => {
        console.log(value);
        const ul = document.querySelector('ul');

        value.data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.first_name;
            ul.appendChild(li);
        });
    })
    .catch(err => {
        errorMsg(err);
    });

 axios()
    .then(value => {
        console.log(value);
        const ul = document.querySelector('ul');

        value.data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.email;
            ul.appendChild(li);
        });
    })
    .catch(err => {
        errorMsg(err);
    });


function axiosTwo(url = 'https://fakerapi.it/api/v1/companies?_quantity=3') {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(finalData => {
                if (finalData.code === 200) {
                    resolve(finalData);
                } else {
                    throw 'Invalid response';
                }
            })
            .catch(err => reject(err))
    })
}

axiosTwo()
    .then(value => {
        console.log(value);
        const ul = document.querySelector('ul');

        value.data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.phone;
            ul.appendChild(li);
        });
    })
    .catch(err => {
        errorMsg(err);
    });