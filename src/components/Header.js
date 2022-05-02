// Import Assets
import profile from '../assets/DP.jfif';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Gautam Bansal</h1>
                <p>Blockchain Developer</p>
                {/* <button className='button'>Get In Touch */}
                <a href="https://www.linkedin.com/in/gautambnsl/" className='button' style={{textDecoration: 'none', color: 'white'}} target="_blank">Get In Touch</a>
                {/* </button> */}
            </div>
        </section>
    );
}

export default Header;