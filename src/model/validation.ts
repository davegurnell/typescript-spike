export type ValidationResult = {
  level: 'error' | 'warning',
  message: string,
  field: string,
}

export type Validated<A> = {
  value: A,
  results: Array<ValidationResult>,
}
