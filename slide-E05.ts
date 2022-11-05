//@ts-nocheck
import { Prisma } from '../prisma/client'

const myExtension = Prisma.createExtension({
  model: {
    $allModels: {
      getClass<T>(this: T): new () => T {
        return class {} as any
      }
    }
  }
})

export default myExtension