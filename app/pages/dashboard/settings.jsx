import { json, redirect } from "@remix-run/node";
import { useLoaderData, Link, Outlet } from "@remix-run/react";

export async function loader({ request }) {
	return {}
}

// error boundary
export function ErrorBoundary({ error }) {
	console.error(error)
	return <div>An error occurred: {error.message}</div>
}

export default function DashboardSettings() {
	const data = useLoaderData()

	return (
		<>
			<h1>Account Settings</h1>
			<p>Manage your account settings here.</p>

			<div className="settings-section">
				<h2>Profile Information</h2>
			</div>

			<div className="settings-section">
				<h2>Preferences</h2>
				<div className="form-group">
					<label>
						<input type="checkbox" defaultChecked={true} />
						Enable email notifications
					</label>
				</div>

				<div className="form-group">
					<label>
						<input type="checkbox" defaultChecked={false} />
						Enable dark mode
					</label>
				</div>

				<button className="btn btn-primary">Save Preferences</button>
			</div>
		</>
	)
}
