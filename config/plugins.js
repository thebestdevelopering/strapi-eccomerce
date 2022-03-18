module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
    },
  },
  'my-admin': {
    // my-plugin is going to be the internal name used for this plugin
    enabled: true,
    resolve: './src/plugins/admin',
  },
});
