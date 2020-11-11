import styled from 'styled-components'

const MenuNavigation = styled.ul`
  padding: 0;
  margin: 0;
  width: 80px;
  background: ${props => props.theme.menuBg};
  height: 100%;

  li {
    height: 80px;
    width: 100%;
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export default MenuNavigation
