import frameworkData from './framework.json'

function Tag({ tag }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
      {tag}
    </span>
  )
}

function FrameworkCard({ item }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
        </div>
        <a
          href={item.detail.officialWebsite}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Visit Website
        </a>
      </div>
      <div className="mt-4 space-y-1 text-sm text-slate-600">
        <p>
          <span className="font-semibold text-slate-900">Developer:</span>{' '}
          {item.detail.developer}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag, index) => (
          <Tag key={`${item.id}-${tag}-${index}`} tag={tag} />
        ))}
      </div>
    </article>
  )
}

export default function FrameworkList({ searchTerm, selectedTag }) {
  const _searchTerm = searchTerm.toLowerCase()

  const frameworks = frameworkData.frameworks.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm)

    const matchesTag =
      selectedTag === '' || framework.tags.includes(selectedTag)

    return matchesSearch && matchesTag
  })

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {frameworks.map((item) => (
        <FrameworkCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export function getAllTags() {
  const allTags = [...new Set(frameworkData.frameworks.flatMap((framework) => framework.tags))]
  return ['All Tags', ...allTags]
}
