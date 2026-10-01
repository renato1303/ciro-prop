import React from 'react';
import { Youtube, Eye, FileText, Compass, ArrowRight } from 'lucide-react';

export const ParallelTrackSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#07080a]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Frente Paralela · Estruturação Orgânica
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          14 · Frente Paralela
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#c6ff4d] mb-2 font-mono">
          <Youtube className="w-3.5 h-3.5" /> Canal do YouTube
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] max-w-4xl leading-[1.04]">
          YouTube: o canal que trabalha por você
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg md:text-xl text-[#f6f4ec]/75 max-w-3xl font-normal leading-relaxed">
          Enquanto o tráfego pago gera reservas, estruturamos o canal que o Ciro já tem pra ele crescer com mais retenção e direção.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {/* Pillar 1: Retenção */}
        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#c6ff4d]/10 text-[#c6ff4d] flex items-center justify-center mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#f6f4ec]">
              Retenção
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              Análise do que mantém (e do que perde) o espectador, com ajustes de abertura, ritmo e formato dos vídeos.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#c6ff4d] font-mono font-semibold flex items-center gap-1.5">
            <span>Mais tempo de tela</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Pillar 2: Roteiros */}
        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#c6ff4d]/10 text-[#c6ff4d] flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#f6f4ec]">
              Roteiros
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              Apoio na estrutura e nos roteiros dos vídeos, com a voz e a história do Ciro no centro.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#c6ff4d] font-mono font-semibold flex items-center gap-1.5">
            <span>Conteúdo com identidade</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Pillar 3: Direcionamento do Canal */}
        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#c6ff4d]/10 text-[#c6ff4d] flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#f6f4ec]">
              Direcionamento do Canal
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              Definição de linha editorial, temas e frequência, conectando o canal ao Te Levo Lá e aos próximos projetos.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#c6ff4d] font-mono font-semibold flex items-center gap-1.5">
            <span>Canal com propósito</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Uma audiência que cresce em paralelo à operação de tráfego</span>
        <span className="text-[#c6ff4d]">Crescimento Orgânico</span>
      </div>
    </div>
  );
};
