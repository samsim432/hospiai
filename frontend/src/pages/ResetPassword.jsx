import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      setIsSubmitting(false);
      return;
    }

    setMessage("Password updated successfully. Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 1500);

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl p-6 sm:p-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-blue-200 uppercase">
            HospiAI
          </p>

          <h1 className="mt-4 text-3xl font-bold text-white">
            Reset password
          </h1>

          <p className="mt-2 text-sm text-slate-300">
            Create a new secure password for your account.
          </p>
        </div>

        {message && (
          <div className="mb-5 rounded-2xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm text-green-100">
            {message}
          </div>
        )}

        {errorMessage && (
          <div className="mb-5 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleResetPassword} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              New password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-300"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Confirm password
            </label>

            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-blue-500 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Updating..." : "Update password"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-sm font-medium text-blue-200 hover:text-white"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}