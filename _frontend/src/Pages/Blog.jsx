import { useNavigate, useParams } from 'react-router-dom';
import { useBlog } from '../hooks/useBlogs.js';
import BlogComponent from '../component/BlogComponent.jsx';
import BlogSkeleton from '../component/BlogSkeleton.jsx';
import { getToken } from '../utils/getToken.js';

const Blog = () => {
	const { id } = useParams();
	const { loading, blog } = useBlog({id: id || ''});
	const navigate = useNavigate();
	const token = getToken();

	if (loading || !blog) {
		return <div>
			<BlogSkeleton />
		</div>
	}

	if (!token) {
		navigate('/signin')
	}

	return (
		<BlogComponent blog={blog}/>
	)
}

export default Blog