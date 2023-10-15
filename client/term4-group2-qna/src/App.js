import React, { useEffect, useState, useContext, createContext, } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './components/util/Routes/privateRoute';
import getDataOf from './components/util/DataRequests/fetchData';

import './App.css';
import './css/colors.css';
import './css/components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

// require('dotenv/config');

// Use Context Providers
import { NavBar } from './components/elements/Navbar/navBar';
import { Home } from './components/screens/Home/home';
import { LoggedInUserProvider, useLoggedInUser } from './components/util/UseContext/loggedInUserContext';
import { UsersProvider, useUsers } from './components/util/UseContext/usersContext';
import { QuestionsProvider, useQuestions } from './components/util/UseContext/questionsContext';
import { AnswersProvider, useAnswers } from './components/util/UseContext/answersContext';
import { RepliesProvider, useReplies } from './components/util/UseContext/repliesContext';
import { OnBoarding } from './components/screens/Entitities/OnBoarding/onboarding';
import { Questions } from './components/screens/Content/Questions/questions';
import { UserProfile } from './components/screens/Entitities/User/Profile/userProfile';
import { UserAccount } from './components/screens/Entitities/User/Account/userAccount';
import { Answers } from './components/screens/Content/Answers/answers';
import { Question } from './components/screens/Content/Question/question';
import { Topics } from './components/screens/Content/Topics/topics';
import { Search } from './components/screens/Content/Search/search';
import { Notifications } from './components/screens/Content/Notifications/notifications';
import { Error404 } from './components/screens/404/error404';
import { useTopics } from './components/util/UseContext/topicsContext';
import { useCommunities } from './components/util/UseContext/communitiesContext';


function App() {

  return (
    <LoggedInUserProvider>
      <UsersProvider>
        <QuestionsProvider>
          <AnswersProvider>
            <RepliesProvider>
              <AppContent />
            </RepliesProvider>
          </AnswersProvider>
        </QuestionsProvider>
      </UsersProvider>
    </LoggedInUserProvider>
  );
}

const AppContent = () => {

  const { loggedInUser, setLoggedInUser } = useLoggedInUser();
  const { users, setUsers } = useUsers();
  const { communities, setCommunities } = useCommunities();
  const { questions, setQuestions } = useQuestions();
  const { answers, setAnswers } = useAnswers();
  const { replies, setReplies } = useReplies();
  const { topics, setTopics } = useTopics();

  useEffect(() => {
  }, [users])

  return (
    <div className="App">
      <NavBar user={loggedInUser} users={users} />
      <Routes>
        <Route path='/' element={<Home user={loggedInUser} users={users} questions={questions} topics={topics} />} />
        <Route path='/questions/:id' element={<Questions user={loggedInUser} users={users} questions={questions} topics={topics} />} />
        <Route path='/onboarding' element={<OnBoarding users={users} />} />
        <Route path='/profile/:type/:id' element={<UserProfile />} />
        <Route path='/account/:type/:id' element={<UserAccount />} />
        <Route path='/question/:id' element={<Question />} />
        <Route path='/answer/:id' element={<Answers />} />
        <Route path='/topic/:id' element={<Topics />} />
        <Route path='/search/:query' element={<Search />} />
        <Route path='/notification' element={<Notifications />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App;
