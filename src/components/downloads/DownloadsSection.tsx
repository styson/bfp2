import { useState, useEffect } from 'react';
import { FileDownload, Info, Close } from '@mui/icons-material';
import { downloads } from '../../data/downloads';
import type { Download } from '../types';

const BASE = '/files/';

// ── Helpers ────────────────────────────────────────────────────────────────────

const EXT_STYLES: Record<string, string> = {
  PDF:  'bg-[#c0392b]/20 text-[#e8806a]',
  ZIP:  'bg-[#1a6fa8]/20 text-[#5dade2]',
  VMDX: 'bg-[#7d3c98]/20 text-[#c39bd3]',
  XLSX: 'bg-[#1e8449]/20 text-[#58d68d]',
  XLS:  'bg-[#1e8449]/20 text-[#58d68d]',
  DOCX: 'bg-[#1a5276]/20 text-[#7fb3d3]',
  PNG:  'bg-[#784212]/20 text-[#f0b27a]',
  JPG:  'bg-[#784212]/20 text-[#f0b27a]',
  HTM:  'bg-[#145a32]/20 text-[#6fcf97]',
  GIF:  'bg-[#784212]/20 text-[#f0b27a]',
};

function ExtBadge({ page }: { page: string }) {
  const ext = page.split('.').pop()?.toUpperCase() ?? '';
  const cls = EXT_STYLES[ext] ?? 'bg-[#f0b429]/10 text-[#f0b429]/80';
  return (
    <span className={`inline-block text-[9px] font-bold font-sans px-1.5 py-0.5 uppercase tracking-wider ${cls}`}>
      {ext || 'FILE'}
    </span>
  );
}

function DownloadLink({ item, onOpenInstructions }: { item: Download; onOpenInstructions: () => void }) {
  if (item.instructionsModal) {
    return (
      <button
        onClick={onOpenInstructions}
        className="group flex items-start gap-2 py-2 px-3 bg-[var(--c-deep)] border border-[#f0b429]/10 hover:border-[#f0b429]/40 transition-[border-color] duration-200 text-left w-full cursor-pointer"
      >
        <Info
          fontSize="small"
          className="text-[#f0b429]/50 group-hover:text-[#f0b429] transition-colors duration-200 mt-0.5 shrink-0"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[var(--c-text)] text-sm font-sans transition-colors duration-200 leading-snug">
            {item.name}
          </p>
          {item.description && (
            <div
              className="text-[var(--c-text)]/80 text-xs font-sans mt-0.5 leading-snug [&_p]:mb-0"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          )}
        </div>
      </button>
    );
  }

  if (!item.page) return null;
  return (
    <a
      href={BASE + item.page}
      download
      className="group flex items-start gap-2 py-2 px-3 bg-[var(--c-deep)] border border-[#f0b429]/10 hover:border-[#f0b429]/40 transition-[border-color] duration-200"
    >
      <FileDownload
        fontSize="small"
        className="text-[#f0b429]/50 group-hover:text-[#f0b429] transition-colors duration-200 mt-0.5 shrink-0"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[var(--c-text)] group-hover:text-[var(--c-text)] text-sm font-sans transition-colors duration-200 leading-snug">
          {item.name}
        </p>
        {item.description && (
          <div
            className="text-[var(--c-text)]/80 text-xs font-sans mt-0.5 leading-snug [&_p]:mb-0"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        )}
      </div>
      <ExtBadge page={item.page} />
    </a>
  );
}

function InstructionsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 bg-[var(--c-bg)] border border-[#f0b429]/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--c-text)]/40 hover:text-[var(--c-text)] transition-colors duration-200"
          aria-label="Close"
        >
          <Close fontSize="small" />
        </button>

        <h2 className="text-xl uppercase text-[#f0b429] mb-1 pr-8">Directions for using the Overlays in VASL</h2>
        <h3 className="text-sm text-[var(--c-text)]/80 font-sans mb-4">Instructions for ITR overlay placement</h3>

        <div className="text-[var(--c-text)]/80 font-sans text-sm leading-relaxed space-y-4">
          <p>
            Drop these into your VASL/boards/overlays folder and VASL should recognize them.
          </p>
          <p>
            Here's how to enter the overlay info into VASL's "Add Overlays" dialog (case does not matter):
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="/files/fact.jpg" alt="Factory" className="max-w-[200px]" />
              <span className="text-[var(--c-text)]/80 text-xs">– need to enter both hex1 and hex2 for the factory</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/files/debris.jpg" alt="Debris" className="max-w-[200px]" />
              <span className="text-[var(--c-text)]/80 text-xs">– only need to enter one hex for the debris overlay</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/files/rc.jpg" alt="Rubbled City" className="max-w-[200px]" />
              <span className="text-[var(--c-text)]/80 text-xs">– only need to enter one hex for the rubbled city because its hex grid is set to start at I1</span>
            </div>
          </div>

          <h3 className="text-base uppercase text-[var(--c-text)] mt-4 mb-2">Instructions for overlay placement</h3>

          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-1.5 px-2 bg-[var(--c-deep)] border border-[#f0b429]/20 text-[var(--c-text)]/80 uppercase text-xs tracking-wider">Name</th>
                <th className="text-left py-1.5 px-2 bg-[var(--c-deep)] border border-[#f0b429]/20 text-[var(--c-text)]/80 uppercase text-xs tracking-wider">VASL Name</th>
                <th className="text-left py-1.5 px-2 bg-[var(--c-deep)] border border-[#f0b429]/20 text-[var(--c-text)]/80 uppercase text-xs tracking-wider">hex1-hex2</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['BFP-06a', 'bfpo6',   'i2-none'],
                ['BFPH1',   'bfphi',   'k1-none'],
                ['BFPH2',   'bfphii',  '(as per SSR)'],
                ['BFPV1',   'bfpvi',   'k1-none'],
                ['BFPV2',   'bfpvii',  '(as per SSR)'],
                ['BFPV3',   'bfpviii', 'k1-none'],
              ].map(([name, vasl, hex]) => (
                <tr key={name} className="border-b border-[#f0b429]/10">
                  <td className="py-1.5 px-2 border border-[#f0b429]/10 text-[var(--c-text)]/80">{name}</td>
                  <td className="py-1.5 px-2 border border-[#f0b429]/10 text-[var(--c-text)]/80">{vasl}</td>
                  <td className="py-1.5 px-2 border border-[#f0b429]/10 text-[var(--c-text)]/80">{hex}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-[var(--c-text)]/80 text-xs">
            For BFP-06a, the VASL Name to enter into the "Add Overlay" dialog box is beta-foxtrot-papa-OSCAR-6 (bfpo6, all lower case) NOT the number ZERO-SIX!!! And yes, you only specify one hex for this overlay now - unlike a previous version where you had to specify i2-j2.
          </p>
          <p className="text-[var(--c-text)]/80 text-xs">
            To use BFPC-1, the entry for the Add Overlay dialog is: bfpci #bdnum, hex1 = i1, hex2 = blank (no need to enter anything).
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Section partials ────────────────────────────────────────────────────────────

function VaslBoardsSection({ items }: { items: Download[] }) {
  return (
    <div className="mb-14">
      <h3 className="text-2xl uppercase text-[var(--c-text)] mb-2 pb-2 border-b border-[#f0b429]/20">
        VASL Board Downloads
      </h3>
      <p className="text-sm text-[var(--c-text)]/40 font-sans mb-6">
        Board files for use with VASL (Virtual Advanced Squad Leader)
      </p>
      <div className="space-y-6">
        {items.map((product) => {
          const activeFiles = product.files?.filter((f) => f.active !== false) ?? [];
          if (activeFiles.length === 0) return null;
          return (
            <div key={product.name}>
              <p className="text-lg uppercase tracking-widest text-[var(--c-text)]/90 font-sans mb-2">
                {product.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeFiles.map((file) => (
                  <a
                    key={file.name}
                    href={BASE + file.page}
                    download
                    className="group flex items-center gap-1.5 px-3 py-1.5 bg-[var(--c-deep)] border border-[#f0b429]/10 hover:border-[#f0b429]/40 transition-[border-color] duration-200"
                  >
                    <FileDownload
                      fontSize="small"
                      className="text-[#f0b429]/40 group-hover:text-[#f0b429] transition-colors duration-200"
                    />
                    <span className="text-sm text-[var(--c-text)]/90 group-hover:text-[var(--c-text)] font-sans transition-colors duration-200">
                      {file.name}
                    </span>
                    {file.page && <ExtBadge page={file.page} />}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GroupSection({ item, onOpenInstructions }: { item: Download; onOpenInstructions: () => void }) {
  const activeFiles = item.files?.filter((f) => f.active !== false) ?? [];
  if (activeFiles.length === 0) return null;

  const LABEL: Record<string, string> = {
    extensions: 'Counter Extensions',
    plano:      'Plano Labels',
    overlays:   'VASL Overlays',
    maps:       'Printable Maps',
    armory:     'BFP Armory',
  };

  return (
    <div className="mb-10">
      <h3 className="text-2xl uppercase text-[var(--c-text)] mb-6 pb-2 border-b border-[#f0b429]/20">
        {LABEL[item.group ?? ''] ?? item.name}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {activeFiles.map((file) => (
          <DownloadLink key={file.name + (file.page ?? 'modal')} item={file} onOpenInstructions={onOpenInstructions} />
        ))}
      </div>
    </div>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────────

export const DownloadsSection = () => {
  const [instructionsOpen, setInstructionsOpen] = useState(false);

  const vaslItems    = downloads.filter((d) => d.group === 'vasl');
  const otherGrouped = downloads.filter((d) => !!d.files?.length && d.group !== 'vasl');
  const flat         = downloads.filter((d) => !d.files?.length && !!d.page);

  return (
    <section id="downloads" className="bg-[var(--c-bg)] py-16 border-t border-[#f0b429]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl uppercase text-[#f0b429] mb-4">Downloads</h2>
          <p className="text-[var(--c-text)]/80 max-w-2xl mx-auto font-sans">
            Rules, errata, VASL boards, overlays, and additional resources for all BFP products
          </p>
        </div>

        {/* VASL Boards */}
        <VaslBoardsSection items={vaslItems} />

        {/* Other grouped sections */}
        {otherGrouped.map((item) => (
          <GroupSection key={item.group ?? item.name} item={item} onOpenInstructions={() => setInstructionsOpen(true)} />
        ))}

        {/* Flat / individual files */}
        {flat.length > 0 && (
          <div>
            <h3 className="text-2xl uppercase text-[var(--c-text)] mb-6 pb-2 border-b border-[#f0b429]/20">
              Rules &amp; Errata
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {flat.map((item) => (
                <DownloadLink key={item.name + item.page} item={item} onOpenInstructions={() => setInstructionsOpen(true)} />
              ))}
            </div>
          </div>
        )}
      </div>

      <InstructionsModal isOpen={instructionsOpen} onClose={() => setInstructionsOpen(false)} />
    </section>
  );
};
