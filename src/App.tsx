import { useMotion } from './hooks/useMotion';
import { Abertura } from './components/Abertura';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Faixa } from './components/Faixa';
import { Servicos } from './components/Servicos';
import { Portfolio } from './components/Portfolio';
import { Processo } from './components/Processo';
import { CtaFinal } from './components/CtaFinal';
import { Rodape } from './components/Rodape';

export default function App() {
  useMotion();

  return (
    <>
      <Abertura />
      <div className="progresso" id="progresso" aria-hidden="true" />
      <Header />
      <main id="topo">
        <Hero />
        <Faixa />
        <Servicos />
        <Portfolio />
        <Processo />
        <CtaFinal />
      </main>
      <Rodape />
    </>
  );
}
