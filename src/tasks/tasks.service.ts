import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  createTask(task: CreateTaskDto) {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  getAllTasks() {
    return this.taskRepository.find();
  }

  getTaskById(id: string) {
    return this.taskRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async updateTask(id: string, task: UpdateTaskDto) {
    await this.taskRepository.update({ id }, task);
    const updatedTask = await this.taskRepository.findOne({
      where: {
        id: id,
      },
    });
    return {
      message: `Tarea con ID ${id} ha sido actualizada`,
      object: updatedTask,
    };
  }

  deleteTask(id: string) {
    this.taskRepository.delete({ id });
    return { message: `Tarea Con ID ${id} ha sido eliminada` };
  }
}
