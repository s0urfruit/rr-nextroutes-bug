import { redirect, json } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { cookieStorage } from "~/lib/auth/session.server"

export async function action({ request }) {
	let session = await cookieStorage.getSession(request.headers.get("cookie"))
	return redirect("/login", {
		headers: {
			"Set-Cookie": await cookieStorage.destroySession(session),
		},
	})
}

export async function loader({ request }) {
	// Check if user is authenticated
	let session = await cookieStorage.getSession(request.headers.get("cookie"))
	let user = session.get("user")

	// If not logged in, redirect to login
	if (!user) {
		return redirect("/login")
	}

	// Return json with minimal data needed for the component
	return json({ isAuthenticated: true })
}

export default function Logout() {
	return (
		<>
			<h1 className="py-2">Logout</h1>
			<p>Are you sure you want to log out?</p>
			<Form method="post">
				<button type="submit" className="btn btn-primary">
					Logout
				</button>
			</Form>
		</>
	)
}