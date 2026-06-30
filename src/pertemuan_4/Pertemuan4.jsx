import { useMemo, useState } from 'react'
import FrameworkList, { getAllTags } from './FrameworkList'

function TailwindButtonExample() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Contoh Button Tailwind</h3>
      <p className="mt-2 text-sm text-slate-600">
        Berikut contoh penerapan Tailwind CSS pada sebuah button sesuai modul.
      </p>
      <button className="border m-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Click Me
      </button>
      <div className="mt-4 grid gap-2 rounded-2xl bg-white p-4 text-sm text-slate-700 ring-1 ring-slate-200">
        <p>
          <span className="font-semibold">border</span> untuk garis tepi.
        </p>
        <p>
          <span className="font-semibold">m-4</span> untuk margin.
        </p>
        <p>
          <span className="font-semibold">bg-blue-500</span> untuk latar biru.
        </p>
        <p>
          <span className="font-semibold">text-white</span> untuk teks putih.
        </p>
        <p>
          <span className="font-semibold">px-4 py-2</span> untuk padding.
        </p>
        <p>
          <span className="font-semibold">rounded</span> untuk sudut membulat.
        </p>
      </div>
    </div>
  )
}

function TailwindCategoryExamples() {
  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">Kategori Tailwind CSS</h2>
      <div className="space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-semibold text-slate-900">1. Spacing</h3>
          <p className="mt-2 text-sm text-slate-600">
            Mengatur margin dan padding. Contoh: <span className="font-semibold">m-4</span>, <span className="font-semibold">p-2</span>, <span className="font-semibold">py-3</span>.
          </p>
          <div className="mt-4 rounded-lg bg-white p-6 shadow-lg">
            <h4 className="text-base font-semibold text-slate-900">Card Title</h4>
            <p className="mt-2 text-sm text-slate-600">Ini adalah contoh penggunaan padding dan margin pada kartu.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-semibold text-slate-900">2. Typography</h3>
          <p className="mt-2 text-sm text-slate-600">
            Mengatur ukuran, ketebalan, dan warna teks. Contoh: <span className="font-semibold">text-3xl</span>, <span className="font-semibold">font-bold</span>, <span className="font-semibold">text-blue-600</span>.
          </p>
          <div className="mt-4">
            <h4 className="text-3xl font-bold text-blue-600">Tailwind Typography</h4>
            <p className="mt-2 text-gray-600 text-lg">Belajar Tailwind sangat mudah dengan kelas typography.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-semibold text-slate-900">3. Border & Radius</h3>
          <p className="mt-2 text-sm text-slate-600">
            Menambahkan batas dan sudut membulat. Contoh: <span className="font-semibold">border-2</span>, <span className="font-semibold">border-blue-500</span>, <span className="font-semibold">rounded-lg</span>.
          </p>
          <button className="mt-4 rounded-lg border-2 border-blue-500 bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
            Button Border
          </button>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-semibold text-slate-900">4. Background & Colors</h3>
          <p className="mt-2 text-sm text-slate-600">
            Mengatur warna latar dan teks. Contoh: <span className="font-semibold">bg-blue-500</span>, <span className="font-semibold">text-white</span>, <span className="font-semibold">bg-gradient-to-r</span>.
          </p>
          <div className="mt-4 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 p-5 text-white">
            <h4 className="font-semibold">Gradient Background</h4>
            <p className="mt-1 text-sm">Contoh penggunaan warna dan gradien.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-semibold text-slate-900">5. Flexbox & Grid</h3>
          <p className="mt-2 text-sm text-slate-600">
            Menyusun layout dengan Flexbox atau Grid. Contoh: <span className="font-semibold">flex</span>, <span className="font-semibold">justify-between</span>, <span className="font-semibold">grid-cols-3</span>.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-slate-900 p-4 text-center text-white">Box 1</div>
            <div className="rounded-2xl bg-slate-700 p-4 text-center text-white">Box 2</div>
            <div className="rounded-2xl bg-slate-500 p-4 text-center text-white">Box 3</div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-semibold text-slate-900">6. Shadow & Effects</h3>
          <p className="mt-2 text-sm text-slate-600">
            Menambahkan bayangan dan efek hover. Contoh: <span className="font-semibold">shadow-lg</span>, <span className="font-semibold">hover:shadow-xl</span>, <span className="font-semibold">opacity-50</span>.
          </p>
          <div className="mt-4 rounded-2xl bg-white p-5 shadow-lg transition hover:shadow-xl">
            <h4 className="text-base font-semibold text-slate-900">Hover Card</h4>
            <p className="mt-2 text-sm text-slate-600">Kartu ini menggunakan efek bayangan dan transisi hover.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResponsiveText() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        Ukuran teks ini berubah mengikuti breakpoint Tailwind. Coba resize layar untuk melihat perbedaan.
      </p>
    </div>
  )
}

function ResponsiveWidth() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="mb-4 text-sm text-slate-700">
        Kotak di bawah akan berubah lebar sesuai breakpoint.
      </p>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="rounded-xl bg-slate-200 p-4 text-center text-slate-800 md:w-1/2">
          Kolom 1
        </div>
        <div className="rounded-xl bg-slate-300 p-4 text-center text-slate-800 md:w-1/2">
          Kolom 2
        </div>
      </div>
    </div>
  )
}

function ResponsiveLayout() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="mb-4 text-sm text-slate-700">
        Pada layar kecil, kotak tampil satu kolom. Pada layar besar, layout berubah jadi grid 4 kolom.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-slate-900 p-4 text-center text-sm font-semibold text-white">Box 1</div>
        <div className="rounded-2xl bg-slate-700 p-4 text-center text-sm font-semibold text-white">Box 2</div>
        <div className="rounded-2xl bg-slate-500 p-4 text-center text-sm font-semibold text-white">Box 3</div>
        <div className="rounded-2xl bg-slate-400 p-4 text-center text-sm font-semibold text-slate-900">Box 4</div>
      </div>
    </div>
  )
}

export default function Pertemuan4() {
  const [dataForm, setDataForm] = useState({ searchTerm: '', selectedTag: '' })
  const allTags = useMemo(() => getAllTags(), [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-slate-900">Pertemuan 4 - Data JSON</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Menampilkan data JSON, search, filter, dan responsive Tailwind CSS.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">Search framework</label>
            <input
              type="text"
              name="searchTerm"
              value={dataForm.searchTerm}
              onChange={handleChange}
              placeholder="Search framework..."
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">Filter tag</label>
            <select
              name="selectedTag"
              value={dataForm.selectedTag}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            >
              {allTags.map((tag, index) => (
                <option key={index} value={tag === 'All Tags' ? '' : tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Framework List</h2>
          <FrameworkList searchTerm={dataForm.searchTerm} selectedTag={dataForm.selectedTag} />
        </div>

        <TailwindButtonExample />
        <TailwindCategoryExamples />

        <div className="grid gap-6 xl:grid-cols-3">
          <ResponsiveText />
          <ResponsiveWidth />
          <ResponsiveLayout />
        </div>
      </div>
    </section>
  )
}
