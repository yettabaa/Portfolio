import Menu from '../assets/Menu.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';

const Header = () => {
    return (
        <div className='flex flex-row justify-center items-center p-5 fixed top-0 left-0 right-0'>
        <div className='mr-auto'>
            <img src={Menu} alt="Menu" className="h-6 w-auto" />
        </div>
        {/* <div className='flex justify-center  gap-4'>
            <img src={github} alt="github" className="h-6 w-auto" />
            <img src={linkedin} alt="linkedin" className="h-6 w-auto" />
            <img src={instagram} alt="instagram" className="h-6 w-auto" />
        </div> */}
    </div>

    );
}
export default Header;