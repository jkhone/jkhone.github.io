import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import ShoesPage from './ShoesPage'
import ProductPage from "./ProductPage"

function App() {
  return (    

      <div>
        <Route path="/shoes" component={ShoesPage} />
        <Route path="/product/:id" component={ProductPage} />
      </div>
    </Router>
import Players from './Players'
import HomeSlider from "./homeslider"
import BrandSlider from "./BrandSlider"
import "../styles/base.css"
import LOGO from "../assets/LOGO-01.jpg"
import Icon from "../lib/Icon"

function App() {
  return (
    <Router>
    <div className="container">
      <header>
        <div className="header-left">
          <div>
            <img className="logo" src={LOGO} />
          </div>
          <div className="header-item">
            SHOES
          </div>
          <div className="header-item">
            PLAYERS
          </div>
          <div className="header-item">
            THE GUYS
          </div>
        </div>
        <div className="header-right">
          <div>
            <Icon icon="search"/>
            <input   
              className="searchBAR"
              type="text" 
              placeholder="Search">
            </input>
          </div>
          <div className="header-item">
            <Icon icon="shopping-cart" />
          </div>
        </div>
      </header>

<HomeSlider/>
<BrandSlider/>

      <footer>
        <div className="scoreBar">

          <div className="GAME">            
            <div className="WIN">
              Celtics - 110
            </div>          
            <div className="LOSS">
              Mavericks - 100
            </div>
          </div>

          <div className="GAME">            
            <div className="WIN">
              Heat - 110
            </div>          
            <div className="LOSS">
              76ers - 100
            </div>
          </div>

          <div className="GAME">
            <div className="LOSS">
              Golden State - 100
            </div>
            <div className="WIN">
              Trail Blazers - 110
            </div>
          </div>

          <div className="GAME">
            <div className="WIN">
              Grizzlies - 110
            </div>
            <div className="LOSS">
              Thunder - 100
            </div>
          </div>

          <div className="FINALGAME">
            <div className="WIN">
              Raptors - 110
            </div>
            <div className="LOSS">
              Pistons - 100
            </div>
          </div>

        </div>


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
                <div>
                  Contact Info
                </div>
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

            <div className="socials">
              <div className="footer-title">
                Socials
              </div>
              <div className="social-icon">
                <Icon icon="twitter" />
              </div>
              <div className="social-icon">
                <Icon icon="instagram" />
              </div>
              <div className="social-icon">
                <Icon icon="facebook" />
              </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default App
