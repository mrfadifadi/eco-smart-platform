import {
  TrendingUp,
  TrendingDown,
  Package,
  DollarSign,
  Users,
  ShoppingCart,
  ArrowUpRight,
  MoreHorizontal,
  CheckCircle2,
  Clock,
  XCircle,
  Truck,
} from "lucide-react";

const stats = [
  { label: "إجمالي المبيعات", value: "1,284,500", suffix: "د.ج", change: "+12.5%", up: true, icon: DollarSign, color: "bg-blue-500" },
  { label: "الطلبات الجديدة", value: "184", change: "+8.2%", up: true, icon: ShoppingCart, color: "bg-emerald-500" },
  { label: "المنتجات النشطة", value: "42", change: "+3", up: true, icon: Package, color: "bg-violet-500" },
  { label: "العملاء", value: "1,205", change: "-2.1%", up: false, icon: Users, color: "bg-amber-500" },
];

const recent = [
  { id: "#10245", customer: "أحمد بن علي", product: "ساعة ذكية", city: "الجزائر", amount: "8,500", status: "confirmed" },
  { id: "#10244", customer: "سارة محمود", product: "سماعات لاسلكية", city: "وهران", amount: "4,200", status: "pending" },
  { id: "#10243", customer: "يوسف الطاهر", product: "حقيبة جلدية", city: "قسنطينة", amount: "6,800", status: "shipped" },
  { id: "#10242", customer: "ليلى قاسم", product: "عطر رجالي", city: "عنابة", amount: "3,500", status: "failed" },
  { id: "#10241", customer: "كريم بوعلام", product: "منتج تجريبي", city: "باب الزوار", amount: "3,000", status: "confirmed" },
];

const statusStyles: Record<string, { label: string; cls: string; icon: React.ComponentType<{ className?: string }> }> = {
  confirmed: { label: "مؤكد", cls: "bg-emerald-50 text-emerald-600 ring-emerald-100", icon: CheckCircle2 },
  pending: { label: "قيد الانتظار", cls: "bg-amber-50 text-amber-600 ring-amber-100", icon: Clock },
  shipped: { label: "تم الشحن", cls: "bg-blue-50 text-blue-600 ring-blue-100", icon: Truck },
  failed: { label: "فشل", cls: "bg-red-50 text-red-600 ring-red-100", icon: XCircle },
};

export function DashboardPage() {
  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">مرحباً بك، تاجر 👋</h1>
          <p className="text-sm text-slate-500 mt-1">هذه نظرة عامة على أداء متجرك اليوم</p>
        </div>
        <button className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600">
          + إنشاء طلب جديد
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => {
          const Icon = s.icon;
          const Trend = s.up ? TrendingUp : TrendingDown;
          return (
            <div key={s.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-start justify-between">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.color} text-white`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ${s.up ? "bg-emerald-50 text-emerald-600 ring-emerald-100" : "bg-red-50 text-red-600 ring-red-100"}`}>
                  <Trend className="h-3 w-3" />
                  {s.change}
                </span>
              </div>
              <div className="mt-4">
                <div className="text-sm text-slate-500">{s.label}</div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-800">{s.value}</span>
                  {s.suffix && <span className="text-sm text-slate-500">{s.suffix}</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart + side panel */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-800">تطور المبيعات</h3>
              <p className="text-xs text-slate-500 mt-1">آخر 7 أيام</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <FakeChart />
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <h3 className="font-semibold text-slate-800">أفضل المنتجات</h3>
          <p className="text-xs text-slate-500 mt-1">حسب المبيعات</p>
          <ul className="mt-4 space-y-4">
            {[
              { name: "ساعة ذكية", sales: 82, pct: 90 },
              { name: "سماعات لاسلكية", sales: 64, pct: 70 },
              { name: "حقيبة جلدية", sales: 45, pct: 50 },
              { name: "عطر رجالي", sales: 30, pct: 35 },
            ].map((p) => (
              <li key={p.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">{p.name}</span>
                  <span className="text-slate-500">{p.sales} طلب</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-blue-500" style={{ width: `${p.pct}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent orders */}
      <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <h3 className="font-semibold text-slate-800">أحدث الطلبات</h3>
          <a href="/orders" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
            عرض الكل <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-5 py-3 text-start font-medium">رقم الطلب</th>
                <th className="px-5 py-3 text-start font-medium">الزبون</th>
                <th className="px-5 py-3 text-start font-medium">المنتج</th>
                <th className="px-5 py-3 text-start font-medium">الولاية</th>
                <th className="px-5 py-3 text-start font-medium">المبلغ</th>
                <th className="px-5 py-3 text-start font-medium">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recent.map((o) => {
                const st = statusStyles[o.status];
                const Icon = st.icon;
                return (
                  <tr key={o.id} className="hover:bg-slate-50/50">
                    <td className="px-5 py-3 font-medium text-slate-700">{o.id}</td>
                    <td className="px-5 py-3 text-slate-700">{o.customer}</td>
                    <td className="px-5 py-3 text-slate-600">{o.product}</td>
                    <td className="px-5 py-3 text-slate-600">{o.city}</td>
                    <td className="px-5 py-3 font-medium text-slate-800">{o.amount} د.ج</td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ${st.cls}`}>
                        <Icon className="h-3 w-3" />
                        {st.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function FakeChart() {
  const bars = [40, 65, 45, 80, 55, 90, 70];
  const days = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];
  return (
    <div className="mt-6">
      <div className="flex h-48 items-end justify-between gap-3">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <div
              className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-blue-400 transition-all hover:from-blue-600 hover:to-blue-500"
              style={{ height: `${h}%` }}
            />
            <span className="text-xs text-slate-500">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}