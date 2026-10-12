'use client';

import React, { useState } from 'react';

interface Transaction {
  id: number;
  type: string;
  amount: string;
  status: 'Completed' | 'Reversed';
}

interface AuditLog {
  id: number;
  targetId: number;
  action: string;
  performedBy: string;
  reason: string;
  prevStatus: string;
  newStatus: string;
  timestamp: string;
}

export default function ExceptionActionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 101, type: 'فاتورة كشف #1042', amount: '$450.00', status: 'Completed' },
    { id: 102, type: 'سند قبض Ref-88', amount: '$120.00', status: 'Completed' },
    { id: 103, type: 'صرف مستلزمات جراحية', amount: '15 عبوة', status: 'Completed' },
  ]);

  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([
    {
      id: 1,
      targetId: 99,
      action: 'إلغاء فاتورة',
      performedBy: 'Owner',
      reason: 'احتساب قيمة كشف بالخطأ مرتين لنفس المريض',
      prevStatus: 'Completed',
      newStatus: 'Reversed',
      timestamp: '2026-10-08 14:22:10',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  const handleOpenModal = (tx: Transaction) => {
    setSelectedTx(tx);
    setReason('');
    setError('');
    setIsModalOpen(true);
  };

  const handleConfirmReversal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) {
      setError('يرجى توضيح سبب التراجع بصورة مفصلة');
      return;
    }

    if (!selectedTx) return;

    // تحديث حالة المعاملة
    setTransactions((prev) =>
      prev.map((item) => (item.id === selectedTx.id ? { ...item, status: 'Reversed' } : item))
    );

    // إضافة القيد لسجل التدقيق غير القابل للتعديل
    const newLog: AuditLog = {
      id: auditLogs.length + 1,
      targetId: selectedTx.id,
      action: `إلغاء استثنائي (${selectedTx.type})`,
      performedBy: 'Owner',
      reason: reason,
      prevStatus: selectedTx.status,
      newStatus: 'Reversed',
      timestamp: new Date().toLocaleString(),
    };

    setAuditLogs([newLog, ...auditLogs]);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">الإجراءات الاستثنائية والتدقيق (Owner Exception Actions)</h1>
        <p className="text-gray-500 text-sm mt-1">
          إلغاء المعاملات الحساسة المعتمدة مع توثيق الأسباب في سجل التدقيق المالي.
        </p>
      </div>

      {/* قسم العمليات القابلة للتراجع */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-base font-semibold text-gray-800 mb-4">العمليات المؤهلة للتراجع (Audited Reversal)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-gray-600">
                <th className="py-3 px-4">رقم المعاملة</th>
                <th className="py-3 px-4">النوع / الوصف</th>
                <th className="py-3 px-4">القيمة</th>
                <th className="py-3 px-4">الحالة</th>
                <th className="py-3 px-4">الإجراء الاستثنائي</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono font-medium">#{tx.id}</td>
                  <td className="py-3 px-4">{tx.type}</td>
                  <td className="py-3 px-4">{tx.amount}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        tx.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      disabled={tx.status === 'Reversed'}
                      onClick={() => handleOpenModal(tx)}
                      className="px-3 py-1.5 bg-red-600 hover:bg-red-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-md text-xs font-medium transition"
                    >
                      Request Reversal
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* سجل التدقيق التاريخي */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-base font-semibold text-gray-800 mb-4">سجل التدقيق غير القابل للتعديل (Audit Log)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-gray-600">
                <th className="py-3 px-4">رقم القيد</th>
                <th className="py-3 px-4">رقم المعاملة</th>
                <th className="py-3 px-4">الإجراء</th>
                <th className="py-3 px-4">المنفّذ</th>
                <th className="py-3 px-4">سبب التراجع</th>
                <th className="py-3 px-4">الحالة (قبل / بعد)</th>
                <th className="py-3 px-4">التوقيت (Timestamp)</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log) => (
                <tr key={log.id} className="border-b">
                  <td className="py-3 px-4 font-mono text-gray-500">#{log.id}</td>
                  <td className="py-3 px-4 font-mono">#{log.targetId}</td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{log.action}</td>
                  <td className="py-3 px-4 text-gray-600">{log.performedBy}</td>
                  <td className="py-3 px-4 text-gray-700 max-w-xs">{log.reason}</td>
                  <td className="py-3 px-4 text-xs font-mono">
                    <span className="text-gray-500">{log.prevStatus}</span> →{' '}
                    <span className="text-red-600 font-bold">{log.newStatus}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-500 font-mono text-xs">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* نافذة إدخال سبب التراجع */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-gray-800">تأكيد عملية التراجع (Audited Reversal)</h3>
            <p className="text-xs text-red-600 leading-relaxed">
              تنبيه: هذا الإجراء استثنائي وسيتم تقييده وتوثيقه في سجل تدقيق المالك بشكل دائم وغير قابل للحذف.
            </p>

            <form onSubmit={handleConfirmReversal} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  سبب التراجع (إلزامي)
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="يرجى كتابة سبب الإلغاء أو التعديل..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
                {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition"
                >
                  تأكيد وتوثيق بالسجل
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}