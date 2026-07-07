import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search, MoreVertical, Package } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "المنتجات — EcoSmart" },
      { name: "description", content: "إدارة منتجات متجرك ومخزونك" },
      { property: "og:title", content: "المنتجات — EcoSmart" },
      { property: "og:description", content: "إدارة منتجات متجرك ومخزونك" },
    ],
  }),
  component: ProductsPage,
});

const products = [
  { name: "ساعة ذكية", sku: "SW-001", price: "8,500", stock: 42, status: "متوفر", sales: 82 },
  { name: "سماعات لاسلكية", sku: "HP-014", price: "4,200", stock: 15, status: "متوفر", sales: 64 },
  { name: "حقيبة جلدية", sku: "BG-201", price: "6,800", stock: 8, status: "قليل", sales: 45 },
  { name: "عطر رجالي", sku: "PF-089", price: "3,500", stock: 0, status: "نافد", sales: 30 },
  { name: "منتج تجريبي", sku: "TEST-01", price: "2,500", stock: 100, status: "متوفر", sales: 12 },
];

const statusCls: Record<string, string> = {
  "متوفر": "bg-emerald-50 text-emerald-600 ring-emerald-100",
  "قليل": "bg-amber-50 text-amber-600 ring-amber-100",
  "نافد": "bg-red-50 text-red-600 ring-red-100",
};

function ProductsPage() {
  return (
    <div className="p-4 md:p-8 space-y-6" dir="rtl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">المنتجات</h1>
          <p className="text-sm text-slate-500 mt-1">إدارة كل المنتجات في متجرك</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600">
          <Plus className="h-4 w-4" />
          <span>إضافة منتج</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "إجمالي المنتجات", value: 42, color: "text-blue-600" },
          { label: "متوفر", value: 34, color: "text-emerald-600" },
          { label: "قليل المخزون", value: 6, color: "text-amber-600" },
          { label: "نافد", value: 2, color: "text-red-600" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="text-xs text-slate-500">{s.label}</div>
            <div className={`mt-1 text-2xl font-bold ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
        <div className="flex flex-wrap items-center gap-3 p-4 border-b border-slate-100">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="بحث عن منتج..."
              className="w-full rounded-xl bg-slate-50 py-2 pe-10 ps-3 text-sm outline-none ring-1 ring-slate-200 focus:ring-blue-300"
            />
          </div>
          <select className="rounded-xl bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-200 focus:ring-blue-300 outline-none">
            <option>كل الحالات</option>
            <option>متوفر</option>
            <option>قليل</option>
            <option>نافد</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-5 py-3 text-start font-medium">المنتج</th>
                <th className="px-5 py-3 text-start font-medium">SKU</th>
                <th className="px-5 py-3 text-start font-medium">السعر</th>
                <th className="px-5 py-3 text-start font-medium">المخزون</th>
                <th className="px-5 py-3 text-start font-medium">المبيعات</th>
                <th className="px-5 py-3 text-start font-medium">الحالة</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((p) => (
                <tr key={p.sku} className="hover:bg-slate-50/50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Package className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-slate-800">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-slate-500 font-mono text-xs">{p.sku}</td>
                  <td className="px-5 py-3 font-medium text-slate-800">{p.price} د.ج</td>
                  <td className="px-5 py-3 text-slate-700">{p.stock}</td>
                  <td className="px-5 py-3 text-slate-700">{p.sales}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ring-1 ${statusCls[p.status]}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}