import { ref } from 'vue'

export const usePresentation = () => {
  const isProjectorMode = ref(false)
  const isFullscreen = ref(false)

  const toggleProjectorMode = () => {
    isProjectorMode.value = !isProjectorMode.value
    // Increase base font size when in projector mode for better readability
    if (typeof document !== 'undefined') {
      if (isProjectorMode.value) {
        document.documentElement.style.fontSize = '24px' // larger base size
      } else {
        document.documentElement.style.fontSize = '16px' // default base size
      }
    }
  }

  const toggleFullscreen = () => {
    if (typeof document === 'undefined') return
    
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        isFullscreen.value = true
      }).catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          isFullscreen.value = false
        })
      }
    }
  }

  return {
    isProjectorMode,
    isFullscreen,
    toggleProjectorMode,
    toggleFullscreen
  }
}
