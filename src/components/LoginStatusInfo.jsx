import React, {useState, useEffect} from 'react'
import { useAuth } from '../providers/AuthProvider';


export default function LoginStatusInfo() {
	const [user, setUser] = useState(null);
	let {currentUser} = useAuth();

	useEffect(() => {
		console.log(currentUser);
		if (currentUser) setUser(currentUser);
	}, [])
	let styles = {
		position: "fixed",
		bottom: 0,
		right: 0,
		backgroundColor: "turquoise",
		padding: "10px",
		boxShadow: "5px 3px 2px grey",
		margin: "10px"
	}
	return (
		<div style={styles}>
			You are currently {user ? 'logged in!' : 'not logged in'}
		</div>
	)
}
