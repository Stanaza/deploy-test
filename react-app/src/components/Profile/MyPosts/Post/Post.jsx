import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src='https://starnote.ru/media/starnote/v3/main/2015/10/15/po-motivam-filma-avatar-vypustjat-komiksy.jpg'></img>
            {props.message}
            <div><span>like {props.likes}</span></div>
        </div>
    )
}

export default Post;