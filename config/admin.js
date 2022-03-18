module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c029249987992aee5b3f6a4c1742ad12'),
  },
});
