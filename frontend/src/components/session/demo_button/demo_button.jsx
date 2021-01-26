export default ({ demoUser, login }) => {
	return (
		<button
			className="sinup-form-demo"
			onClick={() => {
				login(demoUser);
			}}
		>
			Demo Login
		</button>
	);
};
