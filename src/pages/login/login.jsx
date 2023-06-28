import React from "react";
import {useNavigate} from 'react-router-dom';
import bgimg from '../../assets/vecteezy.jpg';
import "../../pages/login/login.scss";

export const Login = () => {

    const navigate = useNavigate();

    const respond = () => {
            var em= document.getElementById('email');
	    	var pass= document.getElementById('password');

	    	if(em.value=="" || pass.value==""){
	    		alert("Please Fill all the Fields");
	    		return false;
	    	}
	       var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if(em.value.match(format))
           {
             navigate('/contact');   
             return true;     
           }
           else
           {
           	   alert("Please Enter a valid email address");
               return false;
           }
           
    };
    return(
        <section class="cov" style={{ backgroundImage: `url(${bgimg})` }}>
        <div class="container">
            <h1>Log In</h1>
            <div class="ip">
               <input type="email" placeholder="Email" id="email"></input>
               <input type="password" placeholder="Password" id="password"></input>
            </div>
            <button type="submit" onClick={respond}>Submit</button>
        </div>
        </section>
    );
};
