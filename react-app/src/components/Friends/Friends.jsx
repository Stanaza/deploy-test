import React from 'react';
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";
const Friends = (props) => {
    let friends = props.state.sideBar.friendsNames.slice(0, 3).map(name => <Friend name ={name} />)
    return (
        <div className={classes.item}>
            <div className={classes.friends}>
                <div className={classes.friendsTitle}>Friends</div>
                <div className={classes.friendsBlock}>
                    {friends}
                </div>
            </div>
        </div>
    )
}

export default Friends;