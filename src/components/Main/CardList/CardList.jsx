import React from 'react'
import avatarProfileImage from '../../../assets/images/Cavalier_soldier.jpg'
import {
	CardBody,
	CardSection,
	CardItem,
	CardHeader,
	CardHeaderDate,
	CardHeaderTitle,
	CardAuthor,
	AuthorName,
	AuthorNamePrefix,
	AuthorAvatar,
	AvatarImage,
	Tags,
	TagsAnchor,
	HalfCircle,
} from './cardlist.styles'

function CardList() {
	return (
		<>
			<h1 className='text-6xl text-center text-gray-800'>Skills</h1>
			<CardBody className='mx-auto flex justify-center'>
				<CardSection className='max-w-6xl'>
					<CardItem>
						<CardHeader>
							<CardHeaderDate>Sep 11th 2020</CardHeaderDate>
							<CardHeaderTitle>Never forget</CardHeaderTitle>
						</CardHeader>

						<CardAuthor>
							<AuthorAvatar href='#'>
								<AvatarImage src={avatarProfileImage} />
							</AuthorAvatar>
							<HalfCircle></HalfCircle>

							<AuthorName>
								<AuthorNamePrefix>Author</AuthorNamePrefix>
								Jeff Delaney
							</AuthorName>
						</CardAuthor>
						<Tags className='tags'>
							<TagsAnchor href='#'>html</TagsAnchor>
							<TagsAnchor href='#'>css</TagsAnchor>
							<TagsAnchor href='#'>web-dev</TagsAnchor>
						</Tags>
					</CardItem>
					<CardItem>
						<CardHeader>
							<CardHeaderDate>Sep 11th 2020</CardHeaderDate>
							<CardHeaderTitle>Never forget</CardHeaderTitle>
						</CardHeader>

						<CardAuthor>
							<AuthorAvatar href='#'>
								<AvatarImage src={avatarProfileImage} />
							</AuthorAvatar>
							<HalfCircle
								className='half-circle'
								fill='orange'
							></HalfCircle>

							<AuthorName>
								<AuthorNamePrefix>Author</AuthorNamePrefix>
								Jeff Delaney
							</AuthorName>
						</CardAuthor>
						<Tags className='tags'>
							<TagsAnchor href='#'>html</TagsAnchor>
							<TagsAnchor href='#'>css</TagsAnchor>
							<TagsAnchor href='#'>web-dev</TagsAnchor>
						</Tags>
					</CardItem>
					<CardItem>
						<CardHeader>
							<CardHeaderDate>Sep 11th 2020</CardHeaderDate>
							<CardHeaderTitle>Never forget</CardHeaderTitle>
						</CardHeader>

						<CardAuthor>
							<AuthorAvatar href='#'>
								<AvatarImage src={avatarProfileImage} />
							</AuthorAvatar>
							<HalfCircle
								className='half-circle'
								fill='orange'
							></HalfCircle>

							<AuthorName>
								<AuthorNamePrefix>Author</AuthorNamePrefix>
								Jeff Delaney
							</AuthorName>
						</CardAuthor>
						<Tags className='tags'>
							<TagsAnchor href='#'>html</TagsAnchor>
							<TagsAnchor href='#'>css</TagsAnchor>
							<TagsAnchor href='#'>web-dev</TagsAnchor>
						</Tags>
					</CardItem>
					<CardItem>
						<CardHeader>
							<CardHeaderDate>Sep 11th 2020</CardHeaderDate>
							<CardHeaderTitle>Never forget</CardHeaderTitle>
						</CardHeader>

						<CardAuthor>
							<AuthorAvatar href='#'>
								<AvatarImage src={avatarProfileImage} />
							</AuthorAvatar>
							<HalfCircle
								className='half-circle'
								fill='orange'
							></HalfCircle>

							<AuthorName>
								<AuthorNamePrefix>Author</AuthorNamePrefix>
								Jeff Delaney
							</AuthorName>
						</CardAuthor>
						<Tags className='tags'>
							<TagsAnchor href='#'>html</TagsAnchor>
							<TagsAnchor href='#'>css</TagsAnchor>
							<TagsAnchor href='#'>web-dev</TagsAnchor>
						</Tags>
					</CardItem>{' '}
					<CardItem>
						<CardHeader>
							<CardHeaderDate>Sep 11th 2020</CardHeaderDate>
							<CardHeaderTitle>Never forget</CardHeaderTitle>
						</CardHeader>

						<CardAuthor>
							<AuthorAvatar href='#'>
								<AvatarImage src={avatarProfileImage} />
							</AuthorAvatar>
							<HalfCircle
								className='half-circle'
								fill='orange'
							></HalfCircle>

							<AuthorName>
								<AuthorNamePrefix>Author</AuthorNamePrefix>
								Jeff Delaney
							</AuthorName>
						</CardAuthor>
						<Tags className='tags'>
							<TagsAnchor href='#'>html</TagsAnchor>
							<TagsAnchor href='#'>css</TagsAnchor>
							<TagsAnchor href='#'>web-dev</TagsAnchor>
						</Tags>
					</CardItem>{' '}
					<CardItem>
						<CardHeader>
							<CardHeaderDate>Sep 11th 2020</CardHeaderDate>
							<CardHeaderTitle>Never forget</CardHeaderTitle>
						</CardHeader>

						<CardAuthor>
							<AuthorAvatar href='#'>
								<AvatarImage src={avatarProfileImage} />
							</AuthorAvatar>
							<HalfCircle
								className='half-circle'
								fill='orange'
							></HalfCircle>

							<AuthorName>
								<AuthorNamePrefix>Author</AuthorNamePrefix>
								Jeff Delaney
							</AuthorName>
						</CardAuthor>
						<Tags className='tags'>
							<TagsAnchor href='#'>html</TagsAnchor>
							<TagsAnchor href='#'>css</TagsAnchor>
							<TagsAnchor href='#'>web-dev</TagsAnchor>
						</Tags>
					</CardItem>
				</CardSection>
			</CardBody>
		</>
	)
}

export default CardList
