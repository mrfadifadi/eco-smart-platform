import { createFileRoute } from "@tanstack/react-router";
import { Plus, Globe, Eye, Edit3, MoreVertical, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "صفحات الهبوط — EcoSmart" },
      { name: "description", content: "أنشئ صفحات هبوط لمنتجاتك بضغطة زر" },
      { property: "og:title", content: "صفحات الهبوط — EcoSmart" },
      { property: "og:description", content: "أنشئ صفحات هبوط لمنتجاتك بضغطة زر" },
    ],
  }),
  component: LandingPage,
});

const pages = [
  { name: "صفحة الساعة الذكية", url: "smartwatch-pro", visits: 1245, orders: 82, conversion: "6.6%", status: "منشورة" },
  { name: "عرض السماعات", url: "wireless-headphones", visits: 890, orders: 64, conversion: "7.2%", status: "منشورة" },
  { name: "الحقيبة الجلدية", url: "leather-bag", visits: 420, orders: 45, conversion: "10.7%", status: "منشورة" },
  { name: "عطر الشتاء", url: "winter-perfume", visits: 0, orders: 0, conversion: "-", status: "مسودة" },
];

function LandingPage() {
  return (
    <div className="p-4 md:p-8 space-y-6" dir="rtl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">صفحات الهبوط</h1>
          <p className="text-sm text-slate-500 mt-1">أنشئ صفحات بيع احترافية لمنتجاتك</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600">
          <Plus className="h-4 w-4" />
          <span>إنشاء صفحة جديدة</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          { label: "إجمالي الزيارات", value: "2,555", icon: Eye, color: "bg-blue-500" },
          { label: "الطلبات المحققة", value: "191", icon: TrendingUp, color: "bg-emerald-500" },
          { label: "متوسط التحويل", value: "8.1%", icon: Globe, color: "bg-violet-500" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.color} text-white`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">{s.label}</div>
                <div className="text-2xl font-bold text-slate-800">{s.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {pages.map((p) => (
          <div key={p.url} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
            <div className="relative h-36 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <Globe className="h-12 w-12 text-white/40" />
              <span className={`absolute top-3 end-3 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ${p.status === "منشورة" ? "bg-white/90 text-emerald-600 ring-emerald-100" : "bg-white/90 text-amber-600 ring-amber-100"}`}>
                {p.status}
              </span>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-800 truncate">{p.name}</h3>
                  <p className="text-xs text-slate-500 truncate mt-0.5">ecosmart.app/{p.url}</p>
                </div>
                <button className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                <div>
                  <div className="text-[10px] text-slate-400">زيارات</div>
                  <div className="text-sm font-semibold text-slate-700">{p.visits}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">طلبات</div>
                  <div className="text-sm font-semibold text-slate-700">{p.orders}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">تحويل</div>
                  <div className="text-sm font-semibold text-emerald-600">{p.conversion}</div>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-blue-50 py-2 text-xs font-medium text-blue-600 hover:bg-blue-100">
                  <Edit3 className="h-3.5 w-3.5" />
                  تعديل
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-slate-50 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100">
                  <Eye className="h-3.5 w-3.5" />
                  معاينة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}