import { ITaskFooter } from './ITaskFooter';
import { ITaskDescription } from './ITsakDescription';
import { ITaskHeader } from './ITaskHeader';

export interface ITask
  extends ITaskDescription,
    ITaskFooter,
    ITaskHeader {
  id?: string;
  priority?: string;
  status?: string;
}
