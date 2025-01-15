export class UpdateTaskDto {
  title?: string;
  status?: 'pending' | 'in-progress' | 'done';
}
