import {
  SiDjango, SiDocker, SiGit, SiGithub, SiJavascript, SiLinux, SiMysql, SiNginx,
  SiPhp, SiPostgresql, SiPython, SiReact, SiVite, SiMui,
} from 'react-icons/si'
import StorageRoundedIcon from '@mui/icons-material/StorageRounded'

const iconMap = {
  React: SiReact,
  JavaScript: SiJavascript,
  Vite: SiVite,
  MUI: SiMui,
  Python: SiPython,
  Django: SiDjango,
  'Django REST Framework': SiDjango,
  PHP: SiPhp,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,

  // Referencia genérica de base de datos para evitar cualquier export
  // específico de SQL Server dentro de react-icons.
  'SQL Server': StorageRoundedIcon,
  SQL: StorageRoundedIcon,

  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Linux: SiLinux,
  Ubuntu: SiLinux,
  Nginx: SiNginx,
}

export default function TechIcon({ name }) {
  const Icon = iconMap[name] || StorageRoundedIcon
  return <Icon />
}
