    import { useEffect, useState } from 'react'
    
    export default function UserAvatar({ uid }) {
        const [user, setUser] = useState([]); // Correctly destructuring useState with square brackets

    useEffect(() => {
        async function getUser() {
            const response = await fetch(`https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`);
            const data = await response.json();
            setUser(data);
        }
        getUser();
    }, [uid]);

    return (
		    <div className="avatar">
	        <img src={user.image} alt={user.id} />
            <span>
                <h3>{user.name}</h3>
                <p>{user.title}</p>
            </span>
        </div>
    );
}
