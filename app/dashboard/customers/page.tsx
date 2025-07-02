import { fetchFilteredCustomers } from "@/app/lib/data";
import Image from "next/image";

export default async function DashboardCustomersPage() {
  const customers = await fetchFilteredCustomers("");

  return (
    <section className="p-4">
      <h1 className="text-2xl font-semibold mb-6">Registered Customers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center"
          >
            <Image
              src={customer.image_url}
              alt={`${customer.name}'s profile`}
              width={64}
              height={64}
              className="rounded-full mb-4"
            />
            <p className="font-medium text-lg">{customer.name}</p>
            <p className="text-gray-500 text-sm">{customer.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
