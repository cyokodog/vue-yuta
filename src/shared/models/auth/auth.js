export class Auth {
  static unspecified () {
    return new Auth()
  }

  constructor (user) {
    this.user = user
  }

  get isAuthed () {
    return !!this.user
  }

  get displayName () {
    return this.user.displayName
  }

  get photoURL () {
    return this.user.photoURL
  }
}
