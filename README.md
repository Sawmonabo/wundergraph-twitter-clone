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
<p>Now that we have setup our skeleton structure for our Twitter-Clone let's move on to adding WunderGraph to our application to help simpilize our lives.

* First, let's start with opening up our terminal and typing the command:
  ```js
  npx create-wundergraph-app twitter-clone -E simple
  ```

## MongoDB INIT


  ### Creating our First Mutation w/Tweets
  
  ### Initializing our Twitter Feed with Live Query
