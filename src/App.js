import logo from './logo.svg';
import './App.css';
import React, {lazy,Suspense} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import useAuthListener from './hooks/use-auth-listener'
import IsUserLoggedIn from './helpers/is-user-logged-in'
import ProtectedRoute from './helpers/protected-routes'



const Dashboard = lazy(()=> import('./pages/dashboard'))
const Login = lazy(()=> import('./pages/login'))
const SignUp = lazy(()=> import('./pages/signup'))
const Profile = lazy(()=> import('./pages/profile'))
const NotFound = lazy(()=> import('./pages/not-found'))



const App = () =>{

  const {user} = useAuthListener()
  
  return (
  <UserContext.Provider value={{user}}>
  <BrowserRouter>
   <Suspense fallback={<p>Loading...</p>}>
    <Switch>
    <IsUserLoggedIn 
      user={user} 
      loggedInPath={ROUTES.DASHBOARD}
      path={ROUTES.LOGIN}
      >
      <Login />
    </IsUserLoggedIn>
    <IsUserLoggedIn 
      user={user} 
      loggedInPath={ROUTES.DASHBOARD}
      path={ROUTES.SIGN_UP}
      >
      <SignUp />
    </IsUserLoggedIn>
      <Route path={ROUTES.PROFILE} component={Profile}/>
      <ProtectedRoute
      user={user}
      loggedInPath={ROUTES.LOGIN}
      Path={ROUTES.DASHBOARD} exact >
  
        <Dashboard/>

      </ProtectedRoute>
      
      <Route component={NotFound}/>
    </Switch>
  </Suspense>
  </BrowserRouter>
  </UserContext.Provider>
 
  )
}

export default App
