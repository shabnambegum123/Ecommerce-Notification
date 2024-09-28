module.exports = {
  forgetPassword: function (payload) {
    const subject = "Your Registration Successfully";
    const html = "Hi " + payload.Name + "" + payload.token ;
    return [subject, html];
  },
};
