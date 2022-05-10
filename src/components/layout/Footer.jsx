import {FaBasketballBall} from 'react-icons/fa' 

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-white-700 text-black footer-center shadow-lg">

    <div>
 
       <FaBasketballBall className='inline pr-2 text-5xl'/>
        <p>Copyright &copy; {footerYear} All rights reserved</p>


    </div>

    </footer>
  )
}

export default Footer