import './CommentWrapper.css'

function CommentWrapper(props){
    let classess = 'wrapper ' + props.className
    return <div className={classess}>{props.children}</div>
}
export default CommentWrapper;