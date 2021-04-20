# Voya

## Description
Have you ever worked for a company where you travel a lot with your personal vehicle ? I know I have.

If you are anything like me then you know that it can be cumbersome to keep track of all the kilometers (or miles) that you have traveled for work which sometimes causes a struggle at the end of the month when you have to claim back from the work.

Voya is Mobile App/PWA which enables you to keep track of all the trips that you have made which makes it much easier to get all the data at the end of the month for claims or sometimes tax purposes.


## Architecture

 - The frontend was built with VueJS using the Ionic Framework.
 - Firebase is used as the backend for this application providing:
	 - Authentication (Currently only with email and password)
	 - Firestore as the realtime database
	 - Hosting to host the PWA

## Demo
A live demo of the app can be accessed at https://demoasd-15612.web.app/

 - Remember this is a meant to be run as a PWA on your mobile phone so the content will not render correctly in the desktop browser.

## Screenshots

![image](https://user-images.githubusercontent.com/69923421/115449900-90145380-a21b-11eb-9009-ba0c1b839e20.png)
![image](https://user-images.githubusercontent.com/69923421/115450160-da95d000-a21b-11eb-9e26-a69d0b32b81b.png)
![image](https://user-images.githubusercontent.com/69923421/115450206-e8e3ec00-a21b-11eb-8cd7-146ad7f29937.png)
![image](https://user-images.githubusercontent.com/69923421/115450628-7293b980-a21c-11eb-8857-092d82d4ebfc.png)
![image](https://user-images.githubusercontent.com/69923421/115450301-02853380-a21c-11eb-958f-bc0fab061cfd.png)
![image](https://user-images.githubusercontent.com/69923421/115450376-1af54e00-a21c-11eb-9080-b904e803d8fd.png)
![image](https://user-images.githubusercontent.com/69923421/115450437-2c3e5a80-a21c-11eb-9e6f-1863a30c6d82.png)
![image](https://user-images.githubusercontent.com/69923421/115450473-37918600-a21c-11eb-9f11-1047ae65d3bc.png)
![image](https://user-images.githubusercontent.com/69923421/115450520-4710cf00-a21c-11eb-98b4-3029f3d25c50.png)

## Running Locally

Clone the repo:
```git clone https://github.com/MrTwister96/shiny-garbanzo.git voya```

Change to the directory and install dependencies:
```cd voya```
```npm install```

Create a new web app in firebase and update the firebaseConfig in the src/firebase.js file:
```
var  firebaseConfig = {
apiKey:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
authDomain:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
projectId:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
storageBucket:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
messagingSenderId:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
appId:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};
```

Serve the app locally:
```ionic serve```

## Contributions
All contributions to Voya are welcome but please follow the below:

 - Create a new Issue for anything that you are working on so that we all have visibility over each others intentions and no one overrides each other.
 - Please do not make changes directly in the master branch as this is the branch used for production.
 - Submit a PR with your changes.


## Suggestions & Collaborations

If you want to make any suggestions or you want to collaborate on any projects please feel free to contact me on discord, I am always looking for new opportunities to learn and work together in a team.

Discord Username: **MrTwister#7524**