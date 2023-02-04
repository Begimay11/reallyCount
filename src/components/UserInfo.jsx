import CommentWrapper from "../UI/ComponentWrapper";
import Comment from "./Comment";
import './UserInfo.css'

function UserInfo(props){
    return <CommentWrapper className='UserInfo'>
        <Comment author={props.author}/>
    <div className="Userinfo-name">{props.author.name}</div>
    </CommentWrapper>
}
export default UserInfo;