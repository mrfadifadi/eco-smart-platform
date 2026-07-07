import { useState } from "react";
import {
  BarChart3,
  Truck,
  Package,
  ChevronUp,
  ChevronDown,
  AlertTriangle,
  HelpCircle,
  Trash2,
  Plus,
  Search,
  SlidersHorizontal,
  Filter,
  Calendar,
  Phone,
  RotateCcw,
  Pencil,
  ChevronDown as CaretDown,
  X,
  MoreVertical,
  ChevronLeft,
} from "lucide-react";

type TabKey = "confirm" | "tracking" | "stats";

const tabs: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "stats", label: "الإحصائيات", icon: BarChart3 },
  { key: "tracking", label: "التتبع", icon: Truck },
  { key: "confirm", label: "التأكيد", icon: Package },
];

export function OrdersPage() {
  const [active, setActive] = useState<TabKey>("confirm");
  const [panelOpen, setPanelOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-800" dir="rtl">
      {/* Side rail hint (blue tab on the edge) */}
      <div className="pointer-events-none fixed left-0 top-1/2 z-20 h-16 w-2 -translate-y-1/2 rounded-r-md bg-blue-500/80" />

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        {/* Tabs */}
        <div className="grid grid-cols-3 gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-100">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={
                  "flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition " +
                  (isActive
                    ? "bg-white text-blue-600 ring-1 ring-blue-200 shadow-sm"
                    : "text-slate-500 hover:bg-slate-50")
                }
              >
                <span>{t.label}</span>
                <Icon className="h-4 w-4" />
              </button>
            );
          })}
        </div>

        {/* Filters card */}
        <div className="mt-5 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
          <button
            onClick={() => setPanelOpen((v) => !v)}
            className="flex w-full items-center justify-center py-2 text-slate-400 hover:text-slate-600"
            aria-label="toggle filters"
          >
            {panelOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {panelOpen && (
            <div className="space-y-4 px-4 pb-5 pt-1 md:px-6">
              {/* Failed banner row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button className="flex items-center gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm font-medium text-red-600 ring-1 ring-red-100">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                    1
                  </span>
                  <span>عرض الطلبات الفاشلة</span>
                  <AlertTriangle className="h-4 w-4" />
                </button>
                <div className="text-sm text-slate-500">1 طلب فشل إرساله</div>
              </div>

              {/* Actions + search */}
              <div className="flex flex-wrap items-center gap-2">
                <button className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 ring-1 ring-slate-200 hover:bg-slate-50">
                  <HelpCircle className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 ring-1 ring-slate-200 hover:bg-slate-50">
                  <Trash2 className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm hover:bg-blue-600">
                  <Plus className="h-4 w-4" />
                </button>
                <div className="relative ms-auto flex-1 min-w-[220px]">
                  <Search className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="بحث..."
                    className="w-full rounded-xl bg-slate-50 py-2 pe-10 ps-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none ring-1 ring-slate-200 focus:ring-blue-300"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2">
                <button className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-1.5 text-xs text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100">
                  <span>فلاتر</span>
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 ring-1 ring-slate-200 hover:bg-slate-50">
                  <Filter className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Date group */}
        <div className="mt-8 flex items-center justify-end gap-2 text-sm text-slate-500">
          <span>اليوم</span>
          <Calendar className="h-4 w-4" />
        </div>
        <div className="mt-2 h-px w-full bg-slate-200/70" />

        {/* Order card */}
        <OrderCard />

        {/* Footer count */}
        <div className="mt-6 text-center text-sm text-slate-500">1 طلب</div>
      </div>
    </div>
  );
}

function OrderCard() {
  return (
    <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
      {/* Top row */}
      <div className="flex flex-wrap items-center gap-4 px-4 py-4 md:px-6">
        <label className="ms-auto flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-500 focus:ring-blue-400" />
          <span className="text-base font-semibold text-slate-800">منتج تجريبي</span>
        </label>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
          <div>
            <span className="text-slate-400">المنتج:</span> <span className="font-medium">2 500</span>
          </div>
          <div>
            <span className="text-slate-400">سعر التوصيل:</span> <span className="font-medium">500</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-slate-800">3 000</span>
            <span className="text-sm text-slate-500">د.ج</span>
          </div>
          <span className="rounded-md bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-600 ring-1 ring-amber-100">
            يدوي
          </span>
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-slate-500">2026/07/06 - 03:59</span>
        </div>
      </div>

      <div className="h-px w-full bg-slate-100" />

      {/* Bottom row */}
      <div className="flex flex-wrap items-center gap-3 px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-800">زبون تجريبي</span>
          <span className="text-slate-500 tracking-wider">0550000000</span>
          <button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 ring-1 ring-slate-200 hover:bg-slate-50">
            <Phone className="h-3.5 w-3.5" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.31-1.66a11.86 11.86 0 005.75 1.47h.01c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.44-8.43zM12.07 21.3h-.01a9.4 9.4 0 01-4.79-1.31l-.34-.2-3.75.98 1-3.65-.22-.37a9.37 9.37 0 01-1.44-5.02c0-5.18 4.22-9.4 9.55-9.4a9.5 9.5 0 016.75 2.8 9.44 9.44 0 012.79 6.6c0 5.19-4.22 9.57-9.54 9.57zm5.24-7.05c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.2-.33.22-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.17 3.02c.15.19 2.02 3.09 4.9 4.33.68.29 1.22.47 1.63.6.68.22 1.31.19 1.8.11.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.11-.26-.19-.55-.34z" />
            </svg>
          </button>
        </div>

        <div className="mx-2 flex items-center gap-2 text-slate-500">
          <span>الجزائر</span>
          <span className="text-slate-300">—</span>
          <span>باب الزوار</span>
        </div>

        <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-blue-100">
          منزل
        </span>
        <button className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:text-slate-600">
          <CaretDown className="h-4 w-4" />
        </button>

        <div className="ms-auto flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-600">
            <span>فشل الإرسال</span>
          </button>
          <span className="flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-500 ring-1 ring-red-100">
            <X className="h-3 w-3" />
            <span>فشل الإرسال</span>
          </span>
          <button className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50">
            <span>الحالات</span>
            <ChevronLeft className="h-3 w-3 rotate-90" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600 ring-1 ring-amber-200 hover:bg-amber-200">
            <Pencil className="h-3.5 w-3.5" />
          </button>
          <button className="flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-600">
            <RotateCcw className="h-3.5 w-3.5" />
            <span>إعادة</span>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}