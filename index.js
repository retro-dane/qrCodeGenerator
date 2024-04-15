import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([{ message: "Please Enter URL:", name: "URL" }])
  .then((answers) => {
    const url = answers.URL;
    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream("qr_img.png"))

    fs.writeFile("URL.txt",url,(err)=>{
        if (err) throw err;
        console.log("The File has been saved")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(`${error}`);
    } else {
      console.log(`${error}`);
    }
  });
