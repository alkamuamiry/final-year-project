import {
  Users,
  Monitor,
  Fingerprint,
  Activity,
} from "lucide-react"
import { toast } from "sonner";
export default function AdminDashboard() {
  
// toast.error("Failed to save");

  const cards = [
    {
      title: "Students",
      value: "120",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Devices",
      value: "5",
      icon: Monitor,
      color: "bg-green-500",
    },
    {
      title: "Attendance Today",
      value: "98%",
      icon: Activity,
      color: "bg-purple-500",
    },
    {
      title: "Face Records",
      value: "120",
      icon: Fingerprint,
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="space-y-6 w-full  ">

      <h1 className="text-2xl font-bold  ">
        Dashboard Overview
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {cards.map((card, i) => {
          const Icon = card.icon

          return (
            <div
              key={i}
              className="card  rounded-xl shadow-sm p-4 flex items-center gap-4 "
            >

              <div className={`p-3 rounded-lg  ${card.color}`}>
                <Icon size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {card.title}
                </p>
                <h2 className="text-xl font-bold">
                  {card.value}
                </h2>
              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}