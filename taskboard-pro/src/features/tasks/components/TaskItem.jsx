import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"

export function TaskItem({ task, onToggleTask, onDeleteTask }) {

  const LiTag = HTML_TAGS.LI
  const ButtonTag = HTML_TAGS.BUTTON

  return (
    <LiTag>
      <span>
        {task.title} -{" "}
        {task.completed
          ? TASK_UI_TEXT.STATUS_COMPLETED
          : TASK_UI_TEXT.STATUS_PENDING}
      </span>

      <ButtonTag onClick={() => onToggleTask(task.id)}>
        {TASK_UI_TEXT.TOGGLE_BUTTON}
      </ButtonTag>

      <ButtonTag onClick={() => onDeleteTask(task.id)}>
        {TASK_UI_TEXT.DELETE_BUTTON}
      </ButtonTag>
    </LiTag>
  )
}