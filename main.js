const LinksSocialMedia = {
  github: 'alexbuffon',
  youtube: 'UCWDvR4Izu5bp4nWxUOA5CIQ',
  facebook: 'alex.buffon.31',
  instagram: 'alex.buffon2',
  twitter: 'AlexBuffon9'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
    })
}
getGitHubProfileInfos()
