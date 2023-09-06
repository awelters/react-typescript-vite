import { defineConfig, loadEnv, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  const plugins:PluginOption = [
    react(), 
    legacy({
      targets: ['defaults', 'not IE 11'],
  })]

  // do development specific tasks
  if( process.env.NODE_ENV === 'development' ) {
    console.log('App title', process.env.VITE_APP_TITLE)

    // only use the basic ssl plugin if using the right script
    if( process.env.npm_lifecycle_event === 'dev-https' ) {
      plugins.push(basicSsl())
    }
  }

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: plugins
  });
}
