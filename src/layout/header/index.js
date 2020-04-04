import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";
import { Container } from "../../Elements/Container";
import { colors } from "../../styles";
import { useWindowSize } from "../../utils/hooks";
import SmoothCollapse from "react-smooth-collapse";
import "../../css/icons/style.css";
import "../../css/icons/burger/burger.css";
import logo from "../../css/icons/svg/logo.svg";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 3;
  .container {
    border-bottom: ${(props) =>
      props.isMobile && "1px solid hsla(0,0%,60%,.2)"};
  }
  .modal {
    position: fixed;
    height: ${(props) => (props.isSearchOpen ? "100vh" : "0")};
    width: 100%;
    background: #ffffffad;
    top: 0;
    z-index: 3;
    overflow: hidden;
    transition: height 0.7s cubic-bezier(0.42, 0, 0.35, 0.93);
    &.search {
      display: flex;
      flex-direction: column;
      .modal-body {
        padding: 0 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100% - 26px);
        .input-group {
          display: flex;
          min-width: 70vw;
          font-size: ${(props) => (props.isMobile ? "30px" : "55px")};
          padding: 0.5em 0.2em 0.2em;
          color: #333;
          border-bottom: 2px solid #333;
          input {
            border: none;
            border: none;
            padding-right: 4vw;
            background: none;
            color: #333 !important;
            width: calc(100% - 1.4em);
            outline: 0;
            font-weight: 400;
            text-transform: capitalize;
          }
          button {
            border: none;
            background: none;
          }
        }
      }
      .modal-header {
        position: absolute;
        width: 100%;
        padding: 5vw 5vw 0;
        display: flex;
        justify-content: flex-end;
        .close {
          color: #333;
          cursor: pointer;
          font-size: 32px;
        }
      }
    }
  }
  .icon-wrapper {
    display: flex;

    height: fit-content;
    padding-left: 15px;
    i {
      transition: transform 0.5s;
    }
    &.rotate {
      i {
        transform: rotate(180deg);
      }
    }
  }
  .list-father {
    &.search {
      border: none;
      @media screen and (max-width: 1023px) {
        > a {
          justify-content: center;
          align-items: center;
          font-size: 50px;
          color: #9999;
          padding: 10vh 15px !important;
          flex-direction: column;
        }
        span {
          padding-top: 10vh;
          display: flex;
          justify-content: center;
          align-items: center;
          a {
            font-size: 16px;
            padding-right: 15px;
            color: #999999;
            background: black;
            border-radius: 50%;
            text-decoration: none;
            margin: 0px 10px;
            &:hover {
              color: black;
              background: white;
            }
          }
        }
      }
      a {
        padding-right: 0;
      }
    }
    a {
      display: flex;
    }
    @media screen and (min-width: 1024px) {
      h6 {
        padding: 10px 0px;
      }
    }
    @media screen and (max-width: 1023px) {
      border-bottom: 1px solid hsla(0, 0%, 60%, 0.2);
      a {
        padding-bottom: 15px;
        padding-left: 15px;
        justify-content: space-between;
        padding-top: 15px;
        padding-right: 15px;

        h5,
        h6 {
          margin: 0;
        }
      }
      .list-child {
        border-top: 1px solid hsla(0, 0%, 60%, 0.2);
        background: #2e2e2e;

        a {
          padding-left: 30px;
        }
      }
    }
  }
  nav {
    width: 100%;
    display: flex;
    padding: 15px 0;
    align-items: center;
    justify-content: space-between;
    .brand {
      display: flex;
      img {
        max-width: 100px;
        width: 100px;
        margin: 0;
      }
    }
    > ul {
      display: flex;
      width: inherit;
      margin: 0;
      font-weight: 400;
      padding-left: 5vw;
      align-items: center;
      text-transform: capitalize;
      color: ${colors.dustyGray};
      justify-content: flex-end;
      > div {
        height: 100%;
      }
      div {
        width: 100%;
        display: inherit;
        flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
        overflow-y: ${(props) => (props.isMobile ? "scroll" : "visible")};

        justify-content: ${(props) =>
          props.isMobile ? "flex-start" : "flex-end"};
      }
      li {
        margin-bottom: 0;
        list-style: none;
        display: ${(props) => (props.isMobile ? "auto" : "flex")};
        a {
          cursor: pointer;
          text-transform: uppercase;
          padding: ${(props) => (props.isMobile ? 0 : "0 15px")};
          h5,
          h6 {
            font-weight: ${(props) => (props.isMobile ? "bold" : 400)};
            display: inline;
            position: relative;
            margin: 0;
          }
          &:hover {
            color: ${colors.white};
          }
        }
      }
      &.mobile {
        position: absolute;
        left: 0;
        width: 100%;
        padding-left: ${(props) => (props.tinyMobile ? "30%" : "50%")};
        align-items: flex-start;
        justify-content: flex-start;
        padding-top: 70px;
        flex-direction: column;
        top: 0;
        height: ${(props) => (props.mobileMenu ? "100vh" : 0)};
        overflow: hidden;
        background: rgba(0, 0, 0, 0.64);
        z-index: -1;
        transition: 0.7s height cubic-bezier(0.42, 0, 0.35, 0.93);
        &:before {
          content: "";
          position: absolute;
          right: 0;
          width: ${(props) => (props.tinyMobile ? "70%" : "50%")};
          top: 0;
          height: 100vh;
          background: #222;
          z-index: -2;
        }
        ul {
          position: relative;
          margin: 0;
        }
      }
    }
  }
`;
const Accordion = styled.ul`
  position: absolute;
  background: ${(props) => (props.color ? props.color : "#222")};
  margin: 0;
  padding: 4px 0;
  padding-bottom: 0;
  list-style: none;
  margin-top: ${(props) => (props.top ? props.top : "40px")};
  margin-left: -15px;
  z-index: -1;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  -webkit-transition-property: opacity, visibility, -webkit-transform;
  transition-property: opacity, visibility, -webkit-transform;
  transition-property: opacity, visibility, transform;
  transition-property: opacity, visibility, transform, -webkit-transform;
  -webkit-transition-timing-function: cubic-bezier(0.42, 0, 0.35, 0.93);
  transition-timing-function: cubic-bezier(0.42, 0, 0.35, 0.93);

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};

  -webkit-transform: ${(props) =>
    props.visible ? "translateZ(0)" : "translate3d(0, -100%, 0)"};
  transform: ${(props) =>
    props.visible ? "translateZ(0)" : "translate3d(0, -100%, 0)"};

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  li {
    border-bottom: 1px solid ${colors.mineShaftDarker};
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 5px;
  }
`;

const AccordionContainer = (props) => {
  return props.isMobile ? (
    <SmoothCollapse expanded={props.visible}>{props.children}</SmoothCollapse>
  ) : (
    <Accordion visible={props.visible}> {props.children}</Accordion>
  );
};

const Header = (props) => {
  const [dropDown, setDropDownItems] = useState({});

  const setDropDownItem = (item) => {
    setDropDownItems({ ...dropDown, ...{ [item.id]: item } });
  };

  const size = useWindowSize();
  return (
    <StyledHeader
      mobileMenu={
        dropDown[`mobileDropDown`] && dropDown[`mobileDropDown`].action
      }
      isSearchOpen={
        dropDown[`searchDropDown`] && dropDown[`searchDropDown`].action
      }
      isMobile={size.width < 1024}
      tinyMobile={size.width <= 480}
    >
      <div className="search modal">
        <div className="modal-header">
          <a
            className="close"
            role="button"
            onClick={() => {
              setDropDownItem({
                id: `searchDropDown`,
                action: dropDown[`searchDropDown`]
                  ? !dropDown[`searchDropDown`].action
                  : true,
              });
              if (
                dropDown[`searchDropDown`] &&
                dropDown[`searchDropDown`].action
              ) {
                document.body.style.overflow = "visible";
              } else {
                document.body.style.overflow = "hidden";
                document.body.style.height = "100vh";
              }
            }}
          >
            <i class="icon-times"></i>
          </a>
        </div>
        <div className="modal-body">
          <div className="form">
            <div className="input-group">
              <input type="text" placeholder="Buscar" />
              <button>
                <i className="icon-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Container className="container" color={colors.mineShaft}>
        <nav>
          <a className="brand">
            <img src={logo}></img>
          </a>
          {size.width < 1024 && (
            <ul>
              <li>
                <a style={{ paddingRight: "25px", display: "flex" }}>
                  <i style={{ fontSize: "20px" }} className="icon-phone"></i>
                </a>
              </li>
              <li>
                <a
                  style={{ display: "flex" }}
                  className={`${dropDown[`mobileDropDown`] &&
                    dropDown[`mobileDropDown`].action &&
                    "active"}`}
                  onClick={() => {
                    setDropDownItem({
                      id: `mobileDropDown`,
                      action: dropDown[`mobileDropDown`]
                        ? !dropDown[`mobileDropDown`].action
                        : true,
                    });
                    if (
                      dropDown[`mobileDropDown`] &&
                      dropDown[`mobileDropDown`].action
                    ) {
                      document.body.style.overflow = "visible";
                    } else {
                      document.body.style.overflow = "hidden";
                      document.body.style.height = "100vh";
                    }
                  }}
                >
                  <span>
                    <i className="burger-icon"></i>
                  </span>
                </a>
              </li>
            </ul>
          )}
          <ul className={`${size.width < 1024 && "mobile"}`}>
            <div>
              {size.width < 1024 && (
                <li
                  className="list-father"
                  onClick={() => {
                    setDropDownItem({
                      id: `dropdown-lang`,
                      action:
                        dropDown[`dropdown-lang`] &&
                        dropDown[`dropdown-lang`].action
                          ? false
                          : true,
                    });
                  }}
                >
                  <a style={{ padding: "30px 15px" }}>
                    <h5>
                      <i className="flag-icon flag-icon-gr"></i>{" "}
                      &nbsp;&nbsp;spanish
                    </h5>

                    <span
                      className={`icon-wrapper ${(dropDown[`dropdown-lang`] &&
                        dropDown[`dropdown-lang`].action &&
                        "rotate") ||
                        ""}`}
                    >
                      <i className="icon-angle-down"></i>
                    </span>
                  </a>

                  <AccordionContainer
                    isMobile={size.width < 1024}
                    visible={
                      (dropDown[`dropdown-lang`] &&
                        dropDown[`dropdown-lang`].action) ||
                      false
                    }
                  >
                    <li className="list-child">
                      <a>
                        <h6>
                          <i className="flag-icon flag-icon-gr"></i>{" "}
                          &nbsp;&nbsp;spanish
                        </h6>
                      </a>
                    </li>
                  </AccordionContainer>
                </li>
              )}
              {props.data.header.navigation.map((i, k) => {
                return (
                  <li
                    className="list-father"
                    key={`drop-father-${k}`}
                    onMouseOver={() => {
                      size.width >= 1024 &&
                        setDropDownItem({ id: `dropdown${k}`, action: true });
                    }}
                    onMouseLeave={() => {
                      size.width >= 1024 &&
                        setDropDownItem({ id: `dropdown${k}`, action: false });
                    }}
                    onClick={() => {
                      size.width < 1024 &&
                        setDropDownItem({
                          id: `dropdown${k}`,
                          action:
                            dropDown[`dropdown${k}`] &&
                            dropDown[`dropdown${k}`].action
                              ? false
                              : true,
                        });
                    }}
                  >
                    <a>
                      <h5>{i.title}</h5>

                      {i.menu.display && (
                        <span
                          className={`icon-wrapper ${(dropDown[
                            `dropdown${k}`
                          ] &&
                            dropDown[`dropdown${k}`].action &&
                            "rotate") ||
                            ""}`}
                        >
                          <i className="icon-angle-down"></i>
                        </span>
                      )}
                    </a>
                    {i.menu.display && (
                      <AccordionContainer
                        isMobile={size.width < 1024}
                        visible={
                          (dropDown[`dropdown${k}`] &&
                            dropDown[`dropdown${k}`].action) ||
                          false
                        }
                      >
                        {i.menu.items.map((item, key) => {
                          return (
                            <li
                              className="list-child"
                              key={`drop-child-${key}`}
                            >
                              <a>
                                <h6>{item.title}</h6>
                              </a>
                            </li>
                          );
                        })}
                      </AccordionContainer>
                    )}
                  </li>
                );
              })}
              <li className="list-father search">
                <a
                  role="button"
                  onClick={() => {
                    setDropDownItem({
                      id: `searchDropDown`,
                      action: dropDown[`searchDropDown`]
                        ? !dropDown[`searchDropDown`].action
                        : true,
                    });
                    if (
                      dropDown[`searchDropDown`] &&
                      dropDown[`searchDropDown`].action
                    ) {
                      document.body.style.overflow = "auto";
                    } else {
                      document.body.style.overflow = "hidden";
                      document.body.style.height = "100vh";
                    }
                  }}
                >
                  <i class="icon-search"></i>
                  <span>
                    {size.width < 1023 && [
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/dentalvip/"
                      >
                        <i className="icon-facebook" />
                      </a>,
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/dental_vip/"
                      >
                        <i className="icon-instagram" />
                      </a>,
                    ]}
                  </span>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
