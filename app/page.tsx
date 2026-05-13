export default function AICOOFullProductPage() {
  const modules = [
    {
      icon: "📧",
      title: "AI Mail Manager",
      desc: "Analizuje maile, rozpoznaje intencje, tworzy zadania, priorytetyzuje sprawy i przygotowuje odpowiedzi.",
    },
    {
      icon: "✅",
      title: "AI Task Control",
      desc: "Tworzy zadania z maili i dokumentów, przypisuje osoby, pilnuje terminów i raportuje opóźnienia.",
    },
    {
      icon: "💰",
      title: "AI Finance Monitor",
      desc: "Monitoruje płatności, zaległości, cashflow i generuje alerty finansowe dla właściciela.",
    },
    {
      icon: "📄",
      title: "AI Document Flow",
      desc: "Odczytuje faktury, umowy i dokumenty, klasyfikuje pliki oraz przekazuje je do właściwego procesu.",
    },
    {
      icon: "⚖️",
      title: "AI Compliance Control",
      desc: "Pilnuje checklist, terminów, procedur i dokumentów wymaganych w firmie.",
    },
    {
      icon: "📊",
      title: "AI Owner Report",
      desc: "Codzienny raport właściciela: co działa, co się opóźnia, gdzie firma traci pieniądze i czas.",
    },
  ]

  const industries = [
    ["Kancelarie", "Terminy procesowe, intake klientów, dokumenty, statusy spraw i komunikacja."],
    ["Biura rachunkowe", "Faktury, maile od klientów, dokumenty, przypomnienia i raportowanie."],
    ["Transport i logistyka", "Zlecenia, dokumenty przewozowe, płatności, statusy i operacje."],
    ["Budownictwo", "Umowy, harmonogramy, podwykonawcy, faktury, terminy i zgłoszenia."],
    ["Nieruchomości", "Leady, oferty, dokumenty, klienci, zadania i proces sprzedaży."],
    ["Usługi B2B", "Obsługa zapytań, CRM, faktury, zadania, follow-upy i raporty."],
  ]

  const workflow = [
    ["01", "Sygnał z firmy", "AI odbiera mail, dokument, fakturę, zapytanie klienta albo informację o opóźnieniu."],
    ["02", "Analiza i decyzja", "System rozpoznaje typ sprawy, priorytet, termin i sugeruje następny krok."],
    ["03", "Automatyczne zadanie", "AI zakłada zadanie, przypisuje osobę odpowiedzialną i dodaje checklistę."],
    ["04", "Monitoring realizacji", "System pilnuje terminów, przypomina zespołowi i wykrywa ryzyka."],
    ["05", "Raport właściciela", "Codzienny raport pokazuje priorytety, opóźnienia, koszty i decyzje do podjęcia."],
  ]

  const faqs = [
    ["Czy AI COO zastępuje ludzi?", "Nie. System przejmuje powtarzalne czynności administracyjne i daje zespołowi większą kontrolę nad pracą."],
    ["Czy to jest chatbot?", "Nie. Chatbot tylko odpowiada. AI COO analizuje procesy, tworzy zadania, pilnuje terminów i raportuje problemy."],
    ["Czy trzeba zmieniać obecne systemy?", "Nie na start. MVP może działać na mailu, Google Workspace, Outlook, Notion, Airtable, Make lub CRM klienta."],
    ["Ile trwa pierwsze wdrożenie?", "Pierwszą wersję można uruchomić w 14–30 dni po audycie procesów."],
  ]

  return (
    <main className="min-h-screen bg-[#050505] text-white scroll-smooth">
      <section
        id="dashboard"
        className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.20),_transparent_34%),radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_32%)]"
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <nav className="flex items-center justify-between mb-24">
            <a href="#dashboard" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400 text-black flex items-center justify-center font-black text-lg">
                AI
              </div>
              <div>
                <div className="font-black text-xl">AI COO</div>
                <div className="text-xs text-zinc-400">Operations Intelligence Platform</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8 text-sm text-zinc-300">
              <a href="#problem" className="hover:text-cyan-300 transition-colors">Problem</a>
              <a href="#moduly" className="hover:text-cyan-300 transition-colors">Moduły</a>
              <a href="#dashboard" className="hover:text-cyan-300 transition-colors">Dashboard</a>
              <a href="#wdrozenie" className="hover:text-cyan-300 transition-colors">Wdrożenie</a>
              <a href="#cennik" className="hover:text-cyan-300 transition-colors">Cennik</a>
              <a href="#faq" className="hover:text-cyan-300 transition-colors">FAQ</a>
            </div>

            <a
              href="#kontakt"
              className="bg-white text-black px-5 py-3 rounded-2xl font-black hover:scale-105 transition-transform"
            >
              Umów demo
            </a>
          </nav>

          <div className="grid lg:grid-cols-2 gap-14 items-center pb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-cyan-300 mb-7">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Wirtualny dyrektor operacyjny dla firm 5–50 osób
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-7">
                AI COO, który pilnuje operacji Twojej firmy 24/7.
              </h1>

              <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mb-9">
                System dla właścicieli małych firm, który porządkuje maile, zadania, dokumenty,
                płatności, terminy i raporty — bez zatrudniania kolejnego managera operacyjnego.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#dashboard"
                  className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform"
                >
                  Zobacz demo systemu
                </a>
                <a
                  href="#cennik"
                  className="border border-white/15 px-8 py-4 rounded-2xl font-bold hover:bg-white/5 transition-colors"
                >
                  Zobacz ofertę
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-2xl">
                <div className="border border-white/10 rounded-2xl p-4 bg-white/[0.03]">
                  <div className="text-3xl font-black">40%</div>
                  <div className="text-xs text-zinc-400 mt-1">mniej pracy ręcznej</div>
                </div>
                <div className="border border-white/10 rounded-2xl p-4 bg-white/[0.03]">
                  <div className="text-3xl font-black">24/7</div>
                  <div className="text-xs text-zinc-400 mt-1">monitoring operacji</div>
                </div>
                <div className="border border-white/10 rounded-2xl p-4 bg-white/[0.03]">
                  <div className="text-3xl font-black">30 dni</div>
                  <div className="text-xs text-zinc-400 mt-1">pierwsze wdrożenie</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-[2rem] p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div>
                  <div className="font-bold">Live Operations Dashboard</div>
                  <div className="text-sm text-zinc-500">Firma: Demo Sp. z o.o.</div>
                </div>
                <div className="bg-emerald-400/10 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold">
                  AI ACTIVE
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-white/[0.04] rounded-3xl p-5 border border-white/10">
                  <div className="text-zinc-500 text-sm">Zadania dziś</div>
                  <div className="text-4xl font-black mt-2">124</div>
                  <div className="text-xs text-emerald-300 mt-2">+18 automatycznie</div>
                </div>
                <div className="bg-white/[0.04] rounded-3xl p-5 border border-white/10">
                  <div className="text-zinc-500 text-sm">Ryzyka</div>
                  <div className="text-4xl font-black mt-2">7</div>
                  <div className="text-xs text-yellow-300 mt-2">3 wymagają decyzji</div>
                </div>
                <div className="bg-white/[0.04] rounded-3xl p-5 border border-white/10">
                  <div className="text-zinc-500 text-sm">Zaoszczędzony czas</div>
                  <div className="text-4xl font-black mt-2">46h</div>
                  <div className="text-xs text-cyan-300 mt-2">ten tydzień</div>
                </div>
                <div className="bg-cyan-400 text-black rounded-3xl p-5">
                  <div className="text-sm font-bold">Alert COO</div>
                  <div className="text-xl font-black mt-2 leading-tight">Cashflow spadnie za 14 dni</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  ["Nowe zapytanie klienta", "AI utworzył zadanie i przypisał handlowca", "98%", "W toku"],
                  ["Faktura po terminie", "Wysłano przypomnienie i alert do właściciela", "99%", "Pilne"],
                  ["Umowa do akceptacji", "AI przygotował checklistę ryzyk", "94%", "Do decyzji"],
                  ["Raport tygodniowy", "Wygenerowano podsumowanie operacyjne", "100%", "Gotowe"],
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 gap-3 items-center bg-white/[0.035] border border-white/10 rounded-2xl p-4 text-sm">
                    <div className="col-span-4 font-semibold">{row[0]}</div>
                    <div className="col-span-5 text-zinc-400">{row[1]}</div>
                    <div className="col-span-1 text-cyan-300 font-bold">{row[2]}</div>
                    <div className="col-span-2 text-right">
                      <span className="bg-white/10 rounded-full px-3 py-1 text-xs">{row[3]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-bold mb-3">Problem</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Małe firmy nie przegrywają przez brak pracy. Przegrywają przez chaos operacyjny.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Właściciel firmy często pełni jednocześnie rolę handlowca, managera, kontrolera jakości,
              windykatora, koordynatora i administratora. AI COO porządkuje te operacje w jednym systemie.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Zadania giną w mailach",
              "Brak kontroli nad terminami",
              "Właściciel gasi pożary",
              "Zespół nie raportuje statusów",
              "Faktury i płatności są pilnowane ręcznie",
              "Nie wiadomo, gdzie firma traci czas",
            ].map((p) => (
              <div key={p} className="bg-zinc-950 border border-white/10 rounded-3xl p-5 text-zinc-300">
                <div className="text-red-400 text-2xl mb-3">✕</div>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="moduly" className="max-w-7xl mx-auto px-6 pb-20 scroll-mt-10">
        <div className="mb-10">
          <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-bold mb-3">Moduły</p>
          <h2 className="text-4xl md:text-5xl font-black">Jeden system. Sześć funkcji operacyjnych.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {modules.map((m) => (
            <div key={m.title} className="bg-zinc-950 border border-white/10 rounded-[2rem] p-7 hover:border-cyan-400/40 transition-colors">
              <div className="text-5xl mb-6">{m.icon}</div>
              <h3 className="text-2xl font-black mb-4">{m.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="wdrozenie" className="max-w-7xl mx-auto px-6 pb-20 scroll-mt-10">
        <div className="bg-white text-black rounded-[2.5rem] p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm font-black text-zinc-500 mb-4">Jak działa</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Od chaosu w firmie do jednego centrum dowodzenia.
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-8">
                AI COO nie jest chatbotem. To warstwa operacyjna nad skrzynką mailową, dokumentami,
                zadaniami i finansami. System obserwuje firmę, wykrywa problemy i podpowiada decyzje.
              </p>
              <a href="#kontakt" className="inline-block bg-black text-white px-8 py-4 rounded-2xl font-black">
                Umów audyt operacyjny
              </a>
            </div>

            <div className="space-y-4">
              {workflow.map((s) => (
                <div key={s[0]} className="flex gap-5 bg-zinc-100 rounded-3xl p-5">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-black text-white flex items-center justify-center font-black">
                    {s[0]}
                  </div>
                  <div>
                    <div className="font-black text-xl mb-1">{s[1]}</div>
                    <div className="text-zinc-600">{s[2]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="branze" className="max-w-7xl mx-auto px-6 pb-20 scroll-mt-10">
        <div className="mb-10">
          <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-bold mb-3">Branże</p>
          <h2 className="text-4xl md:text-5xl font-black">Najlepsze firmy na start sprzedaży</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((b) => (
            <div key={b[0]} className="bg-zinc-950 border border-white/10 rounded-[2rem] p-8">
              <h3 className="text-3xl font-black mb-4">{b[0]}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">{b[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-zinc-950 border border-white/10 rounded-[2rem] p-8">
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-bold mb-3">Bezpieczeństwo</p>
            <h2 className="text-4xl font-black mb-6">AI COO działa jako warstwa wspierająca, nie zastępuje decyzji zarządu.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              System może działać na danych testowych, ograniczonych uprawnieniach i z zatwierdzaniem przez człowieka.
              Każde wdrożenie powinno mieć jasne zasady dostępu, logi działań i procedurę akceptacji.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Human-in-the-loop",
                "Ograniczone dostępy",
                "Historia działań",
                "Zatwierdzanie decyzji",
              ].map((s) => (
                <div key={s} className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">✓ {s}</div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-[2rem] p-8">
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-bold mb-3">Wdrożenie MVP</p>
            <h2 className="text-4xl font-black mb-6">Pierwsza wersja w 14–30 dni.</h2>
            <div className="space-y-4">
              {[
                ["Tydzień 1", "Audyt procesów, maili, dokumentów i zadań."],
                ["Tydzień 2", "Konfiguracja AI Mail Manager i AI Task Control."],
                ["Tydzień 3", "Dashboard właściciela, raporty i alerty."],
                ["Tydzień 4", "Testy, szkolenie zespołu i poprawki."],
              ].map((w) => (
                <div key={w[0]} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
                  <div className="font-black text-xl mb-1">{w[0]}</div>
                  <div className="text-zinc-400">{w[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cennik" className="max-w-7xl mx-auto px-6 pb-20 scroll-mt-10">
        <div className="mb-10">
          <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-bold mb-3">Cennik</p>
          <h2 className="text-4xl md:text-5xl font-black">Sprzedaż w trzech krokach</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-950 border border-white/10 rounded-[2rem] p-8">
            <div className="text-zinc-400 mb-2">Audyt operacyjny</div>
            <div className="text-4xl font-black mb-5">2 500–5 000 zł</div>
            <p className="text-zinc-400 mb-8">Mapa procesów, strat czasu, ryzyk i automatyzacji.</p>
            <a href="#kontakt" className="block text-center w-full border border-white/15 rounded-2xl py-4 font-bold">
              Zamów audyt
            </a>
          </div>

          <div className="bg-cyan-400 text-black rounded-[2rem] p-8 scale-105 shadow-2xl">
            <div className="font-bold mb-2">Wdrożenie AI COO</div>
            <div className="text-4xl font-black mb-5">10–50 tys. zł</div>
            <p className="mb-8">Konfiguracja systemu, integracje, dashboard, automatyzacje i szkolenie.</p>
            <a href="#kontakt" className="block text-center w-full bg-black text-white rounded-2xl py-4 font-black">
              Umów wdrożenie
            </a>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-[2rem] p-8">
            <div className="text-zinc-400 mb-2">Abonament COO</div>
            <div className="text-4xl font-black mb-5">2 000–10 000 zł/mies.</div>
            <p className="text-zinc-400 mb-8">Monitoring, support, aktualizacje, raporty i rozwój automatyzacji.</p>
            <a href="#kontakt" className="block text-center w-full border border-white/15 rounded-2xl py-4 font-bold">
              Zobacz zakres
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="max-w-5xl mx-auto px-6 pb-20 scroll-mt-10">
        <div className="text-center mb-10">
          <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-bold mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black">Najczęstsze pytania klientów</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f[0]} className="bg-zinc-950 border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-black mb-3">{f[0]}</h3>
              <p className="text-zinc-400 leading-relaxed">{f[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="max-w-7xl mx-auto px-6 pb-24 scroll-mt-10">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-600 rounded-[3rem] p-10 md:p-16 text-black text-center">
          <p className="uppercase tracking-[0.3em] text-sm font-black mb-5">AI COO dla małych firm</p>
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Zatrudnij AI COO zamiast kolejnego administratora.
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Zacznij od audytu. W 7 dni pokażemy, gdzie Twoja firma traci czas, pieniądze i kontrolę.
          </p>
          <a
            href="mailto:marcin.matyja86@gmail.com?subject=AI COO - demo&body=Dzień dobry, proszę o kontakt w sprawie AI COO."
            className="inline-block bg-black text-white px-10 py-5 rounded-2xl font-black hover:scale-105 transition-transform"
          >
            Umów bezpłatną rozmowę
          </a>
        </div>
      </section>
    </main>
  )
}