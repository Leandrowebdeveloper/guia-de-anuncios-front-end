export default [
  {
    context: [
      "/api/init",
      "/api/category",
      "/api/coordinate",
      "/api/workDays",
      "/api/address",
      "/api/contact",
      "/api/citie",
      "/api/announcement",
      "/api/social-network",
      "/api/messages",
      "/api/avatar",
      "/api/activate-account",
      "/api/admin",
      "/api/auth",
      "/api/social-login",
      "/api/login-admin",
      "/api/login",
      "/api/register",
      "/api/redefine-password",
      "/api/recover",
      "/api/logout",
      "/api/ckeckout",
      "/images",
      "manifest.webmanifest",
    ],
    target: "http://172.17.0.1:3001/",
    secure: false,
    changeOrigin: true,
  },
];
