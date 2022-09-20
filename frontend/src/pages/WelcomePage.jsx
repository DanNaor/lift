import  logo from '../Assets/WelcomeIcon.png'
import Button from '@mui/material/Button';
import colors from '../Assets/colors';
import { ThemeProvider } from '@mui/material';
function WelcomePage() {
  return (
    <div className="WelcomePage">
     <img className='logo' src={logo} ></img>
     <div className='text_section' >
    
      <text className='welcome_Text'>Welcome</text>
      <text className='text_desc'>dan’s personal app for logging exercises stats and implementing progressive overload</text>
      <ThemeProvider theme={colors}>
      <Button className='start_btn' style={{ fontSize: '40px' ,borderRadius:'100px'}} color='main' variant='contained'>LETS GO!!</Button>
      </ThemeProvider>
      <text className='text_quote'>“When you hit failure, your workout has just begun”
- Ronnie Coleman.</text>
      {/* <button className='start_btn' >LETS GO!!</button>   */}
     
     </div>
    </div>
   
  );
}

export default WelcomePage;
