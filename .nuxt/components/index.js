export { default as AddImage } from '../../components/AddImage.vue'
export { default as Gallery } from '../../components/Gallery.vue'
export { default as Header } from '../../components/Header.vue'
export { default as ImageModal } from '../../components/ImageModal.vue'
export { default as Components } from '../../components/index.js'

export const LazyAddImage = import('../../components/AddImage.vue' /* webpackChunkName: "components/AddImage" */).then(c => c.default || c)
export const LazyGallery = import('../../components/Gallery.vue' /* webpackChunkName: "components/Gallery" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyImageModal = import('../../components/ImageModal.vue' /* webpackChunkName: "components/ImageModal" */).then(c => c.default || c)
export const LazyComponents = import('../../components/index.js' /* webpackChunkName: "components/index" */).then(c => c.default || c)
