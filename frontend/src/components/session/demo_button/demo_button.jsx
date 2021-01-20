export default ({ demoUser, login }) => {
	return (
		<button
			className="sinup-form-demo"
			onClick={() => {
				login(demoUser).then((res) => console.log(res));
			}}
		>
			Demo Login
		</button>
	);
};
