module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: 'ap-south-1',
          params: {
              Bucket: 'rahul1493',
	      Folder:'rahul1493/strapi/',
          },
        },

 actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },

      }},
	email: {
        config: {
          provider: 'amazon-ses',
          providerOptions: {
            key: env('AWS_ACCESS_KEY_ID'),
            secret: env('AWS_ACCESS_SECRET'),
            amazon: 'https://email.ap-south-1.amazonaws.com',
          },
          settings: {
            defaultFrom: 'rahulyadav1493@gmail.com',
            defaultReplyTo: 'rahulyadav1493@gmail.com',
          },
        },
      },
  });
