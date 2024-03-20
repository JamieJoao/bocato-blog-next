export default function Blog({ params: { slug } }) {
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bocato Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Sumérgete en un Mundo de Dulzura y Sabor: Encuentra Recetas Irresistibles, Noticias Frescas y Todo lo Relacionado con el Encanto de Bocato.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h1>Blog! {slug}</h1>
        </div>
      </div>
    </div>
  )
}