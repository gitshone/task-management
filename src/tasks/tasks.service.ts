import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import * as uuid from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    /**
     * Get task by id
     * 
     * @param id 
     */
    async getTaskById(id: string): Promise<Task> {
        return this.tasks.find(task => task.id === id);
    }

    /**
     * Creates a task
     * 
     * @param createTaskDto 
     */
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {

        const {title, description} = createTaskDto;

        const task: Task = {
            id: uuid.v4(),
            title,
            description,
            status: TaskStatus.OPEN
        };

        this.tasks.push(task);
        return task;
    }

    /**
     * Updates task status
     * 
     * @param id 
     * @param status 
     */
    async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
        const task = await this.getTaskById(id);
        task.status = status;
        return task;
    }

    /**
     * Deletes a task
     * 
     * @param id 
     */
    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
