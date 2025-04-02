import { redirect } from "@remix-run/node"

export async function loader({ request }) {
	const user = true
	
	if (user) {
		return redirect("/dashboard")
	} else {
		return redirect("/login")
	}
}

export default function Index() {
	return null
}
