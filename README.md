<br />

![GitHub repo size](https://img.shields.io/github/repo-size/eddiesosera/codegenius?color=%23FF4C54)
![GitHub watchers](https://img.shields.io/github/watchers/eddiesosera/codegenius?color=%23FFA191)
![GitHub language count](https://img.shields.io/github/languages/count/eddiesosera/codegenius?color=%231EBBBA)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/eddiesosera/codegenius?color=%234E54AD)

<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks]][forks-url]
[![Starsgazers][stars]][stars-url]

#

![Header][header]

<div align="center">

  <h3 align="center">CodeGenius </h3>

  <p align="center">
    CodeGenius is a Question-and-Answer forum for students and lecturers.
    <br />
    <br />
    Eddie Sosera
    <br />
    <br />
    <a href="https://github.com/eddiesosera/codegenius/blob/main/"><strong>Explore the docs</strong></a>
    <br />
    <br />
    <a href="https://www.youtube.com/watch?v=K2TSUsroUAA">View Demo</a>
    ·
    <a href="https://github.com/eddiesosera/codegenius/issues">Report Bug</a>
    ·
    <a href="https://github.com/eddiesosera/codegenius/issues">Request Feature</a>
  </p>
  <br />
</div>

## About this Project

![Banner][banner]

CodeGenius is a robust MERN Stack Question-and-Answer forum that serves as a dynamic platform for fostering collaboration between students and lecturers. With a focus on facilitating the exchange of development-specific knowledge and expertise, CodeGenius empowers users to post questions, provide answers, and engage in a rich learning environment.

<br />
<br />

## Table of Contents

- [Built With](#built-with)
- [Installation](#installation)
- [Features](#features)
- [Technical Functionality](#technical-functionality)
- [Development Process](#development-process)
- [Final Outcomes](#final-outcomes)
- [Reporting Issues](#reporting-issues)
- [Authors](#authors)
- [Licenses](#licenses)
- [Contact](#contact)

<br />
<br />

## Built With

- [![React][react.js]][react-url]
- [![Express][express.js]][express-url]
- [![Mongodb][mongodb]][mongodb-url]
- [![jwt][jwt]][jwt-url]
- [![bootstrap][bootstrap]][bootstrap-url]
- [![nodemon][nodemon]][nodemon-url]
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INSTALLATION -->

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/eddiesosera/codegenius.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the client server in `client/term4-group2-qna`
   ```sh
   npm start
   ```
4. Start the backend server in `server` file
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br />
<br />
<!-- FEATURES -->

## Features

<!-- ### Homescreen -->

![Homescreen][home]
The homescreen displays all the questions which you can filter by upvotes and time (by default it shows the latest). You can answer other people’s questions by clicking on `Answer(0)`.

<br />
<!-- ### Question Page -->

![Question][question]
The question page allows users to give an answer to the question and they can browse through other answers for help.
Users can also reply to answers.

<br />
<!-- ### Create Question -->

![Create Question][createquestion]
The Create Question page allows users to create questions by filling in the form they can also add images with a size limit of 500kb.

<br />
<!-- ### Search Bar -->

![Search Bar][searchbar]
The search allows users to search anything from questions, users and topics. The most relevant results will be at the top. The orange button takes you to the question results page.

<br />
<!-- ### Search Results -->

![Search Results][searchresults]
The question results displays more than 5 results as seen in the question bar. Additionally the user can filter the type of results.

<br />
<!-- ### User Profile -->

![User Profile][userprofile]
The User Profile is a summary of the user’s information such reliability score, bio, questions asked, replies and answers.

The reliability score is generated based on the user’s number of questions and the number of votes each question has.

They have the option to edit their profile.

<br />
<!-- ### Admin -->

![Admin][admin]
The admin’s view gives the admin special permission to delete ant user’s question.

<br/>
<br/>

#### Technical Funtionality

- `CRUD funtionality` on Questions, Answers, Replies(additional) and Users.
- `Upvote and Downvote` questions.
- `Search and Filter` Questions being displayed.
- `Authentication` using password encryption library.
- `Authorization` using tokens (JWTs).
- `Reliability score` system based on interaction.

<br/>

#### ERD

![Entity Relationship Diagram][erd]

<br />
<br />
<!-- DEVELOPMENT PROCESS -->

## Development Process

The `Development Process` the technical implementations and functionality done for the website.

#### Highlights

The setup of the project was overal fun for me as I got the opportunity explore complex task like creating dynamic functions that work as a state store without using any library.

#### Challenges

Generally the project was not challenging as we did a similar project in our previous term, however the backend was a bit challenging as I had to familiarize myself again with `Vanailla Javascript.`

<br/>
<br/>
<!-- FINAL OUTCOMES -->

## Final Outcomes

[View Demonstration](https://www.youtube.com/watch?v=K2TSUsroUAA)

<!-- CONCLUSION -->

<br/>
<br/>

## Conclusion

### How to Contribute

1. **Fork the repository:**

   - Fork this repository to your GitHub account.

2. **Clone your fork:**

   - Clone the repository to your local machine using the following command:
     ```
     git clone https://github.com/eddiesosera/codegenius.git
     ```

3. **Create a branch:**

   - Create a new branch for your feature or bug fix:
     ```
     git checkout -b feature-branch
     ```

4. **Make your changes:**

   - Make your desired changes in the codebase.

5. **Test your changes:**

   - Ensure that your changes do not introduce new issues.
   - Run relevant tests if available.

6. **Commit your changes:**

   - Commit your changes with a descriptive commit message:
     ```
     git commit -m "Your informative commit message"
     ```

7. **Push your changes:**

   - Push your changes to your forked repository:
     ```
     git push origin feature-branch
     ```

8. **Create a pull request:**
   - Open a pull request against the `main` branch of the original repository.
   - Provide a clear title and description for your pull request.

<br/>
<br/>
<!-- REPORTING ISSUES -->

### Reporting Isssues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/eddiesosera/codegenius/issues) on GitHub.

<br/>
<!-- AUTHORS -->

### Authors

<div style="display: flex; justify-content: space-between;">
  <div style="text-align: center;">
    <a href="https://github.com/eddiesosera/">
      <img src="https://github.com/eddiesosera.png" alt="eddie Sosera" width="100px">
    </a>
    <br>
    <sub>Eddie Sosera</sub>
  </div>
  <br />

  <div style="text-align: center;">
    <a href="https://github.com/CSWilder02/">
      <img src="https://github.com/CSWilder02.png" alt="CS Strijdom" width="100px">
    </a>
    <br>
    <sub>CS Strijdom</sub>
  </div>
  <br />
  
  <div style="text-align: center;">
    <a href="https://github.com/DupieM/">
      <img src="https://github.com/DupieM.png" alt="Mariné Du Plessis" width="100px">
    </a>
    <br>
    <sub>Mariné Du Plessis</sub>
  </div>
  <br />
  
  <div style="text-align: center;">
    <a href="https://github.com/BladeyBoy54/">
      <img src="https://github.com/BladeyBoy54.png" alt="Bladen Lehnberg" width="100px">
    </a>
    <br>
    <sub>Bladen Lehnberg</sub>
  </div>
  <br />

</div>

<br/>
<!-- LICENSE -->

### License

Distributed under the MIT License. See [License](https://opensource.org/license/mit/) for more information.

<br/>

### Contact

**LinkedIn** - [@eddiesosera](https://www.linkedin.com/in/eddiesosera/), or
[Visit website](https://engineeredimagination.co.za).

<br/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- RESOURCES USED LINK -->

[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[express-url]: https://expressjs.com/
[mongodb]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://www.mongodb.com/
[jwt]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[jwt-url]: https://jwt.io/
[bootstrap]: https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com/
[nodemon]: https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD
[nodemon-url]: https://nodemon.io/
[contributors-shield]: https://img.shields.io/github/contributors/CSWilder02/Term-4-Group-2---Project.svg?style=for-the-badge
[contributors-url]: https://github.com/CSWilder02/Term-4-Group-2---Project/graphs/contributors
[forks]: https://img.shields.io/github/forks/CSWilder02/Term-4-Group-2---Project.svg?style=for-the-badge
[forks-url]: https://github.com/CSWilder02/Term-4-Group-2---Project/forks
[stars]: https://img.shields.io/github/stars/CSWilder02/Term-4-Group-2---Project.svg?style=for-the-badge
[stars-url]: https://github.com/CSWilder02/Term-4-Group-2---Project/stargazers
[eddie-img]: https://github.com/eddiesosera.png

<!-- MARKDOWN LINKS & IMAGES -->

[banner]: client/src/components/assets/readme/banner.png
[header]: client/src/components/assets/readme/header.png
[home]: client/src/components/assets/readme/features/codegenius_feature_home.png
[question]: client/src/components/assets/readme/features/codegenius_feature_question.png
[createquestion]: client/src/components/assets/readme/features/codegenius_feature_createQuestion.png
[searchbar]: client/src/components/assets/readme/features/codegenius_feature_searchbar.png
[searchresults]: client/src/components/assets/readme/features/codegenius_feature_searchResults.png
[userprofile]: client/src/components/assets/readme/features/codegenius_feature_userProfile.png
[admin]: client/src/components/assets/readme/features/codegenius_feature_admin.png
[erd]: client/src/components/assets/readme/process/erd.png
