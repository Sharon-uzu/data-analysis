import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";


const Header = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        setDropdownOpen(!isDropdownOpen);
        document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

    }

    const [category, setCategory] = useState(false)
    function open(){
        setCategory(!category)
    }


  return (
    <div>
        <header>
            <nav>
                <Link to='/'><h1>Data School</h1></Link>

                <div className='bars' onClick={handleClick}>
                  {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
                </div>

                <ul className={click ? 'active' : 'ul'}>
                    <li className='categ' onClick={open}>Categories
                    { category ?(
                        <div>
                            <p><Link to="/categories">Real Estate</Link></p>
                            <p><Link to="/categories">Real Estate</Link></p>
                            <p><Link to="/categories">Real Estate</Link></p>
                            <p><Link to="/categories">Real Estate</Link></p>
                        </div>):null
                        }
                        </li>
                    <form className='s-form'>
                        <input type="search" placeholder='Search' />
                    </form>
                    <Link to="/dataset"><button>Download DataSet</button></Link>
                    <a href=""><button>Login</button></a>
                    <a href=""><button className='btn'>Sign up</button></a>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header