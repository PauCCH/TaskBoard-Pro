import { useTheme } from "../hooks/useTheme"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { THEME } from "../constants/theme-ui.constants"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const ButtonTag = HTML_TAGS.BUTTON

  return (
    <ButtonTag onClick={toggleTheme}>
      {THEME.ACTUAL_THEME}{theme}
    </ButtonTag>
  )
}