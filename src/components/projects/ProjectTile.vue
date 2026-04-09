<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  layoutClass: {
    type: String,
    default: '',
  },
})

const stackBadges = computed(() => {
  const badges = []
  const tech = props.project.technologies ?? []

  if (tech.includes('C++')) badges.push('C++')
  if (tech.includes('C')) badges.push('C')
  if (tech.includes('Docker')) badges.push('D')
  if (tech.includes('Networking') || tech.includes('Sockets')) badges.push('N')
  if (tech.includes('Graphics') || tech.includes('Game')) badges.push('G')
  if (tech.includes('Realtime')) badges.push('R')
  if (tech.includes('Unix') || tech.includes('Processes')) badges.push('U')

  if (badges.length === 0) badges.push('S')

  return badges.slice(0, 3)
})

function handleMove(event) {
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

function resetTile(event) {
  const element = event.currentTarget

  if (!element) return

  element.style.setProperty('--tile-rotate-x', '0deg')
  element.style.setProperty('--tile-rotate-y', '0deg')
  element.style.setProperty('--media-shift-x', '0px')
  element.style.setProperty('--media-shift-y', '0px')
}

function initials(value) {
  return value
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
}
</script>

<template>
  <a
    :href="project.repositoryUrl"
    target="_blank"
    rel="noreferrer"
    class="project-tile group overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03]"
    :class="layoutClass"
    @pointermove="handleMove"
    @pointerleave="resetTile"
  >
    <div class="relative h-48 overflow-hidden border-b border-white/10">
      <img
        v-if="project.cover"
        :src="project.cover"
        :alt="project.title"
        class="project-media h-full w-full object-cover"
      />
      <div
        v-else
        class="project-placeholder flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.3),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.24),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.26),transparent_60%),#0c1424]"
      >
        <span class="text-4xl font-bold tracking-wider text-white/70">{{ initials(project.title) }}</span>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/20 to-transparent"></div>
      <div class="project-glow absolute inset-0"></div>
    </div>

    <div class="p-5">
      <div class="flex items-start justify-between gap-3">
        <h2 class="text-xl font-semibold tracking-tight text-white">{{ project.title }}</h2>
        <span class="rounded-lg border border-white/15 px-2 py-1 text-xs text-white/60">{{ project.year }}</span>
      </div>

      <p class="project-desc mt-3 text-sm leading-7 text-white/75">{{ project.summary }}</p>

      <div class="mt-4 flex items-center gap-2">
        <span
          v-for="badge in stackBadges"
          :key="`${project.slug}-icon-${badge}`"
          class="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-2 text-[0.65rem] font-semibold text-white/75"
        >
          {{ badge }}
        </span>
      </div>

      <div class="mt-5 flex items-center justify-between">
        <span class="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/80">View repository</span>
        <span class="text-cyan-200 transition group-hover:translate-x-1">↗</span>
      </div>
    </div>
  </a>
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
</style>
