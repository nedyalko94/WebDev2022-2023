Step 1: npm init -y
Step 2: make index.js
Step 3: npm install mongoose --save https://mongoosejs.com/docs/index.html
Step 4: copy getting-started.js to make db connection in node.js
Step 5: open MongoDB Compass and create a database
Step 6: change mongodb://localhost:27017/test to mongodb://localhost:27017/databasename. Edit the async function to include a connection message (optional): await mongoose.connect('mongodb://localhost:27017/Customers', (err)=>console.log('connected to db'));
Step 7: open the index.js in node.js with the command node index.js. Every time you want to update something, you have to re-run this command
Step 8: make a .gitignore to ignore the node modules