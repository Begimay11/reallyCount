import CommentWrapper from '../UI/ComponentWrapper';
import CommentDate from './CommentDate';
import UserInfo from './UserInfo';
import './Avatar.css'

function Avatar(props){
    return  <CommentWrapper className='Comment'> 
          <UserInfo author={props.author}/>
        <div className="Comment-text">
         {props.text}
        </div>
     <CommentDate date={props.date}/>
     </CommentWrapper>
    
}
export default Avatar;