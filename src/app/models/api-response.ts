export class ApiResponse<T> {
  constructor(public code: String, public data: T, public message: String) {
    this.code = code;
    this.data = data;
    this.message = message;
  }
}
