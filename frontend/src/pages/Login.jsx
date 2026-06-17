import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { user, role, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!loading && user) {
    if (role === "super_admin") return <Navigate to="/admin" replace />;
    if (role === "hotel_owner") return <Navigate to="/dashboard" replace />;
    if (role === "hotel_staff") return <Navigate to="/staff" replace />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setIsSubmitting(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage("Invalid email or password. Please try again.");
      setIsSubmitting(false);
      return;
    }

    const userId = data.user.id;

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .single();

    if (profileError || !profile?.role) {
      setErrorMessage("Login successful, but no role was found for this user.");
      setIsSubmitting(false);
      return;
    }

    if (profile.role === "super_admin") navigate("/admin");
    if (profile.role === "hotel_owner") navigate("/dashboard");
    if (profile.role === "hotel_staff") navigate("/staff");

    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-100">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute top-24 -right-20 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative flex min-h-screen items-center justify-center px-4 py-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-2xl shadow-blue-200/50 backdrop-blur-xl md:grid-cols-2">
          <div className="hidden bg-gradient-to-br from-blue-600 to-sky-500 p-10 text-white md:flex md:flex-col md:justify-between">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-xl font-bold backdrop-blur">
                H
              </div>

              <h2 className="mt-8 text-4xl font-bold leading-tight">
                Never Miss a Booking Again
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-blue-50">
                Manage your AI receptionist, hotel conversations, leads, and
                guest communication from one clean dashboard.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/15 p-5 backdrop-blur">
              <p className="text-sm text-blue-50">
                “HospiAI helps hotels reply faster, capture more leads, and
                stay available 24/7.”
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                HospiAI
              </p>

              <h1 className="mt-4 text-3xl font-bold text-slate-900">
                Welcome back
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Login to manage your AI receptionist.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email address
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@hospiai.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-300 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  {isSubmitting ? "Logging in..." : "Login"}
                  {!isSubmitting && (
                    <span className="transition duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </span>
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm">
              <Link
                to="/forgot-password"
                className="font-semibold text-blue-600 transition hover:text-blue-800 hover:underline"
              >
                Forgot your password?
              </Link>

              <span className="text-slate-400">Secure access</span>
            </div>

            <div className="mt-8 rounded-2xl bg-blue-50 p-4 text-sm text-slate-600">
              <span className="font-semibold text-blue-700">Tip:</span> Use your
              assigned hotel account to access your role-based dashboard.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}