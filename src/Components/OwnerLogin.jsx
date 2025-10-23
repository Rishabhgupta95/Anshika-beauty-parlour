import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function OwnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4 flex flex-col gap-3 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold text-center">Owner Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        Login
      </button>
    </form>
  );
}