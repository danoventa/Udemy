var configValues = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds133348.mlab.com:33348/nodetodozample';
    }
}