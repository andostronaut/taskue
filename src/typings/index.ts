export type Task = {
  id: string
  status: string
  name: string
  description: string
}

export type Contact = {
  firstName: string
  lastName: string
  email: string
  message: string
}

export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}
