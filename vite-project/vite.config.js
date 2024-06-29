import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{//配置路径别名
      //之后在引用路径时直接使用 @ 就可以定位到src目录下
      '@':path.resolve(__dirname,'src')
    }
  }
})
