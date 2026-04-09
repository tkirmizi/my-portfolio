<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import ProjectTile from '../components/projects/ProjectTile.vue'
import ProjectsModals from '../components/projects/ProjectsModals.vue'
import { PROJECTS } from '../data/projects'

const isContactOpen = ref(false)
const isResumeOpen = ref(false)

const sortedProjects = computed(() => [...PROJECTS].sort((a, b) => b.year - a.year))

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
        <h1 class="text-3xl font-bold tracking-tight text-cyan-300 md:text-4xl">Projects</h1>
        <p class="text-sm text-white/60">{{ sortedProjects.length }} repositories</p>
      </div>

      <section class="grid gap-5 lg:grid-cols-12">
        <ProjectTile
          v-for="(project, index) in sortedProjects"
          :key="project.slug"
          :project="project"
          :layout-class="cardClass(index)"
        />
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

    <ProjectsModals
      :is-contact-open="isContactOpen"
      :is-resume-open="isResumeOpen"
      @close-contact="closeContact"
      @close-resume="closeResume"
    />
  </div>
</template>
