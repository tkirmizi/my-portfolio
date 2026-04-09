import transcendenceCover from '../assets/projects/transcendence.svg'
import ftIrcCover from '../assets/projects/ft-irc.svg'
import minishellCover from '../assets/projects/minishell.svg'
import cub3dCover from '../assets/projects/cub3d.svg'
import getNextLineCover from '../assets/projects/get-next-line.svg'
import cppModulesCover from '../assets/projects/cpp-modules.svg'
import inceptionCover from '../assets/projects/inception.svg'
import philosophersCover from '../assets/projects/philosophers.svg'
import pipexCover from '../assets/projects/pipex.svg'
import soLongCover from '../assets/projects/so-long.svg'

export const PROJECTS = [
  {
    slug: 'transcendence',
    title: 'Transcendence',
    year: 2026,
    cover: transcendenceCover,
    summary:
      'A fullstack social platform project with authentication, game and chat flows, and real-time interactions. This is one of the projects I am most proud of.',
    repositoryUrl: 'https://github.com/tkirmizi/ft_transcendence',
    technologies: ['Fullstack', 'Realtime', 'Web'],
  },
  {
    slug: 'ft-irc',
    title: 'ft_irc',
    year: 2026,
    cover: ftIrcCover,
    summary:
      'A custom IRC server where I focused on sockets, command parsing, and client/channel behavior. It was my hands-on deep dive into real-time network programming.',
    repositoryUrl: 'https://github.com/tkirmizi/ft_irc',
    technologies: ['C++', 'Networking', 'Sockets'],
  },
  {
    slug: 'minishell',
    title: 'Minishell',
    year: 2024,
    cover: minishellCover,
    summary:
      'A Unix-like shell where I implemented parsing, pipes, redirections, and process management. It gave me strong low-level confidence with systems programming.',
    repositoryUrl: 'https://github.com/tkirmizi/Unix-shell',
    technologies: ['C', 'Unix', 'Processes'],
  },
  {
    slug: 'cub3d',
    title: 'Cub3D',
    year: 2025,
    cover: cub3dCover,
    summary:
      'A raycasting-based 3D project inspired by early FPS engines. I worked heavily on rendering math, map parsing, and smooth controls.',
    repositoryUrl: 'https://github.com/tkirmizi/Cub3D',
    technologies: ['C', 'Graphics', 'Game'],
  },
  {
    slug: 'get-next-line',
    title: 'Get-Next-Line',
    year: 2024,
    cover: getNextLineCover,
    summary:
      'A utility function that reads a file descriptor line by line with careful memory handling. It was a great exercise in clean buffer logic.',
    repositoryUrl: 'https://github.com/tkirmizi/Get-Next-Line',
    technologies: ['C', 'File I/O', 'Memory'],
  },
  {
    slug: 'cpp-modules',
    title: 'CPP-Modules',
    year: 2025,
    cover: cppModulesCover,
    summary:
      'This repository collects my C++ module journey and exercises in one place. I used it to sharpen OOP basics, memory management, and STL habits.',
    repositoryUrl: 'https://github.com/tkirmizi/CPP-Modules',
    technologies: ['C++', 'OOP', 'STL'],
  },
  {
    slug: 'inception',
    title: 'Inception',
    year: 2025,
    cover: inceptionCover,
    summary:
      'A Docker-based infrastructure setup where services are isolated and orchestrated together. It taught me how to think in terms of deployment, not just code.',
    repositoryUrl: 'https://github.com/tkirmizi/Inception',
    technologies: ['Docker', 'DevOps', 'Infra'],
  },
  {
    slug: 'philosophers',
    title: 'Philosophers',
    year: 2024,
    cover: philosophersCover,
    summary:
      'A concurrency simulation that forced me to manage timing and shared state carefully. I spent most of the effort preventing race conditions and deadlocks.',
    repositoryUrl: 'https://github.com/tkirmizi/Philosophers',
    technologies: ['C', 'Threads', 'Synchronization'],
  },
  {
    slug: 'pipex',
    title: 'Pipex',
    year: 2024,
    cover: pipexCover,
    summary:
      'This project recreates shell-like piping behavior at a lower level. It was a strong exercise in file descriptors, process chaining, and error handling.',
    repositoryUrl: 'https://github.com/tkirmizi/Pipex',
    technologies: ['C', 'Pipes', 'Unix'],
  },
  {
    slug: 'so-long',
    title: 'so_long',
    year: 2024,
    cover: soLongCover,
    summary:
      'A small 2D game project with map parsing, movement logic, and simple rendering. It helped me connect algorithmic thinking with visual feedback.',
    repositoryUrl: 'https://github.com/tkirmizi/so_long',
    technologies: ['C', 'Game', 'Graphics'],
  },
]
