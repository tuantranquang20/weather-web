import axios from 'axios'
function createAxios () {
  // AsyncStorage.setItem('token', '773DE1FE9732F26F7552BC921CBE347E')
  var axiosInstant = axios.create()
  axiosInstant.defaults.baseURL = 'http://api.weatherstack.com/'
  axiosInstant.defaults.timeout = 20000
  axiosInstant.defaults.headers = { 'Content-Type': 'application/json' }

  axiosInstant.interceptors.request.use(
    async config => {
      //   config.headers.token = await AsyncStorage.getItem('token')
      return config
    },
    error => Promise.reject(error)
  )

  axiosInstant.interceptors.response.use(response => {
    if (response.data && response.data.code === 403) {
      setTimeout(() => {
        // alert('Thông báo', I18n.t('relogin'))
      }, 100)
    } else if (response.data && response.data.status !== 1) {
      setTimeout(() => {
        // alert('Thông báo', response.data.message)
      }, 100)
    }
    return response
  })
  return axiosInstant
}

export const getAxios = createAxios()

/* Support function */
function handleResult (api) {
  return api.then(res => {
    if (res.data.success === false) {
      return Promise.reject(new Error('Co loi xay ra'))
    }
    return Promise.resolve(res.data)
  })
}

export const getWeatherCurrent = (city) => {
  return handleResult(
    getAxios.get(`current?access_key=6386648da08ce61a3309469c882e36af&query=${city || 'Ha Noi'}`)
  )
}
