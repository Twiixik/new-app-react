import { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function CreatePage() {
    // Declare state variables for caption and image
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate(); // Ensure useNavigate is used

    async function handleSubmit(event) {
        event.preventDefault();

        const post = { caption, image, uid: "fTs84KRoYw5pRZEWCq2Z" }; // Create post object

        const response = await fetch(
            "https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
            {
                method: "POST",
                body: JSON.stringify(post),
            }
        );

        if (response.ok) {
            navigate("/"); // Navigate to the home page on success
        } else {
            console.error('Failed to create post:', response.statusText); // Handle error response
        }
    }

    return (
        <section className="page">
            <div className="container">
                <form className="form-grid" onSubmit={handleSubmit}>
                    <label htmlFor="caption">Caption</label>
                    <input
                        id="caption"
                        name="caption"
                        type="text"
                        value={caption}
                        aria-label="caption"
                        placeholder="Write a caption..."
                        onChange={e => setCaption(e.target.value)}
                    />
                    <label htmlFor="image-url">Image</label>
                    <input
                        id="image-url"
                        name="image-url"
                        type="url"
                        value={image}
                        aria-label="image"
                        placeholder="Paste an image URL..."
                        onChange={e => setImage(e.target.value)}
                    />
                    <label htmlFor="image-preview"></label>
                    <img
                        id="image-preview"
                        className="image-preview"
                        src={image ? image : "https://placehold.co/600x400?text=Paste+an+image+URL"}
                        alt="Choose"
                        onError={e => (e.target.src = "https://placehold.co/600x400?text=Error+loading+image")}
                    />
                    <div className="btns">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
