import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "react-modal";
import "../../App.css";
import FeaturesTiles2 from "../../components/sections/FeaturesTiles2";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [modal2ISOpen, setModal2IsOpen] = useState(false);

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-xl">
        <div className={innerClasses}>
          <div style={{ padding: "1rem" }} className="hero-content">
            <h2
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Gravdon
              <span className="text-color-primary"> E-Sports</span>
            </h2>
            <div
              className="container-xs text-left
            "
            >
              <p
                style={{
                  color: "white",
                }}
                className="m-0 mb-32 reveal-from-top"
                data-reveal-delay="800"
              >
                We are a newly initiated company for PUBG paid tournaments.
              </p>
              <div
                style={{ textAlign: "center", color: "white" }}
                className="m-0 text-sm mb-16 text-left reveal-from-top"
                data-reveal-delay="800"
              >
                ⚡ We are currently conducting TDM matches , details are below.
              </div>
              <div
                style={{ textAlign: "left" }}
                className="m-0 text-xs mb-16 text-left reveal-from-top"
                data-reveal-delay="800"
              >
                &#127918; Single TDM match will be conducted and the teams get
                prizes distributed accordingly.
              </div>
              <div
                style={{ textAlign: "left" }}
                className="m-0 text-xs mb-16 text-left reveal-from-top"
                data-reveal-delay="800"
              >
                &#127918; Even if you lose you still get consolation prizes.
              </div>
              <div
                style={{ textAlign: "left" }}
                className="m-0 text-xs mb-16 text-left reveal-from-top"
                data-reveal-delay="800"
              >
                &#127918; Your match-making system will be based on the
                information you provide in the registration form like Experience
                Level, Evo Ground level,etc..
              </div>
              <div
                style={{ textAlign: "left" }}
                className="m-0 text-xs mb-16 text-left reveal-from-top"
                data-reveal-delay="800"
              >
                &#127918; We will verify each and every one of your PUBG account
                details before allotting a slot for you.
              </div>{" "}
              <div
                style={{ textAlign: "left" }}
                className="m-0 text-xs mb-16 text-left reveal-from-top"
                data-reveal-delay="800"
              >
                &#127918; This whole Process is only for your fair play, so
                register your details appropriately.
              </div>
              <br />
              {/* 
              <div
                style={{ textAlign: "center" }}
                className="m-0 text-sm mb-16 text-left reveal-from-top"
                data-reveal-delay="800"
              >
                &#128498; How to register
              </div>
              <div
                style={{ textAlign: "left" }}
                className="m-0 text-xs mb-16 text-left reveal-from-top"
                data-reveal-delay="800"
              >
                &#127918; Single TDM match will be conducted and the teams get
                prizes distributed accordingly.
              </div>
              <div
                style={{ textAlign: "left" }}
                className="m-0 text-xs mb-16 text-left reveal-from-top"
                data-reveal-delay="800"
              >
                &#127918; Even if you lose you still get consolation prizes.
              </div>
              <div
                style={{ textAlign: "left" }}
                className="m-0 text-xs mb-16 text-left reveal-from-top"
                data-reveal-delay="800"
              >
                &#127918; Your match-making system will be based on the
                information you provide in the registration form like Experience
                Level, Evo Ground level,etc..
              </div>
              <div
                style={{ textAlign: "left" }}
                className="m-0 text-xs mb-16   text-left reveal-from-top"
                data-reveal-delay="800"
              >
                &#127918; We will verify each and every one of your PUBG account
                details before allotting a slot for you.
              </div>
              <div
                style={{ textAlign: "left" }}
                className="text-xs text-left reveal-from-top"
              >
                &#127918; This whole Process is only for your fair play, so
                register you details appropriately.
              </div> */}
              <div className="reveal-from-bottom" data-reveal-delay="600"></div>
            </div>
          </div>
          <FeaturesTiles2 />
          {/* //Types of matches section */}
          <div
            style={{ padding: "1rem" }}
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <h2
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Types of
              <span className="text-color-primary"> Matches </span>
            </h2>
            <div
              style={{ textAlign: "center", color: "white" }}
              className="m-0 text-xs mb-16 text-left"
            >
              We conduct <b>3</b> types of matches
            </div>
            <Image
              style={{ display: "block" }}
              className="has-shadow"
              src={require("./../../assets/images/1.png")}
              alt="Hero"
              width={896}
              height={504}
            />{" "}
            <br />
            <Image
              className="has-shadow"
              src={require("./../../assets/images/2.png")}
              alt="Hero"
              width={896}
              height={504}
            />{" "}
            <br />
            <Image
              style={{ marginBottom: "1rem" }}
              className="has-shadow"
              src={require("./../../assets/images/3.png")}
              alt="Hero"
              width={896}
              height={504}
            />
            <div
              style={{ textAlign: "center", color: "white" }}
              className="m-0 text-md mb-16 text-left"
            >
              Even if you lose , You will get an Free Entry Pass to our{" "}
              <b>Classic Match</b> on Weekend . You can Grab your prizes even
              there .
            </div>{" "}
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setModal2IsOpen(true)}
              // href="https://forms.app/form/5f1d87083f6ac6335302e4f3"
              className="button button-primary m-4 hover:bg-red-700 button-sm"
            >
              Book my Slot
            </a>
            <Modal
              style={{
                overlay: {
                  backgroundColor: "#fff",
                  backdropFilter: "blur(40px)",
                  zIndex: "10",
                },
                content: {
                  backgroundColor: "#151719",
                  boxShadow: "0 3px 15px black",
                  zIndex: "10",
                  border: "none",
                  borderRadius: "20px",
                  color: "white",
                },
              }}
              isOpen={modal2ISOpen}
              onRequestClose={() => setModal2IsOpen(false)}
            >
              <div
                style={{ textAlign: "center" }}
                className="m-0 text-xs mb-16 text-left"
              >
                <b>Details of the Match</b>
              </div>{" "}
              <div
                style={{ textAlign: "left", fontSize: ".7rem" }}
                className="m-0 text-xs mb-16 text-left"
              >
                ✓ Prize will distributed to both teams according to their kills
                as said in the images above .
              </div>{" "}
              <div
                style={{ textAlign: "left", fontSize: ".7rem" }}
                className="m-0 text-xs mb-16 text-left"
              >
                ✓ Your Match timing details will be updated everyday at 5pm
              </div>{" "}
              <div
                style={{ textAlign: "left", fontSize: ".7rem" }}
                className="m-0 text-xs mb-16 text-left"
              >
                ✓ Your Room ID and Password will be given before 5 mins of your
                Match Time.We can wit a maximum of two minutes and not more than
                that
              </div>{" "}
              <div
                style={{ textAlign: "left", fontSize: ".7rem" }}
                className="m-0 text-xs mb-16 text-left"
              >
                ✓ IF YOUR TEAM CANNOT JOIN WITHIN THE PROVIDED TIME, YOUR TEAM
                WILL BE DIS-QUALIFIED AND OPPONENT WINS THE MATCH ,AND YOU WILL
                NOT BE REFUNDED
              </div>{" "}
              {/* <div
                    style={{ textAlign: "left" }}
                    className="m-0 text-xs mb-16 text-left"
                  >
                    TEAM TEAM I TEAM TEAM A B I A B Kills Kills I WINS WINS I 40
                    00-20 I ₹65 ₹0 40 20-30 I ₹55 ₹10 40 30-35 I ₹50 ₹15 40 35+
                    I ₹45 ₹20
                  </div>{" "} */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  placeItems: "center",
                }}
              >
                {" "}
                <a
                  href="https://forms.app/form/5f1d87083f6ac6335302e4f3"
                  className="button button-primary m-4 hover:bg-red-700 button-sm"
                >
                  Mon (10-08-20)
                </a>{" "}
                <a
                  href="https://forms.app/form/5f1d86f6698fb70d8d66afad"
                  className="button button-primary m-4 hover:bg-red-700 button-sm"
                >
                  Tue (11-08-20)
                </a>
                <div
                  style={{ textAlign: "center", fontSize: ".9rem" }}
                  className="m-0 text-xs mb-16 text-left"
                >
                  Below links are closed
                </div>{" "}
                <a
                  href="#"
                  className="button button-primary m-4 hover:bg-red-700 button-sm"
                >
                  Wed (12-08-20)
                </a>
                <a
                  href="#"
                  className="button button-primary m-4 hover:bg-red-700 button-sm"
                >
                  Thurs (13-08-20)
                </a>
                <a
                  href="#"
                  className="button button-primary m-4 hover:bg-red-700 button-sm"
                >
                  Fri (14-08-20)
                </a>
                <Button
                  onClick={() => setModal2IsOpen(false)}
                  // href="https://forms.app/form/5f1d87083f6ac6335302e4f3"
                  className="button button-primary m-4 hover:bg-red-700 button-sm"
                >
                  {" "}
                  &#10094; Back
                </Button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
