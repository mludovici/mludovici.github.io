import React from 'react'
import TimeLineCSS from './TimeLineCard.module.css'
function TimeLineCard({ job, content, date, street, city, zip, state }) {
    return (
        <div className={TimeLineCSS['content']}>
            <div className={TimeLineCSS['card']}>
                <h2 className={`{TimeLineCSS['jobtitle']}`}>{job}</h2>
                <p className={`${TimeLineCSS['address']} uppercase`}>
                    <p>
                        {date} {street} {city} {zip}
                        {state}
                    </p>
                    Graphic Designer
                </p>
                <p className={TimeLineCSS['jobcontent']}>
                    {content}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere a tempore, dignissimos odit accusantium repellat
                    quidem, sit molestias dolorum placeat quas debitis ipsum
                    esse rerum?
                </p>
                {/* <ul className={TimeLineCSS['social-link']}>
                    <li>
                        <button href=" " className={TimeLineCSS['social-link']}>
                            <i className="fab fa-dribbble-square"></i>
                        </button>
                    </li>
                    <li>
                        <button href=" " className={TimeLineCSS['social-link']}>
                            <i className="fab fa-facebook-square"></i>
                        </button>
                    </li>
                    <li>
                        <button href=" " className={TimeLineCSS['social-link']}>
                            <i className="fab fa-twitter-square"></i>
                        </button>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}

export default TimeLineCard
