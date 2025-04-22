import { loadEnvConfig } from '@next/env'
 
const projectDir = process.cwd()
loadEnvConfig(projectDir)

//* This file is necessary to avoid env variables accessible on the client side