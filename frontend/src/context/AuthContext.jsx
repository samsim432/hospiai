import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProfile = async (userId) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, full_name, email, role")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Profile error:", error.message);
      setProfile(null);
      setRole(null);
      return null;
    }

    setProfile(data);
    setRole(data.role);
    return data;
  };

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser(session.user);
        await getProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
        setRole(null);
      }

      setLoading(false);
    };

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setLoading(true);

      if (session?.user) {
        setUser(session.user);
        await getProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
        setRole(null);
      }

      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();

    setUser(null);
    setProfile(null);
    setRole(null);

    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        role,
        loading,
        logout,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}