import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';

const footer = () => {
  return (
    <div className=''
        style={{background: 'var(--special-green)'}}
    >
        <div className='flex flex-row justify-center items-center '>
            <div className='flex justify-center  gap-4'>
                <img src={github} alt='github' className='h-6 w-auto' />
                <img src={linkedin} alt='linkedin' className='h-6 w-auto' />
                <img src={instagram} alt='instagram' className='h-6 w-auto' />
            </div>
        </div>
    </div>
  );
}

export default footer;