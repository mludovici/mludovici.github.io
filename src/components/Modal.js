import React from 'react'
import classes from './Modal.module.css'

const modal = props => {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== props.show ||
    //             nextProps.children !== props.children;
    // }

    return (
        <>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show
                        ? 'translateY(0)'
                        : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}>
                {props.children}
            </div>
        </>
    )
}

export default React.memo(modal)
