# Steam Recommendation Hub
This project pursues the achievement of developing an application that helps Steam
users to discuss with one another about games that are supported by Steam. This is a
React Native mobile application using the MongoDB database as storage for the application.

### Operation platform

The application can run on multiple devices including Android and IOS mobile phones through
an app called ExpoGo. We will run you through the steps as to how to run the application in the
get started section of this README. However, to start the servers you need a Windows or MacOS computer
for you to be able to use the application successfully.

### Implemented programming languages

The language which we have settled on using is Javascript. We decided to go along with this selection
because it's compatible with React Native which makes the programming of mobile applications simpler. React Native supplies numerous of advantageous concepts of mobile applicational development which accelerates up the programming process. Another reason is due to the simplilcity of handling with CRUD(Create, Read, Update, Delete) API calls to the backend server.

### Libraries

When it comes to libraries, we have a total of 13 which we have utilized. We would like to note that some are installed by default during the initialization process of the React Native development environment so we will talk about the libraries which we have directly utilized.

- `react-native`: This library hold the react native development syntax which we utilized for creating components.
- `axios`: Axios was used to make client side API calls to the backend server.
- `express`: Express was used to initialize the backend server and handle the API routes when they were hit from
an incoming request from the client.
- `mongoose`: Mongoose was used to initialize and communicate with the MongoDB database.
- `expo`: Expo was utilized to run our application on a mobile phone.

### Get started

To run the application successfully, make sure to follow the steps down below.

##### Step 1 | Download necessary tools
Before you start, you need to install the necessary tools that you need to run the application successfully. We will provide you
with the necessary links to ensure that you can run the application. If you ever get confused about the setup process, you can follow
resources online.

###### Tools required
- [MongoDBCompass](https://www.mongodb.com/products/tools/compass): This is the local MongoDB database
- [NodeJS](https://nodejs.org/en/download/current): This allows you to run the npm command. We would like to not that you might be required to edit you system's environment variables. However, there are numerous amounts of sources as to how to do this.
- [Expo Go](https://reactnative.dev/docs/environment-setup): These are the instructions for running the application on your smartphone through the Expo Go application

##### Step 2 | Cloning the repository
Next, open up your favorite terminal, and cd into a directory that you don't mind cloning the repository into such as desktop.
Now, clone the repository by running `git clone https://github.com/psychout98/steamhub.git`. After that process has completed,
move onto the next step.

##### Step 3 | Installing necessary libraries
Now run `cd steamhub`. Now if you have installed NodeJS correctly then you should be able to run `npm install`. If successful, you should have all
the necessary libraries to run the application now.

##### Step 4 | Setting up the backend
There are a lot of moving parts in the backend. You will need to setup MongoDBCompass after you installed it, and populate your local MongoDB database with games provided by Steam by following the steps. First, open a brand new terminal and cd into the root directory of the project. You should be in the same directory level as in you first terminal when you cloned the repository. Then run `npm run serve` to start the backend serve. Then run the curl command `curl -d "" -X POST http://localhost:3000/api/games` to populate the database with all of Steam's games. Then open MongoDBCompass if you haven't so already and click on the connect button. Now you are ready to move on forward to the next step.

##### Step 5 | Configure your IP address
Make sure the URL variable `axios.defaults.baseURL` in `App.js` is configured to match your machine's IP address. You can do this by opening a terminal and run the command `ipconfig`. You can find numerous resources online if you get confused which IP address is associated with your current device. When running the application on your smartphone, the calls to the API need to be directed to your machine specifically, where the server is running.

##### Step 6 | Setting up the frontend
Install the Expo Go app on your smartphone if you haven't so already, and in the other terminal tab that isn't running the server, run `npm start` to start the frontend server of the application. A QR code should be generated from the terminal and go on the app to scan it. Now you should see the application's login screen and now you are ready to go explore the Steam Recommendation Hub.
