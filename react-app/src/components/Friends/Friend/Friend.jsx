import React from 'react';
import classes from "./../Friends.module.css";
const Friend = (props) => {

    return (
        <div className={classes.friendItem}>
            <div ><img className={classes.friendImg} src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"/></div>
            <div className={classes.friendName}>{props.name}</div>
        </div>
    )
}

export default Friend;