import { redirect } from "@remix-run/node"
import { cookieStorage } from "~/lib/auth/session.server"

export async function loader({ request }) {
	let session = await cookieStorage.getSession(request.headers.get("cookie"))
	let user = session.get("user")
	
	if (user) {
		return redirect("/dashboard")
	} else {
		return redirect("/login")
	}
}

export default function Index() {
	return null
}
