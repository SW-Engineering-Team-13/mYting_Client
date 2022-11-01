/* 
    - 애플리케이션 진입점
    - Vue 앱 초기화
    - index.html 파일에서 어떤 HTML 엘리먼트를 앱에 붙일지 표현
    - 전역 컴포넌트 또는 부가적인 Vue 라이브러리 등록 담당
*/
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
