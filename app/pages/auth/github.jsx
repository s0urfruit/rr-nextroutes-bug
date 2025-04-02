import { redirect } from "@remix-run/node";
import { authenticator } from "~/lib/auth/auth.server"

export async function loader() {
	return redirect("/")
}

export async function action({ request }) {
	return authenticator.authenticate("github", request, {
		successRedirect: "/",
		failureRedirect: "/",
	})
}
