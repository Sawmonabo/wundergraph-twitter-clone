# Getting Started with Twitter-Clone using WunderGraph
Prepared by: Sawmon Abossedgh and Jay Patel

<img align="right" width="250" height="220" src="https://user-images.githubusercontent.com/77422313/209737042-c726972d-1428-468f-904d-df84ba6149e0.png">

## Contents
- [Twitter INIT](#twitter-init)
- [WunderGraph INIT](#wundergraph-init)
- [MongoDB INIT](#mongodb-init)
  - [Initializing our Twitter Feed with Live Query](#initializing-our-twitter-feed-with-live-query) 
  - [Creating our First Mutation w/Tweets](#creating-our-first-mutation-wtweets)

## Twitter INIT
* First step to creating our Twitter clone is by opening up your terminal and cloning our repo using:
  ```js
  git clone https://github.com/Sawmonabo/wundergraph-twitter-clone.git
  ```
* Once you clone the repo you're going to want to run the command ``` npm i ``` to download our current dependencies from our package.json
* After installing the dependencies, go ahead and start the application with ``` npm start ``` to see what we have so far.

<p> As you can see this will load up the skeleton structure of the Twitter-Clone. Before moving forward, lets take a look at Feed.js located within our src folder. In the code snipet below we are creating a const named post where we are currently assigning hard values to it and inserting it onto our twitter feed.
  
```  
    const posts = [{
    displayName : "Test User",
    username : "testuser",
    verified : true,
    text : "This is the first tweet!",
    avatar : null,
    image : null
  }];
```
In TweetBox.js, also within the src folder, is where users will be creating/sending their tweets. Once again we are currently assigning hard values to our user attributes 
```
    const user = {
    avatarUrl : "",
    email : "testuser@test.com",
    firstName : "Test",
    lastName : "User",
    name : "Test User",
  };
  
```
and then capturing the inputed message or image url from the front-end to our sendTweet const. 
```
    const sendTweet = e => {
    e.preventDefault();

    if (tweetMessage) {
      console.log(`Sending tweet with message: ${tweetMessage}`);
      console.log(`Sending tweet with image: ${tweetImage}`);
    }

    setTweetMessage('');
    setTweetImage('');
  };
```
While the application is still running on localhost:3000 go ahead and open up the dev tools console. If you type in a message and click Tweet you'll be able to see the console log our input.


## WunderGraph INIT
<p>Now that we have setup our skeleton structure for our Twitter-Clone let's move on to adding WunderGraph to our application to help simpilify our lives.

* First, let's start with opening up our terminal and typing the command:
  ```js
  npx create-wundergraph-app twitter-clone -E simple
  ```
* Now we need to move our .wundergraph folder, tsconfig.json, and our .gitignore all from the generated twitter-clone folder to our root dierctory of our project ```./```
* Next, we need to install our wundergraph dependecnies using the commands
```
  npm i @wundergraph/sdk
  npm i @wundergraph/swr
  npm i graphql
  npm i typescript --save-dev
```
* In our package.json add these two entries 
```
  "wundergraph": "wunderctl up --debug",
  "generate": "wunderctl generate up --debug"
```
* After completeing these steps we can remove the generated twitter-clone folder 
```
  rm -rf twitter-clone
 ```
 * Lastly, we want to update our file wundergraph.config.ts located in the .wundergraph folder 
 
 ...FROM 
 ```
 allowedOrigins:
			process.env.NODE_ENV === 'production'
				? [
						// change this before deploying to production to the actual domain where you're deploying your app
						'http://localhost:3000',
				  ]
				: ['http://localhost:3000', new EnvironmentVariable('WG_ALLOWED_ORIGIN')],
 ```
 
...TO
```
allowedOrigins:
			process.env.NODE_ENV === 'production'
				? [
						// change this before deploying to production to the actual domain where you're deploying your app
						'http://localhost:3000',
				  ]
				: ['http://localhost:3000'],
```
	
## MongoDB INIT
	
* To get started with the MongoDB INIT we need to first start by creating an account or signing in with your existing account on [MongoDB Atlas](https://account.mongodb.com/account/login?nds=true&_ga=2.53799790.754773367.1672107021-1055546340.1672107021&_gac=1.45787478.1672107021.CjwKCAiAqaWdBhAvEiwAGAQltm3pdx2laKih-31DCbQo-U6e_PJ8aizwcctAqawCcZgH9pTUSjGnVRoCKi8QAvD_BwE)

 <p>After creating or signing into your acount follow these steps:
	 
	1. Choose or create an organization, then click "New Project", give it a name, click "Create Project"
	2. Click Add Current IP Address
	3. Then click "Build a Database"
		i. Choose Shared Free tier
		ii. Allow default settings for the Cluster
		iii. Click "Connect" to the cluster (Make sure it says that your IP Address has been added, this is very important!)
	4. Choose a username and password for the database, SAVE THESE
	5. Click next/continue
	6. Choose "Connect using VSCode" and copy/save the connection string in the ( Connect to your MongoDB deployment ) text box. ex: mongodb+srv://user:<password>@cluster0.jzgqp26.mongodb.net/test

<p> Before leaving the MongoDB website let's create a document for our twitter feed to represent an existing tweet.
	
* Click Create and then insert a document
	```
	  {"_id":
	    {"$oid":"63816aaad38a36c5cfddaf06"},
	    "displayName":"Test User",
	    "username":"testuser",
	    "verified":true,
	    "text":"I love Wundergraph",
	    "avatar":"https://images-ext-1.discordapp.net/external/FrhETDKgDLfwckbcNUU9Ap3gkzIIU9a6mYuFa69SXlA/https/www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png",
	    "date":{"$date":{"$numberLong":"1671955200000"}},
	    "image":"https://avatars.githubusercontent.com/u/64281914?s=200&v=4"
	  }
	```
<p> Now let's hop back over to our code and configure our MongoDB cluster with our application
	
* First, lets update WG config (wundergraph.config.ts located in the .wundergraph folder) 
	
	1. For the new db...replace countries with: 

		```
		const tweets = introspect.mongodb({
		apiNamespace: 'tweets',
		databaseURL: 'mongodb+srv://user:pass@cluster0.uvkwxgc.mongodb.net/TweetsCollection',
		introspection : {
			pollingIntervalSeconds: 5,
			},

		});

		```
	
	2. Update our apis array in config to:
	
		```
		   apis: [
		      tweets
		    ],
		```
* Second, after updating our WG config we need to run WunderGraphs amazing 'generate' command to initialize the setup. In your terminal run the following command ```  wunderctl generate ```.
	
* Third, we need to run the WG introspection to read our database schema and and generate WG operations for our database. Before running the command below be sure to update the mongo cluster address to the one we copied from [MongoDB Atlas](https://account.mongodb.com/account/login?nds=true&_ga=2.53799790.754773367.1672107021-1055546340.1672107021&_gac=1.45787478.1672107021.CjwKCAiAqaWdBhAvEiwAGAQltm3pdx2laKih-31DCbQo-U6e_PJ8aizwcctAqawCcZgH9pTUSjGnVRoCKi8QAvD_BwE). 
	
	* Run this command in your terminal: 
	
	```
	wunderctl introspect mongodb mongodb+srv://<your-username>:<your-password>@cluster0.uvkwxgc.mongodb.net/<your-database-name>
	```
	
* Fourth, after running our introspection we need to craete our prisma schema.
	
	1. In our root directory create a file named ``` schema.prisma ```.
	
	2. Add the following content to your prisma file:
	
		```
			datasource db {
			    provider = "mongodb"
			    url      = "mongodb+srv://user:pass@cluster0.jzgqp26.mongodb.net/Tweets"
			  }

			model Tweets {
				id          String   @id @default(auto()) @map("_id") @db.ObjectId
				displayName String
				username    String
				verified    Boolean
				text        String
				avatar      String?
				image       String?
				date        DateTime @default(now())
			}
		```

### Initializing our Twitter Feed with Live Query
	
* Within our src directory we need to create a folder named 'lib'. Once added, create a file inside of lib called wundergraph.ts. Now we should be on the path 'src/lib/wundergraph.ts'. Within the file add the following contents:
	```
		import { createClient, Operations } from '../components/generated/client';

		import { createHooks } from '@wundergraph/swr';

		const client = createClient() // Typesafe WunderGraph client

		export const {
			useQuery,
			useMutation,
			useSubscription,
			useUser,
			useFileUpload,
			useAuth,
		} = createHooks<Operations>(client)
	```
	
### Creating our First Mutation w/Tweets
  
 
