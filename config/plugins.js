module.exports = ({ env }) => ({
    // ...
    upload: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID', 'AKIAIYOIB4NBNXH5MI5A'),
            secretAccessKey: env('AWS_ACCESS_SECRET', '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'),
            region: 'ap-southeast-1',
            params: {
                Bucket: 'strapi-blogs',
            },
        },
    },
    // ...
});
