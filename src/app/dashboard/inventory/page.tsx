'use client';

import React from 'react';

export default function InventoryPage() {
  const stockItems = [
    { id: 1, name: 'شاش ومستلزمات تعقيم', sku: 'ST-001', qty: 120, status: 'متوفر' },
    { id: 2, name: 'أمبولات تخدير موضعي', sku: 'AN-042', qty: 5, status: 'منخفض' },
    { id: 3, name: 'قفازات طبية قياس L', sku: 'GL-109', qty: 18, status: 'متوفر' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">إدارة المخزون الطبي (Inventory)</h1>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-right border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 border-b text-gray-600">
              <th className="py-3 px-4">اسم الصنف</th>
              <th className="py-3 px-4">رمز الصنف (SKU)</th>
              <th className="py-3 px-4">الكمية المتوفرة</th>
              <th className="py-3 px-4">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {stockItems.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-800">{item.name}</td>
                <td className="py-3 px-4 font-mono text-gray-500">{item.sku}</td>
                <td className="py-3 px-4">{item.qty}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'متوفر' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}