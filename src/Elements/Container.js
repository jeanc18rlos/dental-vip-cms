import styled, { css } from "styled-components"
import { colors, device, sizes, lineH } from "../styles"

const Container = styled.div`
  padding: 0 5vw;
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  flex-wrap: ${props => props.flexWrap || "nowrap"};
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  align-content: ${props => props.alignContent || "flex-start"};
  background: ${props => props.color || colors.white};
`

export { Container }
