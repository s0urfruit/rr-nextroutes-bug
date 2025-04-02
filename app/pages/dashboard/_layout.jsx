import { Outlet, Link } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";

export async function loader({ request }) {
	return {}     
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
