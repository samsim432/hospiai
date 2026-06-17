import { useAuth } from "../context/AuthContext";

export default function StaffDashboard() {
  const { logout, profile } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <h1 className="text-3xl font-bold">Staff Dashboard</h1>
      <p className="mt-2 text-slate-300">Welcome, {profile?.full_name}</p>

      <button
        onClick={logout}
        className="mt-6 rounded-xl bg-red-500 px-4 py-2 font-semibold"
      >
        Logout
      </button>
    </div>
  );
}