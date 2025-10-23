import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const querySnapshot = await getDocs(collection(db, "feedbacks"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeedbacks(data);
      }
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (!user)
    return <p className="text-center mt-4 text-gray-600">Please log in first.</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-center mb-3">Owner Dashboard</h2>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-1 rounded mb-3"
      >
        Logout
      </button>
      <ul className="space-y-2">
        {feedbacks.map((fb) => (
          <li key={fb.id} className="border p-2 rounded">
            <strong>{fb.name}</strong> ({fb.email}) <br />
            {fb.message}
          </li>
        ))}
      </ul>
    </div>
  );
}