const fs = require('fs');
 const ytdl = require('ytdl-core'); 



// Prompt user for input
 console.log("Please enter the YouTube URL of the video you'd like to download: "); 
process.stdin.on('data', (url) => { // Download video from YouTube
    ytdl(url, { filter: format => format.container === 'mp4' }) .pipe(fs.createWriteStream('video.mp4')) // Log success message when download is complete 
    .on('finish', () => console.log("Video successfully downloaded!"));
     process.exit(); });