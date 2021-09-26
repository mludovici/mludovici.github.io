import React from 'react'
import {
    CardItem,
    CardHeader,
    CardHeaderDate,
    CardHeaderTitle,
    CardAuthor,
    AuthorAvatar,
    CardBody,
    CardSection,
    Tags,
    TagsAnchor,
} from './cardlist.styles'
import {
    FaReact,
    FaAngular,
    FaDocker,
    FaGithub,
    FaVuejs,
    FaGulp,
} from 'react-icons/fa'
import {
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiJava,
    SiSpring,
    SiPython,
    SiRstudio,
    SiWebpack,
    SiMongodb,
    SiMysql,
    SiFirebase,
    SiFlutter,
    SiMicrosoftsqlserver,
} from 'react-icons/si'

function CardList() {
    return (
        <>
            <h1 className="text-6xl text-center text-gray-800 ">Stack</h1>
            <CardBody className="mx-auto flex justify-center">
                <CardSection className="max-w-6xl">
                    <CardItem>
                        <CardHeader>
                            <CardHeaderDate></CardHeaderDate>
                            <CardHeaderTitle>Web Dev</CardHeaderTitle>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiHtml5 fill={'orange'}></SiHtml5>
                                </AuthorAvatar>{' '}
                                HTML 5
                            </CardAuthor>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiCss3 fill="lightblue"></SiCss3>
                                </AuthorAvatar>{' '}
                                CSS
                            </CardAuthor>{' '}
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiJavascript fill="yellow"></SiJavascript>
                                </AuthorAvatar>{' '}
                                Javascript
                            </CardAuthor>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiTypescript fill="#2596be"></SiTypescript>
                                </AuthorAvatar>{' '}
                                Typescript
                            </CardAuthor>
                        </CardHeader>

                        <Tags className="tags">
                            <TagsAnchor href="#">html</TagsAnchor>
                            <TagsAnchor href="#">css</TagsAnchor>
                            <TagsAnchor href="#">web-dev</TagsAnchor>
                        </Tags>
                    </CardItem>
                    <CardItem>
                        <CardHeader>
                            <CardHeaderDate></CardHeaderDate>
                            <CardHeaderTitle>Web / Mobile</CardHeaderTitle>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiJava></SiJava>
                                </AuthorAvatar>{' '}
                                Java
                            </CardAuthor>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiSpring></SiSpring>
                                </AuthorAvatar>{' '}
                                Spring Boot
                            </CardAuthor>{' '}
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiFlutter></SiFlutter>
                                </AuthorAvatar>{' '}
                                Flutter
                            </CardAuthor>{' '}
                        </CardHeader>

                        <Tags>
                            <TagsAnchor href="#">Java</TagsAnchor>
                            <TagsAnchor href="#">Mobile</TagsAnchor>
                        </Tags>
                    </CardItem>
                    <CardItem>
                        <CardHeader>
                            <CardHeaderDate></CardHeaderDate>
                            <CardHeaderTitle>JS-Frameworks</CardHeaderTitle>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <FaReact></FaReact>
                                </AuthorAvatar>{' '}
                                React
                            </CardAuthor>{' '}
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <FaAngular></FaAngular>
                                </AuthorAvatar>{' '}
                                Angular
                            </CardAuthor>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <FaVuejs></FaVuejs>
                                </AuthorAvatar>{' '}
                                Vue
                            </CardAuthor>
                        </CardHeader>

                        <Tags className="tags">
                            <TagsAnchor href="#">JS Frameworks</TagsAnchor>
                        </Tags>
                    </CardItem>

                    <CardItem>
                        <CardHeader>
                            <CardHeaderDate></CardHeaderDate>
                            <CardHeaderTitle>Tooling</CardHeaderTitle>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <FaDocker></FaDocker>
                                </AuthorAvatar>{' '}
                                Docker
                            </CardAuthor>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <FaGithub></FaGithub>
                                </AuthorAvatar>{' '}
                                GitHub
                            </CardAuthor>{' '}
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <FaGulp></FaGulp>
                                </AuthorAvatar>{' '}
                                Gulp
                            </CardAuthor>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiWebpack></SiWebpack>
                                </AuthorAvatar>{' '}
                                Webpack
                            </CardAuthor>
                        </CardHeader>

                        <Tags className="tags">
                            <TagsAnchor href="#">Tooling</TagsAnchor>
                            <TagsAnchor href="#">Orchestration</TagsAnchor>
                        </Tags>
                    </CardItem>

                    <CardItem>
                        <CardHeader>
                            <CardHeaderDate></CardHeaderDate>
                            <CardHeaderTitle>Data Science</CardHeaderTitle>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiPython></SiPython>
                                </AuthorAvatar>{' '}
                                Python
                            </CardAuthor>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiRstudio></SiRstudio>
                                </AuthorAvatar>{' '}
                                R
                            </CardAuthor>{' '}
                        </CardHeader>
                        <Tags className="tags">
                            <TagsAnchor href="#">Data Science</TagsAnchor>
                        </Tags>
                    </CardItem>
                    <CardItem>
                        <CardHeader>
                            <CardHeaderDate></CardHeaderDate>
                            <CardHeaderTitle>Databases</CardHeaderTitle>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiMongodb></SiMongodb>
                                </AuthorAvatar>{' '}
                                MongoDB
                            </CardAuthor>
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiMysql></SiMysql>
                                </AuthorAvatar>{' '}
                                Mysql
                            </CardAuthor>{' '}
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiFirebase></SiFirebase>
                                </AuthorAvatar>{' '}
                                Firebase
                            </CardAuthor>{' '}
                            <CardAuthor>
                                <AuthorAvatar href="#">
                                    <SiMicrosoftsqlserver></SiMicrosoftsqlserver>
                                </AuthorAvatar>{' '}
                                MSSQL Server
                            </CardAuthor>{' '}
                        </CardHeader>
                        <Tags className="tags">
                            <TagsAnchor href="#">Databases</TagsAnchor>
                        </Tags>
                    </CardItem>
                </CardSection>
            </CardBody>
        </>
    )
}

export default CardList
