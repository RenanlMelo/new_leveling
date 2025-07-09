import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <main className="mt-10 px-6">
        <a
          href="/"
          className="flex items-center text-lg py-2 pl-2 pr-4 w-fit rounded-full mb-4 text-white underline decoration underline-offset-4 decoration-transparent hover:decoration-white transition"
        >
          <ChevronLeft className="inline" stroke="#aaa" /> Home
        </a>

        <h1 className="uppercase font-bold text-4xl lg:text-5xl bg-gradient-to-r from-white to-[#737373] bg-clip-text text-transparent w-fit mb-4">
          About leveling
        </h1>

        <section className="flex flex-col gap-y-6 mb-12 leading-relaxed tracking-wide text-gray-200 max-w-3xl">
          <h2 className="text-primaryL font-medium text-2xl">
            Automatize seus processos
          </h2>
          <p>
            Reduza tarefas manuais, aumente a produtividade e evite erros
            operacionais com nossas soluções de RPA (Automação de Processos
            Robóticos).
          </p>
          <p>
            Atuamos automatizando tarefas repetitivas como: geração de
            relatórios, preenchimento de sistemas, controle de estoque, análise
            de dados, entre outros.
          </p>
          <p>
            Nossa missão é liberar tempo da sua equipe para o que realmente
            importa, tornando sua operação mais inteligente e eficiente.
          </p>
        </section>

        <h2 className="text-primaryL font-medium text-2xl mb-6">
          Principais Serviços
        </h2>
        <section className="grid gap-6 mb-16">
          <div className="bg-[#141414] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Automação de Sistemas
            </h3>
            <p className="text-gray-300">
              Robôs que preenchem formulários, extraem dados e interagem com
              softwares como ERPs e CRMs.
            </p>
          </div>
          <div className="bg-[#141414] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Geração de Relatórios
            </h3>
            <p className="text-gray-300">
              Automatize relatórios financeiros, operacionais e de indicadores
              com envio automático.
            </p>
          </div>
          <div className="bg-[#141414] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Integrações de Sistemas
            </h3>
            <p className="text-gray-300">
              Conectamos ferramentas diferentes sem necessidade de APIs, apenas
              com automação inteligente.
            </p>
          </div>
        </section>
        <div className="mt-16 bg-gradient-to-r from-primaryL to-primary text-white p-8 rounded-xl text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Pronto para automatizar?</h2>
          <p className="mb-4">
            Entre em contato conosco e descubra como a RPA pode transformar seu
            negócio.
          </p>
          <a
            href="https://whatsa.me/5515996839690/?t=Hello,%20could%20you%20please%20provide%20more%20information%20about%20your%20RPA%20services?"
            className="inline-block bg-white text-primary font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition mb-10"
          >
            Fale conosco
          </a>
        </div>
      </main>
    </>
  );
}
