"use client"
//import Image from "next/image";
export default function Page() {
  

const handleGitHubLogin = () => {
  const clientId: string = "Ov23li3kJgisbMmtA44m";
// create a CSRF token and store it locally
const state = "asdasd123123asdasd123";
localStorage.setItem("latestCSRFToken", state);
// redirect the user to github
const link = `https://github.com/login/oauth/authorize?client_id=${clientId}&response_type=code&state=${state}`;
window.location.assign(link);
};


  return (
   <div>           
    <button onClick={handleGitHubLogin}>Login with GitHub</button>
  </div>
  );
} 