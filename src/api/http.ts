import { defaultHeaders } from './core'

export type Method =
  "GET" |
  "POST" |
  "PUT" |
  "DELETE" |
  "PATCH" |
  "HEAD" |
  "OPTIONS"

export type Headers = {
  [name: string]: string
}

type GetRequestOptions = {
  method: "GET",
  url: string,
  headers?: Headers
}

type PostRequestOptions<A> = {
  method: "POST",
  url: string,
  headers?: Headers,
  body: A
}

type PutRequestOptions<A>  = {
  method: "PUT",
  url: string,
  headers?: Headers,
  body: A
}

type DeleteRequestOptions = {
  method: "DELETE",
  url: string,
  headers?: Headers
}

type HeadRequestOptions = {
  method: "HEAD",
  url: string,
  headers?: Headers
}

type OptionsRequestOptions = {
  method: "OPTIONS",
  url: string,
  headers?: Headers
}

export type RequestOptions<A> =
  GetRequestOptions |
  PostRequestOptions<A> |
  PutRequestOptions<A> |
  DeleteRequestOptions |
  HeadRequestOptions |
  OptionsRequestOptions

export function get<A>(url: string): Promise<A> {
  return request<any, A>({ method: "GET", url, headers: defaultHeaders })
}

export function post<A, B>(url: string, body: A): Promise<B> {
  return request<A, B>({ method: "POST", url, body, headers: defaultHeaders })
}

export function put<A, B>(url: string, body: A): Promise<B> {
  return request<A, B>({ method: "PUT", url, body, headers: defaultHeaders })
}

export function del<A>(url: string): Promise<A> {
  return request<any, A>({ method: "DELETE", url, headers: defaultHeaders })
}

export function head<A>(url: string): Promise<A> {
  return request<any, A>({ method: "HEAD", url, headers: defaultHeaders })
}

export function options<A>(url: string): Promise<A> {
  return request<any, A>({ method: "OPTIONS", url })
}

export function request<A, B>(options: RequestOptions<A>): Promise<B> {
  const { method, url, headers } = options
  switch(options.method) {
    case 'POST':
    case 'PUT':
      const body = JSON.stringify(options.body, null, 0)
      return fetch(url, { method, headers, body })
        .then(
          response => response.json().then((json: any) => Promise.resolve(json as B)),
          response => response.json().then((json: any) => Promise.reject(json))
        )
    default:
      return fetch(url, { method, headers })
        .then(response => null as any)
  }
}
