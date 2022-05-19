function getFetch(url, callback) {
  const headers = {
      Authorization: 'KakaoAK ad1eb3ae6a7731c9d17a6c0f88a5fed6',
  }

  fetch(url, {headers})
      .then(response => response.json())
      .then(data => callback(data))
}

// const url = `https://dapi.kakao.com/v2/search/web?query=#query&page=#pageNum`
const $result = document.querySelector('#result')
const $query = document.querySelector('[name="query"]')
const $searchForm = document.querySelector('#searchForm')
const $moreBtn = document.querySelector('#moreBtn')
let pageNum = 1

function search(page) {
  const query = $query.value

  // const searchUrl = url.replace('#query', query)
  const searchUrl = `https://dapi.kakao.com/v2/search/web?query=${query}&page=${page}`

  getFetch(searchUrl, data => {
      const {documents} = data
      const result = documents.map(document => {
          return document.contents
      })

      $result.innerHTML += result.join('<hr/>')
  })
}

function init() {
  if ($result.innerHTML === '') {
      $moreBtn.style.visibility = 'hidden'
  }

  $searchForm.addEventListener('submit', e => {
      e.preventDefault()
      $result.innerHTML = ''
      pageNum = 1
      search(pageNum)
      $moreBtn.style.visibility = 'visible'
  })

  $moreBtn.addEventListener('click', e => {
      e.preventDefault()
      $result.innerHTML += `<hr/>`
      pageNum += 1
      search(pageNum)
  })
}

init()