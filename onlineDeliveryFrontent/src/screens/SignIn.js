import React from 'react';

export default function SignIn (){
    return (
        <div class="main-container">
            <form class="singinForm" action="">
                <div class="singinContainer">
                    <h1>Sign In</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>
                
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                
                    <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
                
                    <div class="defaultbtns">
                        <button type="button" class="cancelbtn"><b>Cancel</b></button>
                        <button type="submit" class="signupbtn"><b>Sign Up</b></button>
                    </div>
                    <div className="alternativeSingIn">
                        <button type="button" class="Facebookbtn"><b>Facebook</b></button>
                        <button type="submit" class="Googlebtn"><b>Google</b></button>
                    </div>
                </div>
            </form>

            <form class="singupForm" action="">
                <div class="singupContainer">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>
                
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <label for="address"><b>Address</b></label>
                    <input type="address" placeholder="Enter Address" name="address" required/>

                    <label for="phone"><b>Phone</b></label>
                    <input type="phone" placeholder="Enter Phone" name="phone" required/>
                
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                
                    <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
                
                    <div class="clearfix">
                        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                        <button type="submit" class="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}