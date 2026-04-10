import './index.css'

function App() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-3xl shadow-[0_4px_40px_rgba(142,171,255,0.06)] border-b border-white/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6 max-w-[1440px] mx-auto font-headline tracking-tight">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 glass-panel p-1">
              <img src="/logo.png" alt="Maden Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-headline font-black tracking-tighter text-white">MADEN</span>
          </div>
          <div className="hidden md:flex gap-10 items-center">
            <a className="text-white/70 hover:text-white transition-colors duration-300" href="#">Marketing</a>
            <a className="text-white/70 hover:text-white transition-colors duration-300" href="#">Automation</a>
            <a className="text-white/70 hover:text-white transition-colors duration-300" href="#">Comercial</a>
            <a className="text-white/70 hover:text-white transition-colors duration-300" href="#">Sistemas</a>
          </div>
          <button className="bg-primary hover:bg-primary-dim text-on-primary-container px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold transition-all scale-95 active:scale-90 text-sm md:text-base">
            Contate-nos
          </button>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full pt-10 md:pt-0">
            <div className="z-10 text-center md:text-left">
              <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.1] tracking-tighter text-white mb-6 md:mb-8">
                Muito além de Marketing construímos ecossistemas&nbsp;
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-8 md:mb-10 leading-relaxed mx-auto md:mx-0">
                Unimos inteligência artificial CRM e fluxos de dados para que sua única preocupação seja o fechamento, não a operação
              </p>
              <div className="flex flex-col items-center md:items-start gap-2 mt-8 opacity-60">
                <span className="material-symbols-outlined text-primary animate-bounce text-xl">
                  keyboard_double_arrow_down
                </span>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-8xl md:text-[12rem] font-headline font-black tracking-[-0.05em] text-white/5 select-none absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 pointer-events-none">
                  MADEN
                </span>
                <div className="p-12 glass-panel border border-white/10 rounded-[2.5rem] flex flex-col items-center gap-4 transition-all duration-700 hover:border-primary/40 shadow-2xl">
                  <span className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                    MADEN
                  </span>
                  <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  <span className="text-primary/60 font-label tracking-[0.3em] uppercase text-xs font-bold">Sales Machine</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Marquee Section */}
        <section className="py-20 border-y border-white/5 overflow-hidden bg-white/[0.01] relative">
          <div className="mb-10 text-center opacity-60">
             <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-on-surface-variant">
                Algumas empresas que já confiaram em nossos serviços
             </span>
          </div>
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="flex w-max animate-marquee">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  'automatico-brasil.png',
                  'br7.png',
                  'evpc.png',
                  'ferropar.png',
                  'master.png',
                  'santos.png',
                  'south.png'
                ].map((logo, index) => (
                  <div key={index} className="mx-8 md:mx-14 flex-shrink-0 group flex items-center justify-center">
                    <img 
                      src={`/${logo}`} 
                      alt="Parceiro Maden" 
                      className="h-10 md:h-20 max-w-[180px] md:max-w-[300px] w-auto object-contain transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Resource Cards Section */}
        <section className="px-6 md:px-12 py-20 md:py-32 max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-surface-container-low p-8 md:p-12 rounded-xl border-l-4 border-primary overflow-hidden transition-all hover:bg-surface-container-high">
              <div className="relative z-10">
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block"><br /></span>
                <h3 className="font-headline font-bold text-4xl text-white mb-6">Materiais &amp; Automações Gratuitas</h3>
                <p className="text-on-surface-variant text-lg mb-10 max-w-md">Acesse nossa biblioteca de projetos e frameworks de IA prontos para implementação.</p>
                <button className="flex items-center gap-3 bg-surface-container-lowest text-white px-6 py-3 rounded-full border border-outline-variant/20 group-hover:border-primary/50 transition-all">
                  <span className="material-symbols-outlined text-primary" data-icon="folder_zip">folder_zip</span>
                  <span>Acessar Google Drive</span>
                </button>
              </div>
              <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-[12rem] text-white/[0.03] group-hover:text-primary/[0.05] transition-all" data-icon="automation">automation</span>
            </div>
            {/* Card 2 */}
            <div className="group relative bg-surface-container-low p-8 md:p-12 rounded-xl border-l-4 border-secondary overflow-hidden transition-all hover:bg-surface-container-high">
              <div className="relative z-10">
                <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 block"><br /></span>
                <h3 className="font-headline font-bold text-3xl md:text-4xl text-white mb-6">O que Fazemos ?</h3>
                <p className="text-on-surface-variant text-lg mb-10 max-w-md">Unimos o que realmente traz lucro: Oferta, Tráfego, Automação e Comercial. Criamos a infraestrutura necessária para você faturar mais com menos esforço manual</p>
                <button className="flex items-center gap-3 bg-secondary text-on-secondary px-6 py-3 rounded-full font-bold transition-all hover:brightness-110">
                  <span className="material-symbols-outlined" data-icon="explore">explore</span>
                  <span>Conhecer o método</span>
                </button>
              </div>
              <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-[12rem] text-white/[0.03] group-hover:text-secondary/[0.05] transition-all" data-icon="neurology">neurology</span>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-surface-container-lowest py-20 md:py-32">
          <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
            <div className="mb-12 md:mb-20 text-center">
              <h2 className="font-headline font-extrabold text-3xl md:text-5xl text-white mb-4">Soluções&nbsp;</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
              <div className="p-6 md:p-10 border border-outline-variant/10 rounded-xl hover:border-primary/30 transition-all group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="database">database</span>
                </div>
                <h4 className="font-headline font-bold text-2xl text-white mb-4">Estruturação de CRM &amp; Dados</h4>
                <p className="text-on-surface-variant leading-relaxed">Centralizamos sua inteligência comercial em bases sólidas e automatizadas para decisões em tempo real.</p>
              </div>
              
              <div className="p-10 border border-outline-variant/10 rounded-xl hover:border-primary/30 transition-all group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="account_tree">account_tree</span>
                </div>
                <h4 className="font-headline font-bold text-2xl text-white mb-4">Automação com n8n</h4>
                <p className="text-on-surface-variant leading-relaxed">Conectamos suas ferramentas favoritas para criar fluxos de trabalho que funcionam sozinhos 24/7.</p>
              </div>

              <div className="p-10 border border-outline-variant/10 rounded-xl hover:border-primary/30 transition-all group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="smart_toy">smart_toy</span>
                </div>
                <h4 className="font-headline font-bold text-2xl text-white mb-4">Criação de Agentes de IA</h4>
                <p className="text-on-surface-variant leading-relaxed">Desenvolvemos assistentes virtuais treinados com seus dados para atendimento e suporte especializado.</p>
              </div>

              <div className="p-10 border border-outline-variant/10 rounded-xl hover:border-primary/30 transition-all group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="conversion_path">conversion_path</span>
                </div>
                <h4 className="font-headline font-bold text-2xl text-white mb-4">Estruturação de Funil de Ponta a Ponta</h4>
                <p className="text-on-surface-variant leading-relaxed">Monitoramos e Estruturamos todas as etapas da Jornada de Compra.</p>
              </div>

              <div className="p-10 border border-outline-variant/10 rounded-xl hover:border-primary/30 transition-all group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="ads_click">ads_click</span>
                </div>
                <h4 className="font-headline font-bold text-2xl text-white mb-4">Geração de Demanda Qualificada</h4>
                <p className="text-on-surface-variant leading-relaxed">Estratégias avançadas para atrair e filtrar leads prontos para o momento da compra.</p>
              </div>

              <div className="p-10 border border-outline-variant/10 rounded-xl hover:border-primary/30 transition-all group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="groups">groups</span>
                </div>
                <h4 className="font-headline font-bold text-2xl text-white mb-4">Capacitação Comercial</h4>
                <p className="text-on-surface-variant leading-relaxed">Treinamento tático para equipes de vendas utilizando tecnologia e dados para fechar mais negócios.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Iceberg Concept Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col items-center">
          <div className="max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-surface-container-high/30 backdrop-blur-sm p-4">
            <img 
              alt="Conceito Iceberg: O que o mercado faz vs O que a Maden faz" 
              className="w-full h-auto rounded-xl filter brightness-110 contrast-105" 
              src="/iceberg.png" 
            />
          </div>
          <p className="text-on-surface-variant mt-12 text-center max-w-2xl text-lg italic">
            A maioria foca apenas na ponta do iceberg. Nós construímos toda a base invisível que sustenta o seu crescimento sustentável.
          </p>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-12 py-16 md:py-24 mb-16 md:mb-24 max-w-[1440px] mx-auto">
          <div className="bg-gradient-to-br from-primary/20 via-surface-container-high to-surface-container-lowest rounded-3xl p-8 md:p-24 text-center border border-primary/10 relative overflow-hidden">
            <div className="absolute inset-0 kinetic-bg"></div>
            <div className="relative z-10">
              <h2 className="font-headline font-extrabold text-3xl md:text-6xl text-white mb-6 md:mb-8 tracking-tighter">
                Vamos falar sobre o futuro da sua empresa?
              </h2>
              <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">
                Agende uma consultoria estratégica gratuita e descubra o potencial de automação oculto na sua operação atual.
              </p>
              <button className="bg-primary hover:bg-primary-dim text-on-primary-container px-12 py-5 rounded-full font-bold text-xl transition-all shadow-[0_20px_50px_rgba(142,171,255,0.3)] flex items-center gap-4 mx-auto">
                <span className="material-symbols-outlined" data-icon="chat">chat</span>
                WHATSAPP
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#000000] border-t border-white/5 w-full mt-12 md:mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 w-full max-w-[1440px] mx-auto font-inter text-sm">
          <div className="mb-8 md:mb-0">
            <span className="font-manrope font-black text-[#8eabff] text-xl">Maden I.A</span>
            <p className="text-white/40 mt-2">© 2024 Maden.</p>
          </div>
          <div className="flex gap-8 flex-wrap justify-center">
            <a className="text-white/40 hover:text-[#ac8aff] transition-colors" href="#">Privacidade</a>
            <a className="text-white/40 hover:text-[#ac8aff] transition-colors" href="#">Termos</a>
            <a className="text-white/40 hover:text-[#ac8aff] transition-colors" href="#">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
