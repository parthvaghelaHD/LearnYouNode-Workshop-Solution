const fs = require('fs')
const path = require('path')

module.exports = function (folder, ext, callback) {
    fs.readdir(folder, function (err, files) {
        if (err) {
            callback(err, null);
        } else {
            result = [];
            files.forEach((file) => {
                if (path.extname(file) === '.' + ext) {
                    result.push(file);
                }
            });
            callback(null, result);
        }
    });
}
