import { createFileRoute } from "@tanstack/react-router";
import { OrdersPage } from "@/components/orders/OrdersPage";

export const Route = createFileRoute("/orders")({
  head: () => ({
    meta: [
      { title: "الطلبات — EcoSmart" },
      { name: "description", content: "إدارة وتأكيد وتتبع طلبات متجرك" },
      { property: "og:title", content: "الطلبات — EcoSmart" },
      { property: "og:description", content: "إدارة وتأكيد وتتبع طلبات متجرك" },
    ],
  }),
  component: () => <OrdersPage />,
});