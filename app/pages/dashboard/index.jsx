import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export default function DashboardHome() {
    const data = useLoaderData()
	return (
		<div className="dashboard-container">
			<div className="dashboard-sidebar">
				<h2>Dashboard</h2>
				<p>Welcome to the dashboard</p>
			</div>
			<div className="dashboard-content">
				<Link to="/logout">Logout</Link>
			</div>
		</div>
	)
}
