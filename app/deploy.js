

var fs = require('fs');

fs.readdir('build/', (err, files) => {
    files.forEach((file) => {
        fs.rename("build/" + file, __dirname + '/../' + file, (err) =>  {
            console.log(err);
        });
    })
});


