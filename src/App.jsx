import ProfileCard from "./components/ProfileCard";
import BadgeRow from "./components/BadgeRow";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            React + <span className="text-cyan-400">TailwindCSS</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">Beginner's Toolkit — Working Demo</p>
        </div>
        <ProfileCard
          name="Ajok Pioth"
          role="Frontend Engineer"
          bio="Building beautiful UIs one utility class at a time."
          avatarInitials="JD"
          stats={{ projects: 12, followers: 340, stars: 89 }}
        />
        <BadgeRow badges={["React 18", "TailwindCSS v3", "Vite", "JSX"]} />
      </div>
    </div>
  );
}
