const FtpSrv = require('ftp-srv');

const ftpServer = new FtpSrv({
    url: "ftp://0.0.0.0:21",
    anonymous: true
});

ftpServer.on('login', (data, resolve, reject) => { 
    if(data.username === 'kasutaja' && data.password === 'parool'){
        return resolve({ root:"/" });    
    }
    return reject(new errors.GeneralError('vale kasutaja või parool', 401));
});

ftpServer.listen().then(() => { 
    console.log('Server käivitub')
});
