import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import HubRoundedIcon from '@mui/icons-material/HubRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'

const icons = [AssignmentRoundedIcon, CodeRoundedIcon, HubRoundedIcon, RocketLaunchRoundedIcon]

export default function DeploymentIcon({ index }) {
  const Icon = icons[index] ?? AssignmentRoundedIcon
  return <Icon fontSize="inherit" />
}
