import logo from '../../images/nba.png'
import {Link} from 'react-router-dom'

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-white-700 text-black'>
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
        <Link to='/' className='text-lg font-bold align-middle'>
          <img src={logo} alt={"logo"} height={100} width={130}></img>
        </Link>
        </div>

        <div>
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'NBA Basketball Players'
}

export default Navbar