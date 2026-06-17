import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");
    setIsSubmitting(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/reset-password",
    });

    if (error) {
      setErrorMessage(error.message);
      setIsSubmitting(false);
      return;
    }

    setMessage("Password reset link sent. Please check your email.");
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
            Forgot password?
          </h1>

          <p className="mt-2 text-sm text-slate-300">
            Enter your email and we will send you a reset link.
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

        <form onSubmit={handleForgotPassword} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Email address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@hospiai.com"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-blue-500 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send reset link"}
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