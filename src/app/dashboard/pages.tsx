'use client';

import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const kpiStats = [
    { title: 'إجمالي إيرادات اليوم', value: '$3,450.00', change: '+12%', color: 'text-green-600' },
    { title: 'الكشوفات المكتملة', value: '42 مريض', change: '+5%', color: 'text-blue-600' },
    { title: 'تنبيهات المخزون الحرج', value: '3 أصناف', change: 'تحتاج طلب', color: 'text-amber-600' },
    { title: 'طلبات التراجع والتدقيق', value: '1 معلق', change: 'استثنائي', color: 'text-red-600' },
  ];

  const quickLinks = [
    {
      title: 'التحليلات والمؤشرات (Analytics)',
      desc: 'متابعة مؤشرات الأداء، النمو المالي، وتقارير العيادة الشهرية.',
      href: '/dashboard/analytics',
      badge: 'KPIs',
      btnColor: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
    },
    {
      title: 'إدارة المخزون الطبي (Inventory)',
      desc: 'مراقبة المستلزمات الطبية، الكميات المتاحة، والتنبيهات.',
      href: '/dashboard/inventory',
      badge: 'Stock',
      btnColor: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
    },
    {
      title: 'الفواتير والمدفوعات (Billing)',
      desc: 'سجل المدفوعات اليومية، الفواتير المعلقة، وسندات القبض.',
      href: '/dashboard/billing',
      badge: 'Finance',
      btnColor: 'bg-purple-50 text-purple-700 hover:bg-purple-100',
    },
    {
      title: 'الإجراءات الاستثنائية والتدقيق (Exceptions)',
      desc: 'صلاحيات إلغاء العمليات الحساسة وسجل التدقيق غير القابل للتعديل.',
      href: '/dashboard/exceptions',
      badge: 'Audit Log',
      btnColor: 'bg-red-50 text-red-700 hover:bg-red-100',
    },
  ];

  return (
    <div className="space-y-8 text-right" dir="rtl">
      {/* الترويسة */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">لوحة تحكم المالك (Owner Dashboard)</h1>
        <p className="text-gray-500 text-sm mt-1">
          نظرة شاملة وسريعة على كافة عمليات العيادة والأقسام الإدارية والمالية.
        </p>
      </div>

      {/* بطاقات الإحصائيات السريعة (KPI Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {kpiStats.map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
            <span className="text-xs font-medium text-gray-500">{stat.title}</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
              <span className={`text-xs font-semibold ${stat.color}`}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* بطاقات الأقسام والتنقل السريع */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">الأقسام الرئيسية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {quickLinks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-gray-300 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>

              <div>
                <Link
                  href={item.href}
                  className={`inline-block px-4 py-2 rounded-lg text-sm font-medium transition ${item.btnColor}`}
                >
                  فتح القسم ←
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}