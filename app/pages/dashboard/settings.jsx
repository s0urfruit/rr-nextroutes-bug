import { json, redirect } from "@remix-run/node";
import { useLoaderData, Link, Outlet } from "@remix-run/react";
import { cookieStorage } from "~/lib/auth/session.server"

export async function loader({ request }) {
	let session = await cookieStorage.getSession(request.headers.get("cookie"))
	let data = session.get("user")
	if (!data) return redirect("/login")
	return json({ data })
}

// error boundary
export function ErrorBoundary({ error }) {
	console.error(error)
	return <div>An error occurred: {error.message}</div>
}

export default function DashboardSettings() {
	const { data } = useLoaderData()

	return (
		<>
			<h1>Account Settings</h1>
			<p>Manage your account settings here.</p>

			<div className="settings-section">
				<h2>Profile Information</h2>
				<div className="form-group">
					<label>Name</label>
					<input type="text" defaultValue={data.session.user.name} />
				</div>

				<div className="form-group">
					<label>Email</label>
					<input type="email" defaultValue={data.session.user.email} />
				</div>

				<button className="btn btn-primary">Update Profile</button>
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
