import styled, { css } from 'styled-components'

export const CardBody = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
	font-family: 'DM Mono', monospace;
	padding: 0;
	margin: 0;
	color: white;
`

export const CardSection = styled.section`
	display: flex;
	padding: 3rem;
	overflow-x: auto;
	&::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background: #201c29;
		border-radius: 10px;
		box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
			inset -2px -2px 2px rgba(0, 0, 0, 0.25);
	}
	&::-webkit-scrollbar-track {
		background: linear-gradient(
			90deg,
			#201c29,
			#201c29 1px,
			#17141d 0,
			#17141d
		);
	}
`

export const CardItem = styled.article`
	height: 350px;
	width: 400px;
	min-width: 250px;
	padding: 1.5rem;
	border-radius: 16px;
	background: #17141d;
	box-shadow: -1rem 0 3rem #000;
	display: flex;
	flex-direction: column;
	transition: 0.2s;
	margin: 0;
	scroll-snap-align: start;
	clear: both;
	position: relative;

	&:focus-within ~ &,
	&:hover ~ & {
		transform: translateX(130px);
	}
	&:hover {
		transform: translateY(-1rem);
	}
	&:not(:first-child) {
		margin-left: -130px;
	}
`
export const CardAuthor = styled.div`
	margin: 3rem 0 0;
	display: grid;
	grid-template-columns: 75px 1fr;
	align-items: center;
	position: relative;
`

export const CardHeader = styled.header`
	margin-bottom: auto;
`

export const CardHeaderDate = styled.p`
	font-size: 14px;
	margin: 0 0 1rem;
	color: #7a7a8c;
`

export const CardHeaderTitle = styled.h2`
	font-size: 20px;
	margin: 0.25rem 0 auto;
	text-decoration: none;
	color: inherit;
	border: 0;
	display: inline-block;
	cursor: pointer;

	&:hover {
		background: linear-gradient(90deg, #ff8a00, #e52e71);
		text-shadow: none;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
	}
`
export const AuthorAvatar = styled.a`
	grid-area: auto;
	align-self: start;
	position: relative;
	box-sizing: border-box;
`

export const AvatarImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	filter: grayscale(100%);
	display: block;
	overflow: hidden;
	margin: 16px 10px;
`

export const AuthorName = styled.div`
	grid-area: auto;
	box-sizing: border-box;
`

export const AuthorNamePrefix = styled.div`
	font-style: normal;
	font-weight: 700;
	color: #7a7a8c;
`

export const Tags = styled.div`
	margin: 1rem 0 2rem;
	padding: 0.5rem 0 1rem;
	line-height: 2;
	margin-bottom: 0;
`

export const TagsAnchor = styled.a`
	font-style: normal;
	font-weight: 700;
	font-size: 0.5rem;
	color: #7a7a8c;
	text-transform: uppercase;
	font-size: 0.66rem;
	border: 3px solid #28242f;
	border-radius: 2rem;
	padding: 0.2rem 0.85rem 0.25rem;
	position: relative;

	&:hover {
		background: linear-gradient(90deg, #ff8a00, #e52e71);
		text-shadow: none;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		box-decoration-break: clone;
		background-clip: text;
		border-color: white;
	}
`

const Icon = styled.svg.attrs({
	version: '1.1',
	xmlns: 'http://www.w3.org/2000/svg',
	xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``

const Svg = styled(Icon)`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 60px;
	height: 48px;
	fill: none;
	stroke: #ff8a00;
	stroke-width: 8;
	stroke-linecap: round;
	pointer-events: none;
`

export const HalfCircle = () => (
	<Svg viewBox='0 0 106 57'>
		<path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4'></path>
	</Svg>
)
