import { Status } from '../../createTaskForm/enum/Status';

export type TaskCounterStatusType =
  | Status.todo
  | Status.inProgress
  | Status.completed;

export type TaskCounterType = {
  status?: TaskCounterStatusType;
  count?: number;
};
