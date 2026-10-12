'use client';

import React from 'react';

export default function BillingPage() {
  const invoices = [
    { id: 'INV-1090', patient: 'أحمد محمود', amount: '$150.00', date: '2026-10-08', status: 'مسدد' },
    { id: 'INV-1091', patient: 'سارة إبراهيم', amount: '$320.00', date: '2026-10-09', status: 'مسدد' },
    { id: 'INV-1092', patient: 'خالد عبد الله', amount: '$90.00', date: '2026-10-09', status: 'معلق' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">الفواتير والمدفوعات (Billing / Payments)</h1>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-right border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 border-b text-gray-600">
              <th className="py-3 px-4">رقم الفاتورة</th>
              <th className="py-3 px-4">المريض</th>
              <th className="py-3 px-4">المبلغ</th>
              <th className="py-3 px-4">التاريخ</th>
              <th className="py-3 px-4">حالة الدفع</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-medium">{inv.id}</td>
                <td className="py-3 px-4">{inv.patient}</td>
                <td className="py-3 px-4">{inv.amount}</td>
                <td className="py-3 px-4 text-gray-500 font-mono text-xs">{inv.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    inv.status === 'مسدد' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {inv.status}
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