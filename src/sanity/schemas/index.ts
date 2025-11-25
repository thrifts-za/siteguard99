import { singletonTypes } from './singletons'
import { documentTypes } from './documents'
import { objectTypes } from './objects'

export const schemaTypes = [...singletonTypes, ...documentTypes, ...objectTypes]
