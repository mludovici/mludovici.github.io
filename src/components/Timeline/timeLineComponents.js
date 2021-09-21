import styled, { keyframes, css } from 'styled-components'

/* The actual timeline (the vertical ruler) */
export const Timeline = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;

    &:after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: white;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
    }

    @media screen and (max-width: 600px) {
        &::after {
            left: 30px;
        }
    }
`

export const Container = styled.div`
    /* Container around content */
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    left: 0;

    &:nth-child(odd) {
        left: 50%;

        &:before {
            content: ' ';
            height: 0;
            position: absolute;
            top: 22px;
            width: 0;
            z-index: 1;
            left: 30px;
            border: medium solid white;
            border-width: 10px 10px 10px 0;
            border-color: transparent white transparent transparent;
        }
        &:after {
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;

            left: -12px;
            background-color: white;
            border: 4px solid #ff9f55;
            top: 18px;
            border-radius: 50%;
            z-index: 1;
        }

        @media screen and (max-width: 600px) {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
            left: 0;
            &:before {
                left: 60px;
                border: medium solid white;
                border-width: 10px 10px 10px 0px;
                border-color: transparent white transparent transparent;
            }
            &:after {
                left: 18px;
            }
        }
    }
    /* The circles on the timeline */
    &:nth-child(even) {
        &:before {
            content: ' ';
            height: 0;
            position: absolute;
            top: 22px;
            width: 0;
            z-index: 1;
            right: 30px;
            border: medium solid white;
            border-width: 10px 0 10px 10px;
            border-color: transparent transparent transparent white;
        }

        &:after {
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            right: -12px;
            background-color: white;
            border: 4px solid #ff9f55;
            top: 18px;
            border-radius: 50%;
            z-index: 1;
        }

        @media screen and (max-width: 600px) {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
            left: 0;
            &:before {
                left: 60px;
                border: medium solid white;
                border-width: 10px 10px 10px 0px;
                border-color: transparent white transparent transparent;
            }
            &:after {
                left: 18px;
            }
        }
    }
`

const jelloAnimation = keyframes`
    0% { transform: scale3d(1, 1, 1); }
    30% { transform: scale3d(1.25, 0.75, 1); }
    40% { transform: scale3d(0.75, 1.25, 1); }
    50% { transform: scale3d(1.15, 0.85, 1); }
    65% { transform: scale3d(0.95, 1.05, 1); }
    75% { transform: scale3d(1.05, 0.95, 1); }
    100% { transform: scale3d(1, 1, 1); }    
`

const stylesJelloAnimation = css`
    animation: ${jelloAnimation} 2s linear infinite;
`

export const Content = styled.div`
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
    animation: ${props =>
        props.animation &&
        css`
            ${jelloAnimation} 2s linear infinite
        `};
    //animation: ${props => (props.animation ? stylesJelloAnimation : '')};
`

// /* Media queries - Responsive timeline on screens less than 600px wide */
// @media screen and (max-width: 600px) {
// /* Place the timelime to the left */
//   .timeline::after {
//     left: 31px;
//   }

// /* Full-width containers */
//   .container {
//     width: 100%;
//     padding-left: 70px;
//     padding-right: 25px;
//   }

// /* Make sure that all arrows are pointing leftwards */
//   .container::before {
//     left: 60px;
//     border: medium solid white;
//     border-width: 10px 10px 10px 0;
//     border-color: transparent white transparent transparent;
//   }

// /* Make sure all circles are at the same spot */
//   .left::after, .right::after {
//     left: 15px;
//   }

// /* Make all right containers behave like the left ones */
//   .right {
//     left: 0%;
//   }
// }
