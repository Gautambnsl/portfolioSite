// Import Assets
import Nft from '../assets/nft.png';
import Recipe from '../assets/recipe.png';
import Drum from '../assets/drum.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Mint NFT</h3>
                    <img src={Nft} alt="Uniswap Swap Page" />
                    <p>Minted NFT on Robsten Test Network Using Hardhat
                    </p>

                    <a href="https://github.com/Gautambnsl/mint-NFT" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Site</a>
                    <a href="https://github.com/Gautambnsl/mint-NFT" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Code</a></div>

                <div className="projects__card">
                    <h3>Food-Recipe</h3>
                    <img src={Recipe} alt="Compound Landing Page" />
                    <p>Food-Recipe Search Website
                    </p>

                    <a href="https://github.com/Gautambnsl/Recipe-project#readme" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Site</a>
                    <a href="https://github.com/Gautambnsl/Recipe-project" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Code</a>
                </div>

                <div className="projects__card">
                    <h3>Drum KIT</h3>
                    <img src={Drum} alt="Aave Landing Page" />
                    <p>Drum KIT - Wesite to make Some Fun MUSIC
                    </p>

                    <a href="https://gautambnsl.github.io/Drum-kit/" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Site</a>
                    <a href="https://github.com/Gautambnsl/Drum-kit" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;