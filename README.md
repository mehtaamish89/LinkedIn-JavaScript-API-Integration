# LinkedIn-JavaScript-API-Integration
Integrating JavaScript API Using Angular JS.

For Demo <a href="http://linkedinapp.s3-website-us-west-1.amazonaws.com/"> Click Here </a>


<H3> Steps to integrate Sing-in with linked-In</H3>
<ol>
<li> You need to create a application with Linkedin which will have the permission to access the data available of the logged in users          profile.<br>
     <a href="https://www.linkedin.com/secure/developer?newapp="><b>Click here to create a new Linkedin Application</b></a>
</li>
<li> To use the login feature in your application you need to add the LinkedIn javascript libray on your web page.
     This library can be download from <a href="http://platform.linkedin.com/in.js" > here</a>.<br>
     It can also be directly referenced as follows:
     <br>
     
        <script type="text/javascript" src="//platform.linkedin.com/in.js"><br>
            api_key: YOUR_API_KEY_HERE //Application key from your application
            authorize: true            //check if user is already logged in and a cookie is present
            onLoad: onLinkedInLoad     //Javascript function to be executed after login.
        </script>
</li>
<li> Use the following tag to display the signin with LinkedIn button on the web page. <br>

      <script type="in/Login"></script>
</li>
<li>
     Define following functions to handle Singin event on the web page.
     
     <script type="text/javascript">
    
          // Setup an event listener to make an API call once auth is complete
          function onLinkedInLoad() {
              IN.Event.on(IN, "auth", getProfileData);
          }

          // Handle the successful return from the API call
          function onSuccess(data) {
              console.log(data);
          }

          // Handle an error response from the API call
          function onError(error) {
              console.log(error);
          }

          // Use the API call wrapper to request the member's basic profile data
          function getProfileData() {
              IN.API.Raw("/people/~").result(onSuccess).error(onError);
          }

      </script>
</li>
</ol>

For further reference <a href="https://developer.linkedin.com/docs/signin-with-linkedin"> Click here</a>

