import { redirect } from "@remix-run/node";

export async function loader({ request }) {
	let user = true
	
	if (user) {
		return redirect("/dashboard")
	}
}

export default function Login() {
	return (
		<>
			<h1 className="py-2">Login</h1>
			<p>You are not logged in!</p>
			<form action="/auth/github" method="post">
				<button type="submit" className="btn btn-primary">
					Login with Github
				</button>
			</form>
		</>
	)
}
