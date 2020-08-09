import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "react-modal";
import "../../App.css";

Modal.setAppElement("#root");
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
  const [modalISOpen, setModalIsOpen] = useState(false);

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
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
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
              <p className="m-0 mb-32  reveal-from-top" data-reveal-delay="800">
                We are a newly initiated company for PUBG paid tournaments.
              </p>
              <div
                style={{ textAlign: "center" }}
                className="m-0 text-sm mb-16 text-left reveal-from-top"
                data-reveal-delay="800"
              >
                &#128498; About the tournament
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
                register you details appropriately.
              </div>
              <br />
              <Button
                onClick={() => setModalIsOpen(true)}
                className="button button-primary hover:bg-red-700 button-sm"
              >
                Register
              </Button>
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
                  },
                }}
                isOpen={modalISOpen}
                onRequestClose={() => setModalIsOpen(false)}
              >
                <div
                  style={{ textAlign: "center" }}
                  className="m-0 text-sm mb-16 text-left reveal-from-top"
                  data-reveal-delay="800"
                >
                  &#129300; How to Register
                </div>
                <div
                  style={{ textAlign: "left" }}
                  className="m-0 text-xs mb-16 text-left reveal-from-top"
                  data-reveal-delay="800"
                >
                  ⚡ First register through this Link to get verified and get
                  unique <b>GRAVDON CODE</b> which you can use for any future
                  GRAVDON Tournaments to Register your squad.
                </div>
                <div
                  style={{ textAlign: "left" }}
                  className="m-0 text-xs mb-16 text-left reveal-from-top"
                  data-reveal-delay="800"
                >
                  ⚡ Its a <b>ONE TIME</b> registration process, you don't have
                  to provide your squad details each and every time, we store
                  your squad information in your <b>UNIQUE CODE</b>.
                </div>
                <div
                  style={{ textAlign: "left" }}
                  className="m-0 text-xs mb-16 text-left reveal-from-top"
                  data-reveal-delay="800"
                >
                  ⚡ Before clicking the link note down your squad members{" "}
                  <b>In-Game Name, Exp level and Evo Ground level</b>.
                </div>
                <div
                  style={{ textAlign: "left" }}
                  className="m-0 text-xs mb-16 text-left reveal-from-top"
                  data-reveal-delay="800"
                >
                  ⚡ First Time Registeration Link is given below .
                </div>{" "}
                <a
                  href="https://surveyheart.com/form/5f2e83d67693da10a21b43ba"
                  className="button button-primary m-2 hover:bg-red-700 button-sm"
                >
                  Click Here
                </a>
                <Button
                  onClick={() => setModalIsOpen(false)}
                  className="button button-primary  m-4 hover:bg-red-700 button-sm"
                >
                  Go Back
                </Button>
              </Modal>
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
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a>
              <Image
                className="has-shadow"
                src={require("./../../assets/images/hero_gif.gif")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
