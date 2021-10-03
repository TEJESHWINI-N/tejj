const axios = require('axios');

var data= {
    name: 'TEJ',
    gender: 'Female',
    email: 'jhj4@email.com',
    status: 'active'
};
console.log(data)
const options = {
    headers: 
    {'authorization': 'Bearer f2daac507673a1e95398636919028b1dac8b9fe6205465358f5d49c2d8097c6f'}
};


axios.post('https://gorest.co.in/public/v1/users', data, options)
    .then((res) => {
      //  console.log('success');
        console.log(`Status: res.status`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        //console.log('error');
        console.error(err);
    });
