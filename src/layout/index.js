import React, { useState } from "react";
import styled from "styled-components";
import ScrollUpButton from "react-scroll-up-button";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import ContactBar from "./contactBar";
import Footer from "./footer";

const Layout = ({ children }) => {
  const [langRedir, setLangRedir] = useState("/");
  const [lang, setlang] = useState("es");
  const childrenWprops = React.Children.map(children, (child) =>
    React.cloneElement(child, { key: child, setLangRedir, setlang })
  );
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          layout: allMarkdownRemark(
            filter: {
              frontmatter: {
                templateKey: { eq: "default" }
                title: { eq: "Layout" }
              }
            }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  language
                  contactBar {
                    details {
                      item
                    }
                    social {
                      item
                    }
                  }
                  header {
                    navigation {
                      title
                      to
                      menu {
                        display
                        items {
                          title
                          to
                        }
                      }
                    }
                  }
                  footer {
                    slogan
                    address
                    phones {
                      number
                    }
                    partners {
                      alt
                    }
                    contact {
                      link
                      text
                    }
                    legal{
                      link
                      title
                    }
                    social {
                      item
                    }
                    copyright
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        let layoutLang = data.layout.edges.map((i) => {
          return {
            [i.node.frontmatter.language]: i.node.frontmatter,
          };
        });
        layoutLang = {
          ...layoutLang[0],
          ...layoutLang[1],
        };
        return (
          <Wrapper>
            <ScrollUpButton
              StopPosition={0}
              ShowAtPosition={150}
              EasingType="easeInCubic"
              AnimationDuration={1500}
              ContainerClassName="ScrollUpButton__Container icon-angle-double-up"
              TransitionClassName="ScrollUpButton__Toggled"
            >
              <span />
            </ScrollUpButton>
            <div>
              <ContactBar
                {...{ langRedir, lang, data: layoutLang[lang] }}
              ></ContactBar>
              <Header {...{ langRedir, lang, data: layoutLang[lang] }}></Header>
              <main>{childrenWprops}</main>
            </div>
            <Footer {...{ lang, data: layoutLang[lang] }} />
          </Wrapper>
        );
      }}
    />
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default Layout;
