import transcendenceImage from '../assets/projects/transcendence.svg'
import ftIrcImage from '../assets/projects/ft-irc.svg'
import minishellImage from '../assets/projects/minishell.svg'
import cub3dImage from '../assets/projects/cub3d.svg'
import getNextLineImage from '../assets/projects/get-next-line.svg'
import cppModulesImage from '../assets/projects/cpp-modules.svg'
import inceptionImage from '../assets/projects/inception.svg'
import philosophersImage from '../assets/projects/philosophers.svg'
import pipexImage from '../assets/projects/pipex.svg'
import soLongImage from '../assets/projects/so-long.svg'

export const projects = [
  {
    id: 'transcendence',
    title: 'Transcendence',
    description:
      'A fullstack social platform project with authentication, game and chat flows, and real-time interactions. This is one of the projects I am most proud of.',
    image: transcendenceImage,
    year: '2026',
    repoUrl: 'https://github.com/tkirmizi/ft_transcendence',
    tags: ['Fullstack', 'Real-time', 'Web'],
  },
  {
    id: 'ft-irc',
    title: 'ft_irc',
    description:
      'A custom IRC server where I focused on sockets, command parsing, and client/channel behavior. It was my hands-on deep dive into real-time network programming.',
    image: ftIrcImage,
    year: '2026',
    repoUrl: 'https://github.com/tkirmizi/ft_irc',
    tags: ['C++', 'Networking', 'Sockets'],
  },
  {
    id: 'minishell',
    title: 'Minishell',
    description:
      'A Unix-like shell where I implemented parsing, pipes, redirections, and process management. It gave me strong low-level confidence with systems programming.',
    image: minishellImage,
    year: '2024',
    repoUrl: 'https://github.com/tkirmizi/Unix-shell',
    tags: ['C', 'Unix', 'Processes'],
  },
  {
    id: 'cub3d',
    title: 'Cub3D',
    description:
      'A raycasting-based 3D project inspired by early FPS engines. I worked heavily on rendering math, map parsing, and smooth controls.',
    image: cub3dImage,
    year: '2025',
    repoUrl: 'https://github.com/tkirmizi/Cub3D',
    tags: ['C', 'Graphics', 'Game'],
  },
  {
    id: 'get-next-line',
    title: 'Get-Next-Line',
    description:
      'A utility function that reads a file descriptor line by line with careful memory handling. It was a great exercise in clean buffer logic.',
    image: getNextLineImage,
    year: '2024',
    repoUrl: 'https://github.com/tkirmizi/Get-Next-Line',
    tags: ['C', 'File I/O', 'Memory'],
  },
  {
    id: 'cpp-modules',
    title: 'CPP-Modules',
    description:
      'This repository collects my C++ module journey and exercises in one place. I used it to sharpen OOP basics, memory management, and STL habits.',
    image: cppModulesImage,
    year: '2025',
    repoUrl: 'https://github.com/tkirmizi/CPP-Modules',
    tags: ['C++', 'OOP', 'STL'],
  },
  {
    id: 'inception',
    title: 'Inception',
    description:
      'A Docker-based infrastructure setup where services are isolated and orchestrated together. It taught me how to think in terms of deployment, not just code.',
    image: inceptionImage,
    year: '2025',
    repoUrl: 'https://github.com/tkirmizi/Inception',
    tags: ['Docker', 'DevOps', 'Infra'],
  },
  {
    id: 'philosophers',
    title: 'Philosophers',
    description:
      'A concurrency simulation that forced me to manage timing and shared state carefully. I spent most of the effort preventing race conditions and deadlocks.',
    image: philosophersImage,
    year: '2024',
    repoUrl: 'https://github.com/tkirmizi/Philosophers',
    tags: ['C', 'Threads', 'Synchronization'],
  },
  {
    id: 'pipex',
    title: 'Pipex',
    description:
      'This project recreates shell-like piping behavior at a lower level. It was a strong exercise in file descriptors, process chaining, and error handling.',
    image: pipexImage,
    year: '2024',
    repoUrl: 'https://github.com/tkirmizi/Pipex',
    tags: ['C', 'Pipes', 'Unix'],
  },
  {
    id: 'so-long',
    title: 'so_long',
    description:
      'A small 2D game project with map parsing, movement logic, and simple rendering. It helped me connect algorithmic thinking with visual feedback.',
    image: soLongImage,
    year: '2024',
    repoUrl: 'https://github.com/tkirmizi/so_long',
    tags: ['C', 'Game', 'Graphics'],
  },
]
