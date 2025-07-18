const ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  urlEndpoint: process.env.PRIVATE_KEY,
});

module.exports = imagekit;

function uplaod(file) {
  return new Promise((res, rej) => {
    imagekit.upload(
      {
        file: file.buffer,
        fileName: "testing-song",
      },
      (error, result) => {
        if (error) {
          rej(error);
        } else {
          res(result);
        }
      });
  });
}

module.exports = uplaod;
