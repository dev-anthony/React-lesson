const Settings = ({ user }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-xl font-bold mb-2">Profile</h2>
    <p><strong>Username:</strong> {user}</p>
  </div>
);
export default Settings