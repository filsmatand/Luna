import { Calendar} from 'lucide-react';

export default function Calendrier (){

      const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

    return (

         <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold flex items-center gap-2">
                    <Calendar size={18} className="text-blue-500" />
                    Juillet 2026
                  </h3>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day) => (
                    <div key={day} className="text-center text-[10px] font-bold text-slate-500 uppercase">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day) => (
                    <div
                      key={day}
                      className={`aspect-square flex items-center justify-center rounded-lg text-xs font-bold transition ${
                        day === 25 ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-800/50 text-slate-500 hover:bg-slate-800'
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
    )
}