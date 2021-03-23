import React from 'react';
import  s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div><img src='https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg' className={s.dialogImage}/></div>
            <div className={s.dialogTextBlock}> <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
        </div>
    )
}

export default DialogItem;