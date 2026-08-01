import { useNavigate } from "react-router-dom";

export default function Topcompagnie (){
  const Navigate = useNavigate()

 const companies = [
    { name: 'Google', count: 516, path:"/google"},
    { name: 'Amazon', count: 491, path:"/amazon" },
    { name: 'Meta', count: 441 },
    { name: 'Microsoft', count: 412 },
    { name: 'Bloomberg', count: 379 },
    { name: 'Tiktok', count: 198 },
    { name: 'Oracle', count: 175 },
    { name: 'Apple', count: 174 },
    { name: 'Uber', count: 155 },
    { name: 'Goldman Sachs', count: 139 },
  ];

    return (

         <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Top Companies</h2>
                <div className="flex flex-wrap gap-2">
                  {companies.map((company) => (
                    <button
                      onClick={() => Navigate(company.path)}
                      key={company.name}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition border ${company.name === 'Google' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300'}`}
                    >
                      {company.name} <span className="ml-1 opacity-60 font-normal">{company.count}</span>
                    </button>
                  ))}
                </div>
              </div>
    )
}