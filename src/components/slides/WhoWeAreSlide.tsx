import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhoWeAreSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#f6f4ec]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0d2213]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#0d2213]/70">
            Quem é o Ciro
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#0d2213]/50">
          02 · Turismo Raiz
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0d2213] max-w-4xl leading-[1.04]">
          A Argentina autêntica, fora dos circuitos turísticos tradicionais
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg md:text-xl text-[#233d28] max-w-3xl font-normal leading-relaxed">
          Músico e artista brasileiro residente na Argentina, oferecendo viagens com alma, música e os segredos mais profundos do país.
        </p>
      </div>

      {/* 3 Core Blocks */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {/* Block 1: Quem Somos */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] transition-all flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0d2213]">
              Artista &amp; Residente
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Como brasileiro que vive na Argentina há anos, conheço a alma do país como poucos. Levo você aos lugares que nenhum guia convencional consegue alcançar.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#0d2213]/10 space-y-2 text-xs text-[#0d2213]/90 font-medium font-body">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Cultura &amp; música local</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Spots secretos &amp; underground</span>
            </div>
          </div>
        </div>

        {/* Block 2: Metodologia */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] transition-all flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0d2213]">
              Roteiros Sob Medida
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Cada roteiro é desenhado exclusivamente para o seu estilo. Se você curte bares de rock, lugares calmos, agito cultural ou paisagens intocadas, adaptamos tudo.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#0d2213]/10 space-y-2 text-xs text-[#0d2213]/90 font-medium font-body">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>100% personalizado ao seu gosto</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Flexibilidade em tempo real</span>
            </div>
          </div>
        </div>

        {/* Block 3: Abordagem */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] transition-all flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0d2213]">
              Motorista &amp; Guia
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Oferecemos tanto a criação do roteiro quanto o pacote completo com Ciro atuando como seu motorista particular e guia durante toda a estadia na Argentina.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#0d2213]/10 space-y-2 text-xs text-[#0d2213]/90 font-medium font-body">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Condução privativa segura</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Zero preocupação logística</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#0d2213]/15 flex items-center justify-between text-xs sm:text-sm text-[#0d2213]/65 font-body">
        <span>Viagens com alma, música e autenticidade na Argentina.</span>
        <span className="px-2.5 py-1 rounded-full bg-[#0d2213] text-[#c6ff4d] text-xs font-mono font-medium shadow-sm">
          Ciro Experiências
        </span>
      </div>
    </div>
  );
};
