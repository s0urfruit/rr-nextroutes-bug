import { redirect } from "@remix-run/node";
import { cookieStorage } from "~/lib/auth/session.server"

export async function action({ request }) {
	let session = await cookieStorage.getSession(request.headers.get("cookie"))
	return redirect("/", {
		headers: {
			"Set-Cookie": await cookieStorage.destroySession(session),
		},
	})
}

export function loader() {
	return redirect("/")
}
