import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import Button from "../elements/Button";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  return (
    <section
      style={{ padding: "2rem 0", backgroundColor: "#eee" }}
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">
              To Join in our official{" "}
              <b style={{ color: "#25D366" }}>Whatsapp</b> Admin Group{" "}
            </h3>
          </div>
          <div className="cta-action">
            <Button style={{ borderRadius: "5px" }}>
              <a
                style={{
                  color: "black",
                }}
                href="https://chat.whatsapp.com/DcuLcizeunnJDYA0vXhYOQ"
              >
                Click Here
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
