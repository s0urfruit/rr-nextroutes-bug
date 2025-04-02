import { Outlet, Link } from "@remix-run/react";
import { cookieStorage } from "~/lib/auth/session.server"
import { redirect, json } from "@remix-run/node";

export async function loader({ request }) {
	let session = await cookieStorage.getSession(request.headers.get("cookie"))
	let data = session.get("user")
	if (!data) return redirect("/login")
	return data     
}

export default function DashboardLayout() {

	return (
		<div>
            <h1>LAYOUT</h1>
			<nav>
				<Link to="/dashboard">Home</Link>
				<br />
				<Link to="/dashboard/settings">Settings</Link>
				<br />
				<Link to="/dashboard/billing">Billing</Link>
				<br />
				<Link to="/dashboard/users">Users</Link>
			</nav>
			<main>
				<br />
				Outlet:
				<br />
				------
				<br />
				<Outlet />
			</main>
		</div>
	)
}
