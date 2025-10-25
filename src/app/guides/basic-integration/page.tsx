import { Article } from '@/components/layout/article/Article'

export default function BasicIntegration() {
  return (
    <Article
      title="Basic integration"
      description="How to integrate GAM, amazon and prebid"
    >
      <iframe
        src="http://localhost:3000/demo/basic-integration"
        width="100%"
        height="500px"
      />
    </Article>
  )
}
