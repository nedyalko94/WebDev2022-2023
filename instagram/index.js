// instagram module
// npm i instagram-web-api for instagram
//$ npm i node-cron --save for schedule
const express = require("express");
const app = express();
require("dotenv").config(); // for config dotenv
const Instagram = require("instagram-web-api");
const cron = require("node-cron");
// npm i --save-dev @types/instagram-web-api
const FileCookieStore = require("tough-cookie-filestore2");
//npm i wordpos for new caption every day      npm i wordpos --save
const WordPOS = require("wordpos");
const wordpos = new WordPOS();
const imap = require("imap-simple");
const _ = require("lodash");
const simpleParser = require("mailparser").simpleParser;

const port = process.env.PORT || 4000;

// run script every day at  noon 00:00:00   https://crontab.guru/
// cron.schedule(" 00 12 * * * ", async ()=>{
// everything inside except the port

// persist logged-in session
const cookieStore = new FileCookieStore("./cookies.json");

// const instagramLoginFunction = () => {
// const { INSTAGRAM_USERNAME, INSTAGRAM_PASSWORD } = process.env

const client = new Instagram(
  {
    username: process.env.INSTAGRAM_USERNAME,
    password: process.env.INSTAGRAM_PASSWORD,
    cookieStore,
  },
  {
    language: "en-US",
  }
);

const instagramPostPictureFunction = async () => {
  // wordpos.randAdjective({count:1}, async(result)=>{
  //   const resultWord = result[0].replace("_"," ")
  //   const newDesc = result.resultWord.slice(result[0].length - 3) === 'ing'? resultWord:"feeling" + resultWord
  // })
  //   const newCaption = `Hello everyone ${newDesc} today.\nAre you ${newDesc}?\nLet me know in the comment `

  await client
    .uploadPhoto({
      photo: "./photos/one.jpg",
      caption: "newCaption",
      post: "post",
    })
    .then(async (res) => {
      const media = res.media;
      console.log(`https://www.instagram.com/p/${media.code}`);
      await client.addComment({
        mediaId: media.id,
        text: "your comment here ",
      });
    });
};
// login

const loginFunction = async () => {
  console.log("start logging in ...");
  await client
    .login()
    .then(
      () => console.log("login successful")
      // instagramPostPictureFunction()
    )

    .catch((err) => {
      console.log("login fail");
      if (err.status === 403) {
        console.log("server is making too many atempt to log in ");
        return;
      }
      console.log(err.error);
      if (err.error && err.error.message === "checkpoint_required") {
        const challengeUrl = err.error.checkpoint_url;
          client.updateChallenge({ challengeUrl, choice: 1 });
        const emailConfig = {
          imap: {
            user: `${process.env.USER_EMAIL}`,
            password: `${process.env.INSTAGRAM_PASSWORD}`,
            host: "imap.gmail.com",
            port: 993,
            tls: true,
            tlsOption: {
              servername: "imap.gmail.com",
              rejectUnauthorized: "false",
            },
            authTimeout: 30000,
          },
        };
        const delayedEmailFunction = async (timeout) => {
          setTimeout(() => {});

          // imap or imaps
          imap.connect(emailConfig).then((connection) => {
            return connection.openBox("INBOX").then(() => {
              const delay = 1 * 3600 * 1000;
              let lastHour = new Date();
              lastHour.setTime(Date.now() - delay);
              lastHour = lastHour.toISOString();
              const searchCriteria = ["ALL", "SINCE", lastHour];
              const fetchOptions = {
                bodies: [""],
              };
              return connection
                .search(searchCriteria, fetchOptions)
                .then((messages) => {
                  messages.forEach((item) => {
                    const all = _find(item.parts, { witch: "" });
                    const id = item.attributes.uid;
                    const idHeader = "Imap-ID: " + id + "\r\n";
                    simpleParser(idHeader + all.body, async (err, mail) => {
                      if (err) {
                        console.log(err);
                      }
                      console.log(mail.subject);
                      const answerCodeArr = mail.text
                        .split("\n")
                        .filter(
                          (item) => item && /^\S+$/.test(item) && !isNaN(item)
                        );
                      if (mail.text.includes("Instagram")) {
                        if (answerCodeArr.length > 0) {
                          const answerCode = answerCodeArr[0];
                          console.log(answerCode);
                          await client.updateChallenge({
                            challengeUrl,
                            securityCode: answerCode,
                          });
                          console.log(
                            `Answered Instagram security challenge with answer code: ${answerCode}`
                          );
                          await client.login();
                          await instagramPostPictureFunction();
                        }
                      }
                    });
                  });
                });
            });
          }),
            timeout;
        } 
      await 
       delayedEmailFunction(45000) // i don't know if this has to be here 32:22
      } 
     
    });
};   
 loginFunction();
// }) // cron clossee

// server start
app.listen(port, () => {
  console.log("\x1b[31m", `instagram app is running at ${port}`);
});
