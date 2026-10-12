'use client';

import React from 'react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">التحليلات ومؤشرات الأداء (Analytics / KPIs)</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-sm text-gray-500 font-medium">معدل نمو الحجوزات</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">+18.4%</p>
          <span className="text-xs text-gray-400 mt-1 block">مقارنة بالشهر الماضي</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-sm text-gray-500 font-medium">إجمالي المقبوضات</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">$54,200</p>
          <span className="text-xs text-gray-400 mt-1 block">خلال الـ 30 يوماً الماضية</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-sm text-gray-500 font-medium">متوسط تكلفة الكشف</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">$75.00</p>
          <span className="text-xs text-gray-400 mt-1 block">شامل الإجراءات الملحقة</span>
        </div>
      </div>
    </div>
  );
}