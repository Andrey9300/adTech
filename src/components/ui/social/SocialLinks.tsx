import GithubLink from './GithubLink'
import LinkedinLink from './LinkedinLink'
import LeetCodeLink from '@/components/ui/social/LeetCodeLink'

export default function SocialLinks() {
  return (
    <>
      <GithubLink />
      <LinkedinLink />
      <LeetCodeLink />
    </>
  )
}

export function SocialLinksWhite() {
  return (
    <>
      <GithubLink white={true} />
      <LinkedinLink white={true} />
      <LeetCodeLink white={true} />
    </>
  )
}
