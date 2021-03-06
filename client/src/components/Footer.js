import React from "react"
import { Link } from 'react-router-dom'
import Social from "./MintSocial"
import Newsletter from "./Newsletter"
import Popup from "reactjs-popup";
import Contact from "./ContactUs"

export default props => {
    return (
        <footer>
          <div className="scoreBar">
            <div className="games1">
              <Link to="/games/Bulls/Wizards">
                <div className="GAME">
                  <div className="WIN">
                    Bulls - 110
                  </div>
                  <div className="LOSS">
                    Wizards - 100
                  </div>
                </div>
              </Link>

              <Link to="/games/Hornets/Cavaliers">
                <div className="GAME">            
                  <div className="WIN">
                    Hornets - 110
                  </div>          
                  <div className="LOSS">
                    Cavaliers - 100
                  </div>
                </div>
              </Link>

              <Link to="/games/Heat/Sixers">
                <div className="GAME">            
                  <div className="WIN">
                    Heat - 110
                  </div>          
                  <div className="LOSS">
                    76ers - 100
                  </div>
                </div>
              </Link>

              <Link to="/games/Raptors/Pistons">
                <div className="GAME">
                  <div className="WIN">
                    Raptors - 110
                  </div>
                  <div className="LOSS">
                    Pistons - 100
                  </div>
                </div>
              </Link>

              <Link to="/games/Pelicans/Timberwolves">
                <div className="GAME">
                  <div className="WIN">
                    Pelicans - 110
                  </div>
                  <div className="LOSS">
                    Timberwolves - 100
                  </div>
                </div>
              </Link>

              <Link to="/games/Grizzlies/Thunder">
                <div className="GAME">
                  <div className="LOSS">
                    Grizzlies - 100
                  </div>
                  <div className="WIN">
                    Thunder - 110
                  </div>
                </div>
              </Link>

              <Link to="/games/Magic/Nuggets">
                <div className="GAME">
                  <div className="WIN">
                    Magic - 110
                  </div>
                  <div className="LOSS">
                    Nuggets - 100
                  </div>
                </div>
              </Link>
              <Link to="/games/Celtics/Mavericks">
                <div className="GAME">
                  <div className="WIN">
                    Celtics - 110
                  </div>
                  <div className="LOSS">
                    Mavericks - 100
                  </div>
                </div>
              </Link>
              <Link to="/games/Warriors/Blazers">
              <div className="GAME">
                <div className="LOSS">
                  Golden State - 100
                </div>
                <div className="WIN">
                  Trail Blazers - 110
                </div>
              </div>
              </Link>

              

            </div> {/* games */}

            <div className="games2">

            <Link to="/games/Bulls/Wizards">
                <div className="GAME">
                  <div className="WIN">
                    Bulls - 110
                  </div>
                  <div className="LOSS">
                    Wizards - 100
                  </div>
                </div>
              </Link>

              <Link to="/games/Hornets/Cavaliers">
                <div className="GAME">            
                  <div className="WIN">
                    Hornets - 110
                  </div>          
                  <div className="LOSS">
                    Cavaliers - 100
                  </div>
                </div>
              </Link>

              <Link to="/games/Heat/Sixers">
                <div className="GAME">            
                  <div className="WIN">
                    Heat - 110
                  </div>          
                  <div className="LOSS">
                    76ers - 100
                  </div>
                </div>
              </Link>

              <Link to="/games/Raptors/Pistons">
                <div className="GAME">
                  <div className="WIN">
                    Raptors - 110
                  </div>
                  <div className="LOSS">
                    Pistons - 100
                  </div>
                </div>
              </Link>

              <Link to="/games/Pelicans/Timberwolves">
                <div className="GAME">
                  <div className="WIN">
                    Pelicans - 110
                  </div>
                  <div className="LOSS">
                    Timberwolves - 100
                  </div>
                </div>
              </Link>

              <Link to="/games/Grizzlies/Thunder">
                <div className="GAME">
                  <div className="LOSS">
                    Grizzlies - 100
                  </div>
                  <div className="WIN">
                    Thunder - 110
                  </div>
                </div>
              </Link>

              <Link to="/games/Magic/Nuggets">
                <div className="GAME">
                  <div className="WIN">
                    Magic - 110
                  </div>
                  <div className="LOSS">
                    Nuggets - 100
                  </div>
                </div>
              </Link>
              <Link to="/games/Celtics/Mavericks">
                <div className="GAME">
                  <div className="WIN">
                    Celtics - 110
                  </div>
                  <div className="LOSS">
                    Mavericks - 100
                  </div>
                </div>
              </Link>
              <Link to="/games/Warriors/Blazers">
              <div className="GAME">
                <div className="LOSS">
                  Golden State - 100
                </div>
                <div className="WIN">
                  Trail Blazers - 110
                </div>
              </div>
              </Link>
              

            </div> {/* games */}

          </div> {/* scoreBar*/}


          <div className="footer">
              <div className="footerSECTION">
                <div className="footer-title">
                  Customer Service
                </div>
                <div className="footer-information">
                  <div>
                    FAQ
                  </div>
                  <div>
                    Privacy
                  </div>
                  <div>
                    Terms
                  </div>
                  <Popup trigger={<button className="puButtonFooter"> Contact Us </button>}
                  modal
                  closeOnDocumentClick
                  >
                <Contact/>
                </Popup>                  
                </div>
              </div>

              <div className="footerSECTION">
                <div className="footer-title">
                  Buy &amp; Sell
                </div>
                <div className="footer-information">
                  <div>
                    Assurance of Authenticity
                  </div>
                  <div>
                    Return Policy
                  </div>
                  <div>
                    Shipping
                  </div>
                  <div>
                    Drop Off
                  </div>
                </div>
              </div>

              <div className="footerSECTION">
                <div className="footer-title">
                  About Us
                </div>
                <div className="footer-information">
                  <div>
                    About Mint
                  </div>
                  <div>
                    <Link className="link" to={"/thedevs/"}>
                      <p className="thedevs"> Meet The Devs</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="footerSECTION">
                <div className="footer-title">
                  Socials
                </div>
                < Social/>
              </div>    
              
              <div className="footerSECTION">
                <Newsletter/>
              </div>          
          </div>
        </footer>
    )
}
