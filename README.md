# Documentation

# ClubberNaut by Simple Swag Syndicate

Proud project presented by Simple Swag Syncidate! We aim to provide a user-friendly, aesthetically pleasing Club organization Web App for the University of Massachusetts Amherst. Since we are not officially supported by the university, we will also be utilizing its existing solution Campus Pulse for certain features. Our goal is to provide more visual aid and simplify website interactions rather than replacing Campus Pulse. We hope our project will promote more students to participate and enjoy Club activities!

## Members:

Jianxin Lin

Khang Do

Max Loper

Steven Arbo

Naveed Rizvi

Anirudh Sathiya Narayanan

Joseph Kiriacos

Donald Winkelman

## Description:

Campus Pulse is designed for RSOs to communicate with UMass Admin and the Student Government, but is not student friendly. There is no platform on campus where clubs can engage with their members easily and that is visually appealing.

We designed ClubberNaut for RSOs and clubs to efficiently communicate with students, with a simple UI to improve the user experience for all users of the app.

The project uses open-source UI components from Mantine UI. 

[Mantine](https://mantine.dev/)

## **1. Overview**

This project is a React application built with Next.js framework. It comprises several directories and files structured as follows:

![Screenshot 2024-05-13 at 5.09.34 PM.png](Documentation%207ca7933c43224ac6926a8ded0a82263d/Screenshot_2024-05-13_at_5.09.34_PM.png)

In the **`app`** directory, different sections of the application are organized such as club creation, home, search, login, personal, and signup. The **`components`** directory contains reusable UI components used throughout the application. Lastly, the **`controllers`** directory contains the UserInfo.js file, for handling user and club information.

## **2. Setup and Installation**

To run the application on a reasonably modern system, ensure the following dependencies are installed:

- Node.js
- npm (Node Package Manager)

After cloning the repository, navigate to the project directory and install dependencies using the following command:

### **Because we are hiding our Supabase key, you need to do the following:**

### Step 1:

Create a new file called `next.config.js` in the root directory

![Screenshot 2024-05-06 at 5.35.08 PM.png](Documentation%207ca7933c43224ac6926a8ded0a82263d/Screenshot_2024-05-06_at_5.35.08_PM.png)

### Step 2:

Inside the config file, add:

```jsx
// please remember to un-wrap the key
module.exports = {
  env: {
    SUPABASE_URL: 'https://fricdlpilwnfjdmtvvle.supabase.co',
    SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk'
  },
}
```

### Step 3:

Run the following commands one by one:

```bash
npm install

npm i postcss@8.1.0

npm update

npm run build
```

## **3. Running the Application**

To run the application, execute the following command in the project directory:

```jsx
npm run dev
```

This command will start the development server. Once the server is running, open a web browser and navigate to the specified localhost address (usually **`http://localhost:3000`**) to interact with the application.

## **4. User Flow**

![Screenshot 2024-05-16 at 4.38.17 PM.png](Documentation%207ca7933c43224ac6926a8ded0a82263d/Screenshot_2024-05-16_at_4.38.17_PM.png)

- From Home Page, user can navigate to Login Page for Account Creation and Sign In by clicking on Sign In/Sign Up button on Header.
- After successfully Sign In, user will be redirected to Home Page where user can view all followed club updates. Clicking on each club update will lead user to the respective Club Page.
- From Club Page, user can again view the many updates each club has, each club’s description, contact information and tags describing the club. Clicking on the follow/unfollow button will add/remove the club to/from user’s follow list and clicking on the write update icon will lead user to Create Update page where user can write clubs’ updates.
- User can navigate to Personal Page from Header, where user’s followed clubs will be displayed and events of followed clubs will be marked on user’s personal calendar.
- User can navigate to Create Club Page from Personal Page by clicking on the create club button, where user can create a new club.
- User can navigate to Search Page from Header, where all clubs in our database will be displayed via club cards. Each club card will display club’s name, associated tags and a follow/unfollow button, which when clicked on, added/remove the club to/from user’s followed list. Clicking on club’s name will also navigate user to respective Club Page. User can proceed to search for clubs via checking tags boxes and typing clubs’ names into the search bar and press enter.
- User can navigate back to Home Page via Header.
- User can toggle between Light and Dark Modes by clicking on the L/D button on Header.
- User can sign out by clicking on the Sign Out button on  Header and be redirected back to Login Page.
- User can navigate through the different pages when logged out with limited functionalities except search for clubs on Search Page.

## 5. Architecture

![Untitled](Documentation%207ca7933c43224ac6926a8ded0a82263d/Untitled.png)

Our architecture can be split up into 3 categories, Frontend, API, and Backend.

### **Frontend**

*Our frontend is a web application that uses React and Next.js. It also uses premade components from a library called Mantine.*

**React** is a javascript library that makes it easy (read: hard) to break up our website’s code into separate, more maintainable and reusable components. It also gives us access to high-quality libraries like Mantine. 

**Next.js** is a react app framework that renders our static webpage on the server-side before the user requests it. This vastly speeds up the time it takes for our website to load.

**Mantine** is a react components library that includes a variety of customizable components and hooks. While it came with a bit of a learning curve, this library gave us access to high-quality components we would’ve otherwise spent a long time designing ourselves.

### **API**

*Our API consists of various CRUD calls to our database and https.*

**CRUD calls** are a collection of calls we’ve written using the Supabase API that allow the frontend to create, read, update, and delete data on the database. The client has access to our database’s API via a secure Supabase url and key.

**https** is a secure transfer protocol for requesting hypertext and is the standard for serving websites over the internet.

### Backend

*This project uses the Supabase database and Node.js runtime environment.*

**Node.js** is a javascript runtime environment that allows us to run javascript in the browser. We use it to run a server for our [localhost](http://localhost) website and will use it in combination with AWS to deploy our website.

***Supabase** is a BAAS that itself uses postgreSQL and AWS. It allows us to create and customize relational database tables which store our user and club info. It also gives us access to an encrypted user authentication table where we can also store user data. Finally, Supabase provides data buckets for storage of larger files and images used for user avatars and club images/documents.*

**AWS** is a collection of cloud services that we we will specifically use to host our website. We haven’t deployed our website yet, but will likely use Amazon Lightsail which offers the best support for Node.js

### 6. Database Design

We have two main tables for storing data related to the project: 

1. Club Profile - Contains information about clubs. The schema of the table is (clubid: int, name: text, recent_update: jsonb[], tags: text[], advisors: jsonb, followers: int, description: text). 
2. User Profile - Contains information about the users. The schema of the table is (userid: int, name: text, password: text, email: text, clubs: text[], notifications: bool).

![Screenshot 2024-05-16 at 6.08.22 PM.png](Documentation%207ca7933c43224ac6926a8ded0a82263d/Screenshot_2024-05-16_at_6.08.22_PM.png)

When a user signs up for the first time, the backend checks if the user exists in the table and if not, it creates a new data entry into the User Profile table. When they try to login now, the backend retrieves the information from the User Profile to verify it is the correct user.

The home page has all the recent updates of the clubs the user follows which is retrieved from the Club Profile. The search page uses fuzzy search to check for all possible matches of clubs that the user inputs with the club data that is stored in the table. 

Both tables have realistic data to display the functionality of the different features of the app. The tables also have varying dummy data for testing.

## **7. GitHub Repository**

The codebase is hosted on GitHub. You can find the repository at  https://github.com/SimpleSwagSyndicate/ClubberNaut. 

## **8. Known Bugs or Limitations**

- Current club information is generated and not real.
- There are warnings that pop up when running the developer environment.