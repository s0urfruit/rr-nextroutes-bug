import { redirect } from "@remix-run/node";
import { cookieStorage } from "~/lib/auth/session.server"

export async function action({ request }) {
	return redirect("/auth/github")
}

export async function loader({ request }) {
	// Check if user is already authenticated
	let session = await cookieStorage.getSession(request.headers.get("cookie"))
	let user = session.get("user")

	// If already logged in, redirect to home
	if (user) {
		return redirect("/dashboard")
	}

	// Return null instead of the user object to avoid client reference to server-only code
	return null
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
