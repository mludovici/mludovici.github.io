import React from 'react'
import TLCSS from './Timeline.module.css'
import {
    FaHome,
    FaGift,
    FaUserCircle,
    FaRunning,
    FaCog,
    FaCertificate,
} from 'react-icons/fa'
var classNames = require('classnames')

function Timeline() {
    return (
        <div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                aliquam necessitatibus impedit, atque provident, enim, ducimus
                soluta animi modi obcaecati veritatis quis corrupti repellendus
                error voluptates sed. Ipsam aut quidem vel quod voluptatem
                exercitationem ratione illum delectus magnam deleniti, corrupti
                nam a numquam. Sunt omnis sint quis nulla, molestiae eligendi.
            </div>
            <hr></hr>

            <div className={TLCSS.timeline}>
                <div className={classNames(TLCSS.container, TLCSS.left)}>
                    <div className={TLCSS.date}>15 Dec</div>
                    <FaHome className={TLCSS.icon} />
                    <div className={TLCSS.content}>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>
                            Lorem ipsum dolor sit amet elit. Aliquam odio dolor,
                            id luctus erat sagittis non. Ut blandit semper
                            pretium.
                        </p>
                    </div>
                </div>
                <div className={classNames(TLCSS.container, TLCSS.right)}>
                    <div className={TLCSS.date}>15 Dec</div>
                    <FaGift className={TLCSS.icon} />
                    <div className={TLCSS.content}>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>
                            Lorem ipsum dolor sit amet elit. Aliquam odio dolor,
                            id luctus erat sagittis non. Ut blandit semper
                            pretium.
                        </p>
                    </div>
                </div>
                <div className={classNames(TLCSS.container, TLCSS.left)}>
                    <div className={TLCSS.date}>15 Dec</div>
                    <FaUserCircle className={TLCSS.icon} />
                    <div className={TLCSS.content}>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>
                            Lorem ipsum dolor sit amet elit. Aliquam odio dolor,
                            id luctus erat sagittis non. Ut blandit semper
                            pretium.
                        </p>
                    </div>
                </div>
                <div className={classNames(TLCSS.container, TLCSS.right)}>
                    <div className={TLCSS.date}>15 Dec</div>
                    <FaRunning className={TLCSS.icon} />
                    <div className={TLCSS.content}>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>
                            Lorem ipsum dolor sit amet elit. Aliquam odio dolor,
                            id luctus erat sagittis non. Ut blandit semper
                            pretium.
                        </p>
                    </div>
                </div>
                <div className={classNames(TLCSS.container, TLCSS.left)}>
                    <div className={TLCSS.date}>15 Dec</div>
                    <FaCog className={TLCSS.icon} />
                    <div className={TLCSS.content}>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>
                            Lorem ipsum dolor sit amet elit. Aliquam odio dolor,
                            id luctus erat sagittis non. Ut blandit semper
                            pretium.
                        </p>
                    </div>
                </div>
                <div className={classNames(TLCSS.container, TLCSS.right)}>
                    <div className={TLCSS.date}>15 Dec</div>
                    <FaCertificate className={TLCSS.icon} />
                    <div className={TLCSS.content}>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>
                            Lorem ipsum dolor sit amet elit. Aliquam odio dolor,
                            id luctus erat sagittis non. Ut blandit semper
                            pretium.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
