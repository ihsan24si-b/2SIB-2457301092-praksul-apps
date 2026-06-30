import Pertemuan4 from './pertemuan_4/Pertemuan4'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">Portal Praktikum</p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Modul Pertemuan 4
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Latihan menampilkan data JSON, search, filter, dan responsive layout dengan React + Tailwind.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#pertemuan-4"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
              >
                Buka Pertemuan 4
              </a>
            </div>
          </div>
        </header>

        <section id="pertemuan-4">
          <Pertemuan4 />
        </section>
      </main>
    </div>
  )
}

export default App
