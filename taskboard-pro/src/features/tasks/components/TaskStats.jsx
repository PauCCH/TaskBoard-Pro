import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"

export function TaskStats({ stats }) {

    const SectionTag = HTML_TAGS.SECTION
    const H3Tag = HTML_TAGS.H3
    const Ptag = HTML_TAGS.P

  return (
    <SectionTag>
      <H3Tag>{TASK_UI_TEXT.STATS_TITLE}</H3Tag>
      <Ptag>{TASK_UI_TEXT.STATS_TOTAL}: {stats.total}</Ptag>
      <Ptag>{TASK_UI_TEXT.STATS_COMPLETED}: {stats.completed}</Ptag>
      <Ptag>{TASK_UI_TEXT.STATS_PENDING}: {stats.pending}</Ptag>
    </SectionTag>
  )
}