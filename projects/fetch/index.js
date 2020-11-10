const getBtn = document.getElementById('get')
const postBtn = document.getElementById('post')
const putOrPatch = document.getElementById('put-patch')
const deleteBtn = document.getElementById('delete')
const container = document.getElementById('container')
const simRequestBtn = document.getElementById('sim-request')
const customBtn = document.getElementById('custom-header') 
const transformResponseBtn = document.getElementById('transform-response')
const transformRequestBtn = document.getElementById('transform-request')
console.log(transformRequestBtn)
getBtn.addEventListener('click',getData)
postBtn.addEventListener('click',addData)
putOrPatch.addEventListener('click',updateData)
deleteBtn.addEventListener('click',removeData)
simRequestBtn.addEventListener('click',simRequestData)
customBtn.addEventListener('click', customHeaders)
transformResponseBtn.addEventListener('click', transformResponse)
// transformRequestBtn.addEventListener('click' tranform)

const url = 'https://jsonplaceholder.typicode.com/albums'

// GET REQUEST
function getData() {
    axios({
        method:'get',
        url:url
    })
    .then(res=>displayOutput(res))
    .catch(err=>displayOutput(err))
  }
  
  // POST REQUEST
  function addData() {
    axios.post(url,{
        userId: '2',
        title: 'bing bang bong'
    })
    .then(res=>displayOutput(res))
    .catch(err=>displayOutput(err))
  }
  
  // PUT/PATCH REQUEST
  function updateData() {
      axios.patch(url,{
        title: 'bong bing bang'
    })
    .then(res=>displayOutput(res))
    .catch(err=>displayOutput(err))
}

// DELETE REQUEST
function removeData() {
    axios.delete(url)
    .then(res=>displayOutput(res))
    .catch(err=>console.error(err))
}

//simultaneous requst
function simRequestData(){
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/albums?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
    ])
    .then(axios.spread((albums,photos)=>displayOutput(photos)))
    .catch(err=>console.error(err))
}

function customHeaders(){
    const config = {
        headers:{
            'content-type': 'application/json',
            Authorization: 'sometoken'
        }
    }

    axios.post(url,{
        userId: '2',
        title: 'bing bang bong'
    }, config)
    .then(res=>displayOutput(res))
    .catch(err=>displayOutput(err))
    }

function transformResponse(){
    const options = {
        method: 'post',
        url: url,
        data: {
            title: 'lol'
        },
        transformResponse:  axios.defaults.transformResponse.concat(data=>{
            data.title = data.title.toUpperCase()
            return data;
        })
    }
    axios(options).then(res=>displayOutput(res))
}

  axios.interceptors.request.use(
      config=>{
          console.log(
              `${config.method.toUpperCase()} requst sent to ${
                  config.url}`
          )
          return config;
      }
  )

  const displayOutput=(res)=>{
      container.innerHTML=
      `
      <h5>Status: ${res.status}</h5>
      <div class="head-content-container">
      <h1>Header</h1>
      <section id="header">
          <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </section>
  </div>
  <div class="head-content-container">
      <h1>Data</h1>
      <section id="data">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </section>
  </div>
  <div class="head-content-container">
      <h1>Config</h1>
      <section id="config">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </section>
  </div>
      `
  }