import React,{useState} from 'react'
import './css/style.css'
import './fonts/material-icon/css/material-design-iconic-font.min.css'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'

function SignUp()
{
	const [data,setData]=useState({})
	const errors={
		nameError:'',
		emailError:'',
		phoneError:'',
		passwordError:'',
		confirmPasswordError:''
	}
	const [error,setError]=useState(errors)
	const handleInput=event=>{
		setData({...data,[event.target.name]:event.target.value})
	}
	console.log(data)
	const onsubmit=()=>{
		formValidation()
	}
	const CheckPassword=()=>{
		var password = data.password?data.password:'';
		console.log("sandy",password)
        var reg = new RegExp(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/);
        var pass = reg.test(password);
        if (!pass && password.length > 0) {
            setError(error => ({ ...error, passwordError: "Password must be at least 8 character. it contains at least one digit, one capital, one small and one special character!" }))
        }
	}
	const CheckMobile=()=>{
		if(data.userphone?data.password:''.length!=10)
		{
			setError(error=>({...error,phoneError:'Phone number must be 10 digits'}))
		}
	}
	const CheckConfirmPassword=()=>{
		if(data.password===data.re_pass && data.re_pass?data.re_pass:''>0)
		{
			setError(error=>({...error,confirmPasswordError:'confirm password does not match'}))
		}
	}
	const errorReset=()=>{
		setError(errors)
	}
	const formValidation=()=>{
		if(!data.username)
		{
			setError(error=>({...error,nameError:'username required'}))
		}
		if(!data.useremail)
		{
			setError(error=>({...error,emailError:'email required'}))
		}
		if(!data.userphone)
		{
			setError(error=>({...error,phoneError:'phone number required'}))
		}
		if(!data.password)
		{
			setError(error=>({...error,passwordError:'password must be required'}))
		}
		CheckPassword()
		CheckConfirmPassword()
		CheckMobile()

	}
	console.log(error)
	return(
		<div>
		<div class="container-fluid singup-nav fixed-top">
			<h2>Logo</h2>
		</div>
		<div class="mypage-singup">
		 	<div class="main">
		        <section class="signup">
		            <div class="container1">
		                <div class="signup-content">
		                    <div class="signup-form">
		                        <h2 class="form-title">Sign up</h2>
		                        <div  class="register-form" id="register-form">
		                        	<p className={`text-danger kane ${error.nameError?'animate__animated animate__shakeX animate_faster':''}`} style={{ fontSize: 12 }}>{error.nameError}</p>
		                            <div class="form-group">
		                                <label for="username"><i class="zmdi zmdi-account material-icons-name"></i></label>
		                                <input value={data.username} onClick={errorReset} onChange={handleInput} type="text" name="username" id="username" placeholder="Your Name"/>
		                            </div>
		                            <p className={`text-danger kane ${error.emailError?'animate__animated animate__shakeX ':''}`} style={{ fontSize: 12 }}>{error.emailError}</p>
		                            <div class="form-group">
		                                <label for="useremail"><i class="zmdi zmdi-email"></i></label>
		                                <input value={data.useremail} onClick={errorReset} onChange={handleInput} type="email" name="useremail" id="useremail" placeholder="Your Email"/>
		                            </div>
		                            <p className={`text-danger kane ${error.phoneError?'animate__animated animate__shakeX ':''}`} style={{ fontSize: 12 }}>{error.phoneError}</p>
		                            <div class="form-group">
		                                <label for="userphone"><i class="zmdi zmdi-pin-account"></i></label>
		                                <input value={data.userphone} onBlur={CheckMobile} onClick={errorReset} onChange={handleInput} type="number" name="userphone" id="userphone" placeholder="Your Mobile Number"/>
		                            </div>
		                            <p className={`text-danger kane ${error.passwordError?'animate__animated animate__shakeX ':''}`} style={{ fontSize: 12 }}>{error.passwordError}</p>
		                            <div class="form-group">
		                                <label for="password"><i class="zmdi zmdi-lock"></i></label>
		                                <input value={data.password} onBlur={CheckPassword} onClick={errorReset} onChange={handleInput} type="password" name="password" id="password" placeholder="Password"/>
		                            </div>
		                            <p className={`text-danger kane ${error.confirmPasswordError?'animate__animated animate__shakeX ':''}`} style={{ fontSize: 12 }}>{error.confirmPasswordError}</p>
		                            <div class="form-group">
		                                <label for="re_pass"><i class="zmdi zmdi-lock-outline"></i></label>
		                                <input value={data.re_pass} onBlur={CheckConfirmPassword} onClick={errorReset} onChange={handleInput} type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
		                            </div>
		                            <div class="form-group form-button">
		                               <Link to="/login" onClick={onsubmit} class="btn submit-btn">Register</Link>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="signup-image d-sm-block d-none">
		                        <figure><img src={require('./images/signup-image.jpg')} alt="sing up image"/></figure>
		                        <a href="#" class="signup-image-link">I am already member</a>
		                    </div>
		                </div>
		            </div>
		        </section>
		    </div>
		</div>
		</div>
	)
}

export default SignUp