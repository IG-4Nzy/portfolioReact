import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export function Socialmedias() {
    return (
        <div>
            <ul className='lg:space-x-12 justify-center mt-5 md:space-x-5 space-x-4 hidden md:flex'>
                <a href="https://www.instagram.com/ig_4nzy/" ><li><FontAwesomeIcon className='text-color5 md:text-4xl text-3xl hover:text-violet-600' icon={faInstagram} /></li></a>
                <a href="https://www.linkedin.com/in/athul-krishnan-a-s-182109230/" ><li><FontAwesomeIcon className='text-color5 md:text-4xl text-3xl hover:text-blue-400' icon={faLinkedin} /></li></a>
                <a href="https://www.facebook.com/athul.sreeni.35/" ><li><FontAwesomeIcon className='text-color5 md:text-4xl text-3xl hover:text-blue-600' icon={faFacebook} /></li></a>
                <a href="" ><li><FontAwesomeIcon className='text-color5 md:text-4xl text-3xl hover:text-gray-600' icon={faXTwitter} /></li></a>
                <a href="https://github.com/IG-4Nzy" ><li><FontAwesomeIcon className='text-color5 md:text-4xl text-3xl hover:text-gray-600' icon={faGithub} /></li></a>
                <a href="https://www.youtube.com/channel/UC3fEAuhS1nrfm2q97LeaUOg" ><li><FontAwesomeIcon className='text-color5 md:text-4xl text-3xl hover:text-red-600' icon={faYoutube} /></li></a>
            </ul>
            <p className='md:hidden text-color5 text-xl flex justify-center mt-10'>Follow Me On </p>
            <ul className=' justify-center mt-5 space-x-10 md:hidden flex  '>
                <div className='space-y-5'>
                    <a href="" ><li><FontAwesomeIcon className='text-color5 md:text-4xl text-4xl hover:text-violet-600 ' icon={faInstagram} /></li></a>
                    <a href="" ><li><FontAwesomeIcon className='text-color5 md:text-4xl text-4xl hover:text-blue-400 mt-5' icon={faLinkedin} /></li></a>
                </div>
                <div className='space-y-5'>
                    <a href="" ><li><FontAwesomeIcon className='text-color5 md:text-4xl text-4xl hover:text-blue-600' icon={faFacebook} /></li></a>
                    <a href="" ><li><FontAwesomeIcon className='text-color5 md:text-4xl text-4xl hover:text-gray-600 mt-5' icon={faXTwitter} /></li></a>
                </div>
                <div className='space-y-5'>
                    <a href="" > <li><FontAwesomeIcon className='text-color5 md:text-4xl text-4xl hover:text-gray-600' icon={faGithub} /></li></a>
                    <a href="" ><li><FontAwesomeIcon className='text-color5 md:text-4xl text-4xl hover:text-red-600 mt-5' icon={faYoutube} /></li></a>
                </div>

            </ul>
        </div>
    );
}