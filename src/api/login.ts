export type LoginRequest = {
  email: string,
  password: string
}

export type LoginResponse = {
  token: string,
  email: string
}

const loginUrl = 'https://demo.cartographer.io/api/v1/auth/login'

const headers = { 'Content-Type': 'application/json' }

export const login = (request: LoginRequest): Promise<LoginResponse> =>
  fetch(loginUrl, {
    method: 'POST',
    body: JSON.stringify(request, null, 0),
    headers: headers
  })
  .then(response => response.json())
  .then((json: any) => {
    // Type safety? What type safety?
    return (json._type == "validated" && json.errors.length == 0)
      ? Promise.resolve({
          token: json.value.token,
          email: json.value.effective.email
        })
      : Promise.reject(`Oops! Something went wrong: ${json.errors.map((error: any) => error.message).join("; ")}`)
  })
