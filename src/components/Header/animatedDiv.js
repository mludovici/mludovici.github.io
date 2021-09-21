import styled, { keyframes, css } from 'styled-components'

const jelloAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

const stylesJelloAnimation = css`
    &:hover {
        animation: ${jelloAnimation} 1.3s linear infinite;
    }
`

export const AnimatedDiv = styled.div`
    /* padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px; */
    ${
        props => props.animation && stylesJelloAnimation
        // css`
        //     &:hover {
        //         animation: ${jelloAnimation} 1.3s linear infinite;
        //     }
        // `
        /*animation: ${props => (props.animation ? stylesJelloAnimation : '')}; */
    }
`
