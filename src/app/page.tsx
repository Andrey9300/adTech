import Footer from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import {
  Summary,
  FeaturedGuides,
  AboutSnippet,
  FeaturesArticles,
  Achievements,
} from '@/app/main'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <section className="py-12 md:py-4">
              <Summary />
            </section>
            <section className="pt-8">
              <FeaturesArticles />
            </section>
            <section className="py-8 md:py-12">
              <FeaturedGuides />
            </section>
            <section className="py-8 md:py-8 px-6 mt-12 bg-white border border-gray-200 rounded-lg">
              <Achievements />
            </section>
            <section className="py-8 md:py-12">
              <AboutSnippet />
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
