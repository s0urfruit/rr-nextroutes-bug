import { redirect } from "@remix-run/node";
import { authenticator } from "~/lib/auth/auth.server"
import { cookieStorage } from "~/lib/auth/session.server"

export async function loader({ request }) {
	// Authenticate the user and get their data
	let user = await authenticator.authenticate("github", request)
	
	// Create a new session and store the user data
	let session = await cookieStorage.getSession(request.headers.get("cookie"))
	session.set("user", user)
	
	// Redirect to the homepage with the session cookie
	return redirect("/", {
		headers: {
			"Set-Cookie": await cookieStorage.commitSession(session)
		}
	})
}
