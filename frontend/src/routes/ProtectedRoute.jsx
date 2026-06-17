import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, role, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    if (role === "super_admin") return <Navigate to="/admin" replace />;
    if (role === "hotel_owner") return <Navigate to="/dashboard" replace />;
    if (role === "hotel_staff") return <Navigate to="/staff" replace />;

    return <Navigate to="/login" replace />;
  }

  return children;
}