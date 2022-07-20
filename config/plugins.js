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
          },
        },

 actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },

      }},
	email:{
	config:{
	provider: 'sendgrid',
	providerOptions:{
	apiKey: env('SENDGRID_API_KEY'),
	},
	settings:{
	defaultFrom:'rahulyadav1493@gmail.com',
	defaultReplyTo:'rahulyadav1493@gmail.com',
	},
	},
	},
  });
