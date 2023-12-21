import { TaskCounterStatusType } from '../interface/ITaskCounter';
import { Status } from '../../createTaskForm/enums/Status';

export const emitCorrectLabel = (
  status: TaskCounterStatusType,
): string => {
  switch (status) {
    case Status.todo:
      return 'todo';
    case Status.inProgress:
      return 'inProgress';
    case Status.completed:
      return 'completed';
  }
};
