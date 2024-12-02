import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest'

const defaults = createDefaultPreset()

const config: JestConfigWithTsJest = {
  ...defaults,
  setupFiles: ['dotenv/config'],
}

export default config
