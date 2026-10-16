import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Database, Mail, Phone, Calendar, Download, RefreshCw, FileSpreadsheet, FileJson, Clock } from 'lucide-react';
import { getInquiries, ConsultationInquiry } from '../utils/db';

interface InquiryDatabaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryDatabaseModal({ isOpen, onClose }: InquiryDatabaseModalProps) {
  const [inquiries, setInquiries] = useState<ConsultationInquiry[]>([]);
  const [filter, setFilter] = useState<'all' | 'consultation' | 'internship'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const loadData = () => {
    setInquiries(getInquiries());
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = inquiries
    .filter(i => filter === 'all' || i.type === filter)
    .filter(i => 
      i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      i.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (i.serviceOrArea && i.serviceOrArea.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inquiries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `nexivd_inquiries_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) return;
    const headers = ['ID', 'Type', 'Name', 'Email', 'Phone', 'Company_or_College', 'Service_or_Area', 'Graduation_Year', 'Preferred_Time', 'Created_At', 'Status', 'Message'];
    const rows = inquiries.map(item => [
      item.id,
      item.type,
      `"${(item.name || '').replace(/"/g, '""')}"`,
      `"${(item.email || '').replace(/"/g, '""')}"`,
      `"${(item.phone || '').replace(/"/g, '""')}"`,
      `"${(item.companyOrCollege || '').replace(/"/g, '""')}"`,
      `"${(item.serviceOrArea || '').replace(/"/g, '""')}"`,
      `"${(item.graduationYear || '').replace(/"/g, '""')}"`,
      `"${(item.preferredTime || '').replace(/"/g, '""')}"`,
      item.createdAt,
      item.status,
      `"${(item.message || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", encodedUri);
    downloadAnchor.setAttribute("download", `nexivd_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-6 flex flex-col max-h-[85vh]"
      >
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold">NexIVD Inquiries & Application Database</h3>
              <p className="text-xs text-slate-400">
                Logged consultation requests & academic submissions (Download CSV/JSON anytime)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
              title="Download CSV for Excel"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              Download CSV
            </button>
            <button
              onClick={handleExportJSON}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold flex items-center gap-1.5 transition-colors"
              title="Download JSON"
            >
              <FileJson className="w-3.5 h-3.5" />
              JSON
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            {(['all', 'consultation', 'internship'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors ${
                  filter === f
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {f} ({inquiries.filter(i => f === 'all' || i.type === f).length})
              </button>
            ))}
            <button
              onClick={loadData}
              className="p-1.5 text-slate-400 hover:text-primary transition-colors"
              title="Refresh records"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search by name, email, or service..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-highlight"
            />
          </div>
        </div>

        {/* List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-grow bg-slate-100/50">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              No inquiries found matching your filters.
            </div>
          ) : (
            filtered.map((inq) => (
              <div
                key={inq.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-highlight/30 transition-all space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {inq.id}
                    </span>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      inq.type === 'consultation' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-teal-100 text-teal-800'
                    }`}>
                      {inq.type}
                    </span>
                    <span className="font-bold text-primary text-base">
                      {inq.name}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {new Date(inq.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-highlight shrink-0" />
                    <a href={`mailto:${inq.email}`} className="hover:underline">{inq.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-highlight shrink-0" />
                    <a href={`tel:${inq.phone}`} className="hover:underline">{inq.phone}</a>
                  </div>
                  {inq.companyOrCollege && (
                    <div className="text-slate-500 font-medium">
                      Org/College: <strong className="text-slate-700">{inq.companyOrCollege}</strong>
                    </div>
                  )}
                  {inq.serviceOrArea && (
                    <div className="text-slate-500 font-medium">
                      Requirement: <strong className="text-highlight">{inq.serviceOrArea}</strong>
                    </div>
                  )}
                </div>

                <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-700 leading-relaxed">
                  {inq.message}
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                  <span>
                    Routed to: {inq.type === 'consultation' ? 'info@nexivdlabs.com' : 'info@nexivdlabs.com / nexivdlabs@gmail.com'}
                  </span>
                  <a
                    href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    Quick WhatsApp Follow-up &rarr;
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Tip: Access anytime via keyboard shortcut <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono">Ctrl+Shift+D</kbd> or <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono">#admin-db</kbd></span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
