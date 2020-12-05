import React from 'react'
import OrganizationProfile from './components/organization_profile/organization_profile'
import SignUp from './components/signup/signup'
import Login from './components/signup/login'
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import UserProfile from './components/user_profile/user_profile'
function App()
{
  return(
  	<div className="app">
		  <h1>sandeep</h1>
  		<HashRouter>
		  <OrganizationProfile/>
  			<Route exact path="/signup" component={SignUp}/>
			  <Route exact path="/login" component={Login}/>
  			<Route exact path="/userprofile" component={UserProfile}/>
			  <Route exact path="/organizationprofile" component={OrganizationProfile}/>
  		</HashRouter>
  	</div>
  )
}

export default App