import React, { Component, useState } from 'react'
import { blue } from '@mui/material/colors'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useAuth0,Auth0Provider } from "@auth0/auth0-react";


  let Login=()=>{
  let { loginWithRedirect ,logout,isAuthenticated,user } = useAuth0();
      let LoginStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh',
         background:'URL("Login Backgrund.png")',
        backgroundSize:'cover',
        backgroundPosition:'center',
      };
      let glassmorphism={
        width:'300px',
        backdropFilter:"blur(5px)",
        background:'rgba(100,100,100,0.2)',
        borderRadius:'15px',
        padding:'20px',
        boxShadow:'0 4px 6px rgba(0,0,0,0.1)',
        textAlign:'center',
        color:'#fff',
      };
      let h2Style={
        fontSize:'24px',
        marginBottom:'20px',
        background: '-webkit-linear-gradient(left, #12c2e9, #c471ed, #f64f59)',
        WebKitBackgroundClip:'text',
        WebKitTextFillColor:'transparent',
      };
      let inputStyle={
        width:'100%',
        height:'40px',
        border:'none',
        outline:'none',
        borderRadius:'20px',
        padding:'10px',
        margin:'10px 0'
      };
      let buttonStyle={
        width:'100%',
        height:'40px',
        background:blue[500],
        border:'none',
        outline:'none',
        borderRadius:'20px',
        color:'#fff',
        cursor:'pointer',
        margin:'10px 0',
      };
      let socialMediaIconStyle={
        display:'flex',
        justifyContent:'center',
      };
      let iconStyle={
        height:'40px',
        width:'40px',
        margin:'10px',
      };
      
      return(
        <Auth0Provider
        domain="dev-6vba5xgxywmtwzjl.us.auth0.com"
        clientId="AwJHJGoTOwP2WJTWDPujpxdBEoMFXWpB"
        redirectUri={window.location.origin}
      >
        <div style={LoginStyle}>
          <div style={glassmorphism}>
            <h2 style={h2Style}>Welcome to GoBojan</h2>
            <form>
              <div style={inputStyle}>
              <input type='text' placeholder='Username' required style={inputStyle} />
              </div>
              <div style={inputStyle}>
              <input type='password' placeholder='Password' required style={inputStyle} />
              
              </div>
              {/* <div>
              <button style={buttonStyle} onClick={() => loginWithRedirect()}>Log In</button>;
              </div> */}
              <li>
                {
                  isAuthenticated && <p>{user.name}</p>
                }
              </li>
              {
                isAuthenticated ? <li>
                <button style={buttonStyle} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                </li>
                :
                <li>
              <button style={buttonStyle} onClick={() => loginWithRedirect()}>Log In</button>
              </li>
              }
              
              
            </form>
            <div style={socialMediaIconStyle}>
              <InstagramIcon style={iconStyle}></InstagramIcon> <FacebookIcon style={iconStyle}></FacebookIcon>
            </div>
          </div>
        </div>
        </Auth0Provider>
      )
      
}
export default Login;