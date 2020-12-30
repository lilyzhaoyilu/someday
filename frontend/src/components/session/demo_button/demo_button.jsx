export default ({ demoUser, login }) => {
	return <button onClick={() => login(demoUser)}>Demo Login</button>;
};
