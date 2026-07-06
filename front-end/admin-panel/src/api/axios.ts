import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {

  const token = localStorage.getItem("access_token")

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// let isRefreshing = false
// let queue: any[] = []

// const processQueue = (error: any, token: string | null = null) => {
//   queue.forEach((p) => {
//     if (error) {
//       p.reject(error)
//     } else {
//       p.resolve(token)
//     }
//   })

//   queue = []
// }

// const logout = () => {
//   localStorage.removeItem("access_token")
//   localStorage.removeItem("refresh_token")
//   window.location.href = "/login"
// }

// api.interceptors.response.use(
//   (response) => response,

//   async (error) => {
//     const originalRequest = error.config

//     if (error.response?.status === 401 && !originalRequest._retry) {

//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           queue.push({ resolve, reject })
//         }).then((token) => {
//           originalRequest.headers.Authorization = `Bearer ${token}`
//           return api(originalRequest)
//         })
//       }

//       originalRequest._retry = true
//       isRefreshing = true

//       try {
//         const refresh = localStorage.getItem("refresh_token")

//         const res = await axios.post(
//           `${import.meta.env.VITE_API_URL}/token/refresh/`,
//           {
//             refresh,
//           }
//         )

//         const newAccess = res.data.access

//         localStorage.setItem("access_token", newAccess)

//         api.defaults.headers.common.Authorization = `Bearer ${newAccess}`

//         processQueue(null, newAccess)

//         return api(originalRequest)

//       } catch (err) {

//         processQueue(err, null)
//         logout()

//         return Promise.reject(err)
//       } finally {
//         isRefreshing = false
//       }
//     }

//     return Promise.reject(error)
//   }
// )


export default api