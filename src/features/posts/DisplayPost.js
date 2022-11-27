import PostUserComponent from '../users/PostUserComponent'
import Reactions from './Reactions'
import TimeAgo from './TimeAgo'

const PostsExcerpt = ({ post }) => {
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p className="postCredit">
                <PostUserComponent userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <Reactions post={post} />
        </article>
    )
}
export default PostsExcerpt