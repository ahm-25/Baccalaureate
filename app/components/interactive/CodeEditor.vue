<template>
  <div class="code-editor-container bg-[#121212] rounded-3xl border border-gray-800/50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col h-full font-mono relative group">
    <!-- Header -->
    <div class="bg-[#1a1a1a]/95 backdrop-blur-md border-b border-gray-800/80 px-4 py-3 flex items-center justify-between z-10">
      <div class="flex items-center gap-2.5">
        <span class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></span>
        <span class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></span>
        <span class="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></span>
        <span class="ml-4 text-xs font-bold text-gray-500 font-sans tracking-wider">script.js</span>
      </div>
      <div class="flex gap-2">
        <button
          @click="resetCode"
          class="text-gray-500 hover:text-gray-300 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors text-sm flex items-center gap-1 font-sans font-bold"
          title="إعادة التعيين"
        >
          <RotateCcw class="w-4 h-4" /> <span class="hidden sm:inline">إعادة ضبط</span>
        </button>
        <button
          @click="runCode"
          class="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-5 py-2 rounded-xl transition-all text-sm font-black flex items-center gap-2 shadow-lg shadow-green-900/20 hover:shadow-green-500/40 hover:-translate-y-0.5 font-sans"
        >
          <Play class="w-4 h-4 fill-current" /> تشغيل
        </button>
      </div>
    </div>

    <!-- Editor Body. Forced LTR: the page is RTL, but code is not. -->
    <div class="relative flex-1 flex overflow-hidden bg-[#121212] cursor-text" dir="ltr" @click="focusEditor">

      <!-- Line Numbers -->
      <div class="py-4 px-3 bg-[#121212] border-r border-gray-800/50 text-gray-600 text-right select-none font-mono text-lg leading-relaxed min-w-[2.5rem]">
        <div v-for="n in lineCount" :key="n">{{ n }}</div>
      </div>

      <!-- Editor Canvas -->
      <div class="relative flex-1 overflow-auto custom-scrollbar">
        <!-- Syntax Highlighted Background -->
        <pre
          class="absolute inset-0 p-4 m-0 font-mono text-lg leading-relaxed text-gray-300 pointer-events-none whitespace-pre overflow-hidden"
          dir="ltr"
          aria-hidden="true"
        ><code v-html="highlightedCode"></code></pre>

        <!-- Invisible Textarea -->
        <textarea
          ref="textareaRef"
          v-model="code"
          @keydown="handleKeydown"
          @input="handleInput"
          @scroll="syncScroll"
          spellcheck="false"
          autocapitalize="off"
          autocomplete="off"
          autocorrect="off"
          class="absolute inset-0 p-4 m-0 font-mono text-lg leading-relaxed text-transparent bg-transparent caret-white resize-none outline-none whitespace-pre overflow-auto custom-scrollbar"
          dir="ltr"
          placeholder="// اكتب الكود هنا..."
        ></textarea>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { Play, RotateCcw } from 'lucide-vue-next'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'run'])

const code = ref(props.modelValue)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

// Sync from prop
watch(() => props.modelValue, (newVal) => {
  if (code.value !== newVal) {
    code.value = newVal
  }
})

// Sync to prop
const handleInput = () => {
  emit('update:modelValue', code.value)
}

const lineCount = computed(() => {
  return (code.value.match(/\n/g) || []).length + 1
})

const focusEditor = () => {
  textareaRef.value?.focus()
}

const resetCode = () => {
  code.value = ''
  emit('update:modelValue', '')
  focusEditor()
}

const runCode = () => {
  emit('run', code.value)
}

const syncScroll = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  const pre = target.previousElementSibling as HTMLElement
  if (pre) {
    pre.scrollTop = target.scrollTop
    pre.scrollLeft = target.scrollLeft
  }
}

// --- Bracket / quote pairing ---

const PAIRS: Record<string, string> = { '(': ')', '{': '}', '[': ']' }
const QUOTES = ['"', "'"]
const CLOSERS = [')', '}', ']']

const setCode = (next: string, selStart: number, selEnd: number) => {
  code.value = next
  emit('update:modelValue', next)
  nextTick(() => {
    const target = textareaRef.value
    if (!target) return
    target.selectionStart = selStart
    target.selectionEnd = selEnd
  })
}

const handleKeydown = (e: KeyboardEvent) => {
  const target = e.target as HTMLTextAreaElement
  const start = target.selectionStart
  const end = target.selectionEnd

  // Run on Ctrl+Enter or Cmd+Enter
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault()
    runCode()
    return
  }

  if (e.ctrlKey || e.metaKey || e.altKey) return

  // Tab indents by two spaces
  if (e.key === 'Tab') {
    e.preventDefault()
    setCode(code.value.slice(0, start) + '  ' + code.value.slice(end), start + 2, start + 2)
    return
  }

  // Typing the closing character that was auto-inserted just steps over it,
  // so writing console.log("Hi") by hand does not end up as ("Hi"")).
  if (
    start === end &&
    (CLOSERS.includes(e.key) || QUOTES.includes(e.key)) &&
    code.value[start] === e.key
  ) {
    e.preventDefault()
    setCode(code.value, start + 1, start + 1)
    return
  }

  // Backspace between an empty pair removes both halves
  if (e.key === 'Backspace' && start === end && start > 0) {
    const before = code.value[start - 1] ?? ''
    const after = code.value[start] ?? ''
    const closes = PAIRS[before] ?? (QUOTES.includes(before) ? before : null)
    if (closes && after === closes) {
      e.preventDefault()
      setCode(code.value.slice(0, start - 1) + code.value.slice(start + 1), start - 1, start - 1)
      return
    }
  }

  const closing = PAIRS[e.key] ?? (QUOTES.includes(e.key) ? e.key : null)
  if (closing) {
    e.preventDefault()
    const selected = code.value.slice(start, end)
    // With a selection, wrap it instead of replacing it.
    setCode(
      code.value.slice(0, start) + e.key + selected + closing + code.value.slice(end),
      start + 1,
      start + 1 + selected.length
    )
  }
}

// --- Syntax highlighting ---

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// One pass over the source. Chained .replace() calls cannot work here: a later
// rule matches the `=` and `-` inside the class attributes an earlier rule just
// wrote, which shreds the markup into visible tag soup.
const TOKEN_PATTERN =
  /(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')|\b(let|const|var|function|return|if|else|for|while|true|false|null|undefined)\b|\b(console)\b|\b(log|error|warn)\b|\b(\d+(?:\.\d+)?)\b|([+\-*/=<>!%]+)/g

const TOKEN_CLASSES = [
  'text-gray-500 italic',      // comment
  'text-green-400',            // string
  'text-purple-400 font-bold', // keyword
  'text-blue-400',             // console
  'text-yellow-200',           // console method
  'text-orange-400',           // number
  'text-gray-100'              // operator
]

const highlightedCode = computed(() => {
  const source = code.value
  let html = ''
  let cursor = 0
  let match: RegExpExecArray | null

  TOKEN_PATTERN.lastIndex = 0
  while ((match = TOKEN_PATTERN.exec(source)) !== null) {
    html += escapeHtml(source.slice(cursor, match.index))
    const group = match.slice(1).findIndex(g => g !== undefined)
    html += `<span class="${TOKEN_CLASSES[group]}">${escapeHtml(match[0])}</span>`
    cursor = match.index + match[0].length
  }
  html += escapeHtml(source.slice(cursor))

  return html || ' ' // keep the line height when the editor is empty
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
