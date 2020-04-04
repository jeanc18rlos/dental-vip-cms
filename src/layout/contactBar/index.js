import React, { useState, useEffect } from "react"
import { Container } from "../../Elements/Container"
import { colors, sizes } from "../../styles"
import styled, { css } from "styled-components"
import "flag-icon-css/css/flag-icon.min.css"
import { useWindowSize } from "../../utils/hooks"
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"
import { navigate } from "gatsby"

const Accordion = styled.ul`
  position: absolute;
  background: ${props => (props.color ? props.color : "#222")};
  margin: 0;
  padding: 4px 0;
  padding-bottom: 0;
  list-style: none;
  margin-top: ${props => (props.top ? props.top : "40px")};
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

  visibility: ${props => (props.visible ? "visible" : "hidden")};
  opacity: ${props => (props.visible ? "1" : "0")};

  -webkit-transform: ${props =>
    props.visible ? "translateZ(0)" : "translate3d(0, -100%, 0)"};
  transform: ${props =>
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
`

const LangSelector = styled.a`
  display: flex;
  cursor: pointer;
  a {
    cursor: inherit;
  }
  h5,
  h6 {
    margin: 0;
    text-transform: uppercase;
    padding-left: 5px;
    padding-right: 5px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      transition: transform 0.5s;
      &.rotate {
        transform: rotate(180deg);
      }
    }
  }

  ul {
    margin-left: 0;
    li {
      padding: 10px 15px;
      margin: 0;
      border: none;
    }
  }
`
const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 0;
  align-items: center;
  list-style: none;
  &.social {
    li {
      padding-right: 0;
      padding-left: 10px;
      a {
        transition: background 0.5s linear;
        color: white;
        background: #222;
        padding: 1em;
        text-decoration: none;
        &:hover {
          color: #222;
          background: white;
        }
      }
    }
  }
  li {
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    height: 100%;
    align-items: center;
  }
  h5,
  h6,
  li,
  span {
    margin: 0;
    color: #333;
  }
  h5,
  h6 {
    display: block;
  }
  span {
    display: flex;
    height: 100%;
    align-items: center;
    &.long {
      @media screen and (max-width: 1300px) {
        max-width: 230px;
      }
    }
    @media screen and (max-width: 1300px) {
      max-width: 180px;
    }
    i {
      padding-right: 10px;
      color: #a0a0a0;
    }
  }
  .separator {
    height: 35px;
    width: 1px;
    display: flex;
    border-left: 1px solid #999;
    li {
      margin: 0;
    }
  }
`

const ContactBar = props => {
  const [dropDown, setDropDownItems] = useState({})

  const setDropDownItem = item => {
    setDropDownItems({ ...dropDown, ...{ [item.id]: item } })
  }
  const size = useWindowSize()
  return (
    <Container
      justifyContent="space-between"
      style={{
        display: size.width > 1023 ? "flex" : "none",
        boxShadow: "inset 1px 1px 0px 100px white",
        zIndex: 4,
        position: "relative",
      }}
    >
      <List>
        <span className="separator"></span>
        {props.data.contactBar.details.map((i, k) => {
          return [
            <li key={k}>{ReactHtmlParser(i.item)}</li>,
            <span className="separator"></span>,
          ]
        })}
      </List>
      <LangSelector
        onMouseOver={() => {
          setDropDownItem({ id: `dropdown-lang`, action: true })
        }}
        onMouseLeave={() => {
          setDropDownItem({ id: `dropdown-lang`, action: false })
        }}
      >
        <span>
          <i
            className={`flag-icon flag-icon-${
              props.lang === "es" ? "ve" : "us"
            }`}
          ></i>
          <h6>{props.lang}</h6>
          &nbsp;&nbsp;
          <i
            className={`icon-angle-down ${dropDown[`dropdown-lang`] &&
              dropDown[`dropdown-lang`].action &&
              "rotate"}`}
          ></i>
        </span>
        <Accordion
          visible={
            (dropDown[`dropdown-lang`] && dropDown[`dropdown-lang`].action) ||
            false
          }
          top="36px"
          color="white"
        >
          <li>
            <a
              onClick={() => {
                navigate(
                  props.langRedir === "/error"
                    ? `${(props.lang === "es" && "/en/error") ||
                        props.langRedir}`
                    : props.langRedir
                )
              }}
            >
              <span>
                <i
                  className={`flag-icon flag-icon-${
                    props.lang === "en" ? "ve" : "us"
                  }`}
                ></i>
                <h6>{props.lang === "en" ? "Espanol" : "English"}</h6>
              </span>
            </a>
          </li>
        </Accordion>
      </LangSelector>
      <List className="social">
        {props.data.contactBar.social.map((i, k) => {
          return [<li key={k}>{ReactHtmlParser(i.item)}</li>]
        })}
      </List>
    </Container>
  )
}

export default ContactBar
