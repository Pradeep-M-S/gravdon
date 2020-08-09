import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import Button from "../elements/Button";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles2 = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Build up the whole picture",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
  };

  return (
    <section
      style={{
        backgroundColor: "#eee",
        color: "black",
        padding: "2rem 0",
      }}
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <h2
            style={{ color: "black", textAlign: "center" }}
            className="mt-0 mb-16 reveal-from-bottom"
            data-reveal-delay="200"
          >
            Registration
            <span className="text-color-primary"> Rules</span>
          </h2>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div
            style={{ color: "black", textAlign: "center" }}
            className="m-0 text-sm mb-16 text-left"
          >
            &#129300; How to Register
          </div>
          <div
            style={{
              padding: "1rem 1rem",
            }}
          >
            {" "}
            <div
              style={{ color: "black", textAlign: "left" }}
              className="m-0 text-xs mb-16 text-left"
            >
              ⚡ First register through this Link to get verified and get unique{" "}
              <b>GRAVDON CODE</b> which you can use for any future GRAVDON
              Tournaments to Register your squad.
            </div>
            <div
              style={{ color: "black", textAlign: "left" }}
              className="m-0 text-xs mb-16 text-left"
            >
              ⚡ Its a <b>ONE TIME</b> registration process, you don't have to
              provide your squad details each and every time, we store your
              squad information in your <b>UNIQUE CODE</b>.
            </div>
            <div
              style={{ color: "black", textAlign: "left" }}
              className="m-0 text-xs mb-16 text-left"
            >
              ⚡ Before clicking the link note down your squad members{" "}
              <b>In-Game Name, Exp level and Evo Ground level</b>.
            </div>
            <div
              style={{ color: "black", textAlign: "left" }}
              className="m-0 text-xs mb-16 text-left"
            >
              ⚡ First Time Registeration Link is given below .
            </div>{" "}
            <Button className="button button-primary hover:bg-red-700 button-sm">
              <a href="https://surveyheart.com/form/5f2e83d67693da10a21b43ba">
                Register my Squad
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles2.propTypes = propTypes;
FeaturesTiles2.defaultProps = defaultProps;

export default FeaturesTiles2;
