import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="py-2 flex justify-between border-b-gray-800 border ">
            <p className=" text-2xl  px-4 font-semibold text-gray-900">Messaging</p>
            <div className="my-auto ">
                <Link to='/login' className='py-2 px-4 text-sm mr-4 hover:bg-gray-800 hover:text-gray-100 rounded-md transition'>Login</Link>
                <Link to='/signup' className='py-2 px-4 text-sm mr-4 hover:bg-gray-800 hover:text-gray-100 rounded-md transition'>Signup</Link>
            </div>
        </div>
     );
}
 
export default Header;