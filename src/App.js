import React, {useState} from 'react';
import styled, {keyframes, ThemeProvider} from 'styled-components'
import theme from './styles/theme';
import logo from './logo.svg';
import './App.css';



const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledApp = styled.div`
  font-size: calc(10px + 2vmin);
`

const Section = styled(Flex)`
  min-height: 100vh;
`

const AppHeader = styled(Section).attrs(() => ({as: 'header'}))`
  // background: ${props => props.backgroundColor || '#282c34'};
  background: ${() => "#"+((1<<24)*Math.random()|0).toString(16)};
  text-align: center;
  color: ${props => props.color || props.theme.primaryColor};
`

const AppBody = styled(Section)`
  background: papayawhip;
`

const AppLink = styled.a`
  color: #61dafb;
`

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const appLogoSpinReverse = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`

const ImageLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${appLogoSpinReverse} infinite 20s linear;

  ${({theme}) => theme.breakpoints.md} { 
    animation: ${appLogoSpin} infinite 20s linear;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: space-around;

  ${({maxWidth}) => maxWidth && `
    max-widrth: ${maxWidth};
  `}

  ${({fluid}) => fluid && `
    height: 100%;
    width: 100%;
    flex: auto;
  `}

  ${({theme}) => theme.breakpoints.md} {
    flex-direction: row;
  }
`


const Button = styled.button`
  border: none;
  background: #282c34;
  padding: 16px;
  color: white;
  cursor: pointer;
`

const SecondaryButton = styled(Button)`
  background: white;
  color: #282c34;

  ${Button}:hover + & {
    background: pink;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
        <StyledApp>
          <AppHeader color='purple'>
            <ImageLogo src={logo} alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
      
              <AppLink
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{marginBottom: 500}}
              >
                Learn React
              </AppLink>
            </AppHeader>
              <AppBody>
                <ButtonContainer maxWidth={'800px'} fluid>
                  <Button>
                      <h1>
                        Button 1
                      </h1>
                    </Button>
                    <SecondaryButton>
                      <h1>
                        SecondaryButton 2
                      </h1>
                    </SecondaryButton>
                </ButtonContainer>
          </AppBody>
        </StyledApp>
    </ThemeProvider>
  );
}

export default App;
