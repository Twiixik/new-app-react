import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function HomePage() {
    const [posts, setPosts] = useState([]); // Correctly destructuring useState with square brackets

    useEffect(() => {
        async function fetchPosts() {
            const url = "https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
            setPosts(postsArray);
        }
        
        fetchPosts(); // Call the function correctly
        
    }, []); // Ensure the dependency array is closed properly

    return (
        <section className="page">
            <div className='grid'>
                {posts.map(post => (
	                <PostCard post={post} key={post.id} />
	            ))}
            </div>
        </section>
    );
}