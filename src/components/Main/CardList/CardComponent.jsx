import React from 'react'
import {
    CardItem,
    CardHeader,
    CardHeaderDate,
    CardHeaderTitle,
    Tags,
    TagsAnchor,
} from './cardlist.styles'

function CardComponent() {
    return (
        <CardItem>
            <CardHeader>
                <CardHeaderDate></CardHeaderDate>
                <CardHeaderTitle>Web-Development</CardHeaderTitle>
            </CardHeader>

            <Tags className="tags">
                <TagsAnchor href="#">html</TagsAnchor>
                <TagsAnchor href="#">css</TagsAnchor>
                <TagsAnchor href="#">web-dev</TagsAnchor>
            </Tags>
        </CardItem>
    )
}

export default CardComponent
