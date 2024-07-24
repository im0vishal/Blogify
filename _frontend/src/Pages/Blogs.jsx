
import { useNavigate } from 'react-router-dom';
import Appbar from '../component/Appbar'
import BlogCard from '../component/BlogCard'
import BlogSkeleton, { AppbarSkeleton } from '../component/BlogSkeleton';
import { useBlogs } from '../hooks/useBlogs'
import { getParsedDate } from '../utils/ParsedDate.js';
import { getToken } from '../utils/getToken.js';
import { useState } from 'react';


const Blogs = () => {
    // const { loading, blogs } = useBlogs();
	const [blogs, setBlogs] = useState([]);
	const navigate = useNavigate();
	const token = getToken();

    // if (loading) {
    //     return <div className='flex flex-col justify-center items-center'>
	// 		<div className='w-full'>
	// 			<AppbarSkeleton />
	// 		</div>
	// 		<div className='max-w-3xl w-full'>
	// 			<BlogSkeleton />
	// 		</div>
	// 	</div>
    // }

	if (!token) {
		navigate('/signin')
	}

	return (
        <>
			<Appbar />
			<div className='flex justify-center'>
                <div className='max-w-3xl'>
                    <div>
						{blogs.map((blog) => {
							return (
								<BlogCard
									key={blog.id}
									id={blog.id}
									authorName={blog.author.name}
									title={blog.title}
									content={blog.content}
									publishedDate={getParsedDate(blog.createdAt)}
								/>
							)
						})}
                    </div>
                </div>
			</div>
		</>
  )
}

export default Blogs