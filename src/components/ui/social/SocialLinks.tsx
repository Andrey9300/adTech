import GithubLink from './GithubLink'
import LinkedinLink from './LinkedinLink'

export default function SocialLinks() {
  return (
    <>
      <GithubLink />
      <LinkedinLink />
    </>
  )
}

export function SocialLinksWhite() {
  return (
    <>
      <GithubLink white={true} />
      <LinkedinLink white={true} />
    </>
  )
}
