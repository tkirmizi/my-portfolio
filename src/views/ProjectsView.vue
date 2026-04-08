<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import ContactCard from '../components/Contact.vue'
import { projects } from '../data/projects'

const isContactOpen = ref(false)
const isResumeOpen = ref(false)

function openContact() {
  isContactOpen.value = true
}

function closeContact() {
  isContactOpen.value = false
}

function openResume() {
  isResumeOpen.value = true
}

function closeResume() {
  isResumeOpen.value = false
}

function onKeyDown(event) {
  if (event.key === 'Escape') {
    closeContact()
    closeResume()
  }
}

onMounted(() => window.addEventListener('keydown', onKeyDown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeyDown))

const sortedProjects = computed(() => [...projects].sort((a, b) => Number(b.year) - Number(a.year)))

function cardClass(index) {
  const pattern = [
    'lg:col-span-5',
    'lg:col-span-3',
    'lg:col-span-4',
    'lg:col-span-4',
    'lg:col-span-4',
    'lg:col-span-4',
  ]
  return pattern[index % pattern.length]
}

function mediaClass() {
  return 'h-48'
}

function handleProjectMove(event) {
  const element = event.currentTarget

  if (!element) return

  const rect = element.getBoundingClientRect()
  const offsetX = event.clientX - rect.left
  const offsetY = event.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateY = ((offsetX - centerX) / centerX) * 4
  const rotateX = ((centerY - offsetY) / centerY) * 4
  const shiftX = ((offsetX - centerX) / centerX) * 8
  const shiftY = ((offsetY - centerY) / centerY) * 8

  element.style.setProperty('--tile-rotate-x', `${rotateX.toFixed(2)}deg`)
  element.style.setProperty('--tile-rotate-y', `${rotateY.toFixed(2)}deg`)
  element.style.setProperty('--media-shift-x', `${shiftX.toFixed(2)}px`)
  element.style.setProperty('--media-shift-y', `${shiftY.toFixed(2)}px`)
}

function resetProjectTile(event) {
  const element = event.currentTarget

  if (!element) return

  element.style.setProperty('--tile-rotate-x', '0deg')
  element.style.setProperty('--tile-rotate-y', '0deg')
  element.style.setProperty('--media-shift-x', '0px')
  element.style.setProperty('--media-shift-y', '0px')
}

function projectInitials(title) {
  return title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
}

function stackIcons(project) {
  const pool = []

  if (project.tags.includes('C++')) pool.push('C++')
  if (project.tags.includes('C')) pool.push('C')
  if (project.tags.includes('Docker')) pool.push('D')
  if (project.tags.includes('Networking') || project.tags.includes('Sockets')) pool.push('N')
  if (project.tags.includes('Graphics') || project.tags.includes('Game')) pool.push('G')
  if (project.tags.includes('Real-time')) pool.push('R')
  if (project.tags.includes('Unix') || project.tags.includes('Processes')) pool.push('U')

  if (pool.length === 0) pool.push('S')

  return pool.slice(0, 3)
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-ink text-white">
    <div class="pointer-events-none fixed inset-0 -z-10 bg-mesh"></div>

    <header class="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <RouterLink to="/" class="text-lg font-semibold tracking-tight">Taha Kirmizioglu</RouterLink>
        <ul class="flex items-center gap-6 text-sm text-white/80">
          <li>
            <RouterLink to="/projects" class="cursor-pointer transition hover:text-white">Projects</RouterLink>
          </li>
          <li>
            <button type="button" class="cursor-pointer transition hover:text-white" @click="openResume">Cv</button>
          </li>
          <li>
            <button
              type="button"
              class="cursor-pointer rounded-xl bg-cyan-300 p-1 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
              @click="openContact"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-1 max-w-6xl mx-auto w-full px-6 py-16">
      <div class="mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-cyan-300 md:text-4xl">Projects</h1>
        </div>
        <p class="text-sm text-white/60">{{ sortedProjects.length }} repositories</p>
      </div>

      <section class="grid gap-5 lg:grid-cols-12">
        <a
          v-for="(project, index) in sortedProjects"
          :key="project.id"
          :href="project.repoUrl"
          target="_blank"
          rel="noreferrer"
          class="project-tile group overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03]"
          :class="cardClass(index)"
          @pointermove="handleProjectMove"
          @pointerleave="resetProjectTile"
        >
          <div class="relative overflow-hidden border-b border-white/10" :class="mediaClass()">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="project-media h-full w-full object-cover"
            />
            <div
              v-else
              class="project-placeholder flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.3),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.24),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.26),transparent_60%),#0c1424]"
            >
              <span class="text-4xl font-bold tracking-wider text-white/70">{{ projectInitials(project.title) }}</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/20 to-transparent"></div>
            <div class="project-glow absolute inset-0"></div>
          </div>

          <div class="p-5">
            <div class="flex items-start justify-between gap-3">
              <h2 class="text-xl font-semibold tracking-tight text-white">{{ project.title }}</h2>
              <span class="rounded-lg border border-white/15 px-2 py-1 text-xs text-white/60">{{ project.year }}</span>
            </div>

            <p class="project-desc mt-3 text-sm leading-7 text-white/75">{{ project.description }}</p>

            <div class="mt-4 flex items-center gap-2">
              <span
                v-for="icon in stackIcons(project)"
                :key="`${project.id}-icon-${icon}`"
                class="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-2 text-[0.65rem] font-semibold text-white/75"
              >
                {{ icon }}
              </span>
            </div>

            <div class="mt-5 flex items-center justify-between">
              <span class="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/80">View repository</span>
              <span class="text-cyan-200 transition group-hover:translate-x-1">↗</span>
            </div>
          </div>
        </a>
      </section>
    </main>

    <footer id="contact" class="border-t border-white/10">
      <div class="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <p class="text-sm text-white/60">© 2026 Taha</p>
        <div class="flex gap-5 text-sm text-white/80">
          <a href="https://github.com/tkirmizi" target="_blank" rel="noreferrer" class="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/taha-k%C4%B1rm%C4%B1z%C4%B1o%C4%9Flu-31429215a/" target="_blank" rel="noreferrer" class="hover:text-white">LinkedIn</a>
          <a href="mailto:t.kirmizioglu@outlook.com" class="hover:text-white">Mail</a>
        </div>
      </div>
    </footer>

    <Transition name="contact-modal" appear>
      <div
        v-if="isContactOpen"
        class="contact-modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-[2px]"
        @click="closeContact"
      >
        <div class="contact-modal-panel relative w-full max-w-md" @click.stop>
          <button
            type="button"
            class="absolute -right-2 -top-2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-300/40 bg-red-500/90 text-white shadow-lg transition"
            aria-label="Close"
            @click="closeContact"
          >
            ×
          </button>
          <ContactCard />
        </div>
      </div>
    </Transition>

    <Transition name="resume-modal" appear>
      <div
        v-if="isResumeOpen"
        class="fixed inset-0 z-[110] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-[2px]"
        @click="closeResume"
      >
        <div
          class="relative w-full max-w-5xl rounded-2xl border border-white/15 bg-[#0b1220]/95 p-4 shadow-2xl shadow-cyan-900/20"
          @click.stop
        >
          <button
            type="button"
            class="absolute cursor-pointer right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-300/40 bg-red-500/90 text-white shadow-lg transition"
            aria-label="Close resume"
            @click="closeResume"
          >
            ×
          </button>

          <iframe src="/taha_cv_tr.pdf" title="Taha CV" class="h-[72vh] w-full rounded-xl bg-white"></iframe>

          <div class="mt-4 flex justify-end gap-3">
            <a
              href="/taha_cv_tr.pdf"
              target="_blank"
              rel="noreferrer"
              class="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white"
            >
              New Tab
            </a>
            <a
              href="/taha_cv_tr.pdf"
              download
              class="rounded-xl bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-900"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.project-tile {
  transform:
    perspective(1200px)
    rotateX(var(--tile-rotate-x, 0deg))
    rotateY(var(--tile-rotate-y, 0deg))
    translateY(0);
  box-shadow: 0 18px 42px rgba(3, 7, 18, 0.2);
  transition: transform 220ms ease, border-color 220ms ease, background-color 220ms ease, box-shadow 220ms ease;
}

.project-tile:hover {
  transform:
    perspective(1200px)
    rotateX(var(--tile-rotate-x, 0deg))
    rotateY(var(--tile-rotate-y, 0deg))
    translateY(-4px);
  border-color: rgba(103, 232, 249, 0.35);
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 28px 64px rgba(8, 145, 178, 0.18);
}

.project-tile:focus-visible {
  outline: 2px solid rgba(103, 232, 249, 0.55);
  outline-offset: 2px;
}

.project-media {
  transform: translate3d(var(--media-shift-x, 0), var(--media-shift-y, 0), 0) scale(1.02);
  transition: transform 260ms ease, filter 260ms ease;
  filter: saturate(0.95);
}

.project-tile:hover .project-media {
  transform: translate3d(var(--media-shift-x, 0), var(--media-shift-y, 0), 0) scale(1.08);
  filter: saturate(1.08);
}

.project-glow {
  opacity: 0;
  background: radial-gradient(500px 180px at 20% 0%, rgba(103, 232, 249, 0.2), transparent 60%);
  transition: opacity 260ms ease;
}

.project-tile:hover .project-glow {
  opacity: 1;
}

.project-desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.contact-modal-enter-active,
.contact-modal-leave-active {
  transition: opacity 260ms ease;
}

.contact-modal-enter-active .contact-modal-panel,
.contact-modal-leave-active .contact-modal-panel {
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms ease;
}

.contact-modal-enter-from,
.contact-modal-leave-to {
  opacity: 0;
}

.contact-modal-enter-from .contact-modal-panel,
.contact-modal-leave-to .contact-modal-panel {
  opacity: 0;
  transform: translateY(18px) scale(0.94);
}

.resume-modal-enter-active,
.resume-modal-leave-active {
  transition: opacity 260ms ease;
}

.resume-modal-enter-active > div,
.resume-modal-leave-active > div {
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms ease;
}

.resume-modal-enter-from,
.resume-modal-leave-to {
  opacity: 0;
}

.resume-modal-enter-from > div,
.resume-modal-leave-to > div {
  opacity: 0;
  transform: translateY(18px) scale(0.97);
}
</style>
