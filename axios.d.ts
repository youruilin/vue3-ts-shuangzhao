import 'axios'

declare module 'axios' {
  export interface AxiosResponse {
    errCode?: number
    code?: number
  }
}
