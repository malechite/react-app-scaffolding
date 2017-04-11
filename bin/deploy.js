/*eslint no-console: 0 */
var s3 = require('s3');
var AWS = require('aws-sdk');
var config = require('./config');
var path = require('path');

var awsS3Client = new AWS.S3({
    accessKeyId: config.aws.key,
    secretAccessKey: config.aws.secret,
    region: config.aws.region,
    s3ForcePathStyle: true,
    signatureVersion: 'v4'
});

var client = s3.createClient({
    s3Client: awsS3Client
});

var getBucketFromEnv = function() {
    var env = process.env.NODE_ENV || 'development';
    return config.aws.s3[env];
};

var params = {
    localDir: path.resolve(__dirname, '../dist/'),
    deleteRemoved: true,
    s3Params: {
        Bucket: getBucketFromEnv()
    }
};

var uploader = client.uploadDir(params);
uploader.on('error', function(err) {
    console.error('unable to sync:', err.stack);
});
uploader.on('progress', function() {
    console.log('progress', uploader.progressAmount, uploader.progressTotal);
});
uploader.on('end', function() {
    console.log('done uploading');
});
