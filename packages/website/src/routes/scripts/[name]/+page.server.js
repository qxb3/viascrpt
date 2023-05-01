import { error } from '@sveltejs/kit'

let scripts = [
  {
    id: 0,
    name: 'eiv',
    description: 'DevTools in via powered by eruda',
    code: `
function hi() {
  console.log('fuck')
}
    `,
    author: {
      name: 'qxb3'
    },
    meta: {
      stars: 1000,
      comments: 356
    }
  },
  {
    id: 1,
    name: 'logger',
    description: 'Node.js logger',
    code: `
function hi() {
  console.log('fuck')
}
    `,
    author: {
      name: 'qxb3'
    },
    meta: {
      stars: 534,
      comments: 86
    }
  }
]

export function load({ params }) {
  const script = scripts.find(v => v.name.toLowerCase() === params.name.toLowerCase())

  if (!script)
    throw error(404, 'Cannot find script')

  return script
}
