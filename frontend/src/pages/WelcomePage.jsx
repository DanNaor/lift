import  logo from '../Assets/WelcomeIcon.png'
function WelcomePage() {
  return (
    <div className="WelcomePage">
     <img className='logo' src={logo} ></img>
     <div className='text_section' >
      <button className='start_btn' ></button>  
     </div>
    </div>
  );
}

export default WelcomePage;
