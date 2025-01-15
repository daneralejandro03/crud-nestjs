export class CreateTaskDto {
  title: string;
  status?: 'pending' | 'in-progress' | 'done';
}
